import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios' // Axios import kiya

// Backend API Base URL (Aapka Swagger Port)
const API_BASE_URL = 'https://localhost:7267/api/Products'

// ── Inline styles (Wahi premium dashboard standard) ───────────────────────────
const S = {
  root: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#F0F2F5', minHeight: '100vh', padding: '24px 16px', boxSizing: 'border-box' },
  container: { maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 },
  header: { background: '#fff', border: '1px solid #E4E8EF', borderRadius: 12, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  headerLeft: { display: 'flex', alignItems: 'center', gap: 12 },
  logoBox: { width: 34, height: 34, borderRadius: 8, background: '#EEF3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  logoIcon: { fontSize: 17, color: '#3B6BF8' },
  headerTitle: { fontSize: 14, fontWeight: 600, color: '#0D1117', margin: 0 },
  headerSub: { fontSize: 12, color: '#7A8499', margin: '2px 0 0' },
  headerBadge: { fontSize: 11, fontFamily: "'JetBrains Mono', monospace", background: '#ECFDF3', color: '#16A34A', padding: '3px 10px', borderRadius: 20, fontWeight: 500 },
  statRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 },
  statCard: { background: '#fff', border: '1px solid #E4E8EF', borderRadius: 10, padding: '14px 16px' },
  statLabel: { fontSize: 11, fontWeight: 500, color: '#7A8499', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 },
  statValue: { fontSize: 22, fontWeight: 600, color: '#0D1117', fontFamily: "'JetBrains Mono', monospace" },
  statValueSm: { fontSize: 16, fontWeight: 600, color: '#0D1117', fontFamily: "'JetBrains Mono', monospace" },
  statDelta: { fontSize: 11, color: '#16A34A', marginTop: 4 },
  panel: { background: '#fff', border: '1px solid #E4E8EF', borderRadius: 12, overflow: 'hidden' },
  panelHead: { padding: '11px 16px', borderBottom: '1px solid #E4E8EF', display: 'flex', alignItems: 'center', gap: 8, background: '#FAFBFC' },
  panelTitle: { fontSize: 13, fontWeight: 500, color: '#0D1117' },
  panelTag: { fontSize: 10, fontFamily: "'JetBrains Mono', monospace", background: '#F0F2F5', color: '#7A8499', border: '1px solid #E4E8EF', padding: '2px 6px', borderRadius: 4, marginLeft: 'auto' },
  formRow: { display: 'flex', gap: 8, padding: '14px 16px', flexWrap: 'wrap', alignItems: 'center' },
  input: { height: 34, padding: '0 10px', fontSize: 13, fontFamily: "'Inter', sans-serif", border: '1px solid #D1D9E6', borderRadius: 7, background: '#F9FAFB', color: '#0D1117', outline: 'none', boxSizing: 'border-box' },
  btnAdd: { height: 34, padding: '0 14px', fontSize: 13, fontWeight: 600, fontFamily: "'Inter', sans-serif", background: '#0D1117', color: '#fff', border: 'none', borderRadius: 7, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' },
  errMsg: { fontSize: 12, color: '#DC2626', padding: '0 16px 12px', display: 'flex', alignItems: 'center', gap: 5 },
  searchWrap: { padding: '12px 16px', position: 'relative' },
  searchInput: { width: '100%', height: 36, padding: '0 38px', fontSize: 13, fontFamily: "'Inter', sans-serif", border: '1px solid #D1D9E6', borderRadius: 7, background: '#F9FAFB', color: '#0D1117', outline: 'none', boxSizing: 'border-box' },
  searchIcon: { position: 'absolute', left: 28, top: '50%', transform: 'translateY(-50%)', fontSize: 15, color: '#9BA5B7', pointerEvents: 'none' },
  liveDot: { position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%)', width: 7, height: 7, borderRadius: '50%', background: '#16A34A' },
  tableWrap: { width: '100%', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { fontSize: 11, fontWeight: 500, color: '#7A8499', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '9px 16px', textAlign: 'left', borderBottom: '1px solid #E4E8EF', background: '#FAFBFC' },
  td: { padding: '11px 16px', fontSize: 13, color: '#0D1117', borderBottom: '1px solid #F0F2F5' },
  tdId: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#9BA5B7' },
  tdName: { fontWeight: 500 },
  tdPrice: { fontFamily: "'JetBrains Mono', monospace" },
  emptyState: { padding: '36px 16px', textAlign: 'center', color: '#9BA5B7', fontSize: 13 },
  toastBase: { position: 'fixed', bottom: 24, right: 24, background: '#fff', border: '1px solid #BBF7D0', color: '#16A34A', fontSize: 13, fontWeight: 500, padding: '10px 14px', borderRadius: 9, display: 'flex', alignItems: 'center', gap: 7, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', zIndex: 999, pointerEvents: 'none', transition: 'all 0.2s' },
}

const pad = (n) => `#${String(n).padStart(3, '0')}`
const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`

function stockStyle(stock) {
  if (stock > 20) return { background: '#ECFDF3', color: '#16A34A', border: '1px solid #BBF7D0' }
  if (stock > 5)  return { background: '#FFFBEB', color: '#D97706', border: '1px solid #FDE68A' }
  return               { background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA' }
}

// ── Main App Component ─────────────────────────────────────────────────────────
function App() {
  const [products, setProducts] = useState([]) // Ab data backend se aayega!
  const [newName, setNewName]   = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newStock, setNewStock] = useState('')
  const [formErr, setFormErr]   = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [dotActive, setDotActive]   = useState(false)
  const [toast, setToast]       = useState({ msg: '', visible: false })
  const [focusedInput, setFocusedInput] = useState(null)
  
  const toastTimer = useRef(null)
  const dotTimer = useRef(null)

  // === LAB INTEGRATION: EFFECT HOOK (GET ALL) ===
  useEffect(() => {
    loadDatabaseProducts()
  }, [])

  async function loadDatabaseProducts() {
    try {
      const res = await axios.get(API_BASE_URL)
      setProducts(res.data)
    } catch (err) {
      showToast("Error: Backend server se data nahi aa paaya!")
    }
  }

  function showToast(msg) {
    setToast({ msg, visible: true })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 2500)
  }

  // === LAB INTEGRATION: HTTP PUT (RESTOCK +5) ===
  async function handleUpdateStock(id) {
    const originalProd = products.find(p => p.id === id)
    if (!originalProd) return

    const updatedPayload = {
      ...originalProd,
      stock: originalProd.stock + 5
    }

    try {
      // Hit backend PUT endpoint: api/Products/{id}
      await axios.put(`${API_BASE_URL}/${id}`, updatedPayload)
      
      // Update UI state locally upon success
      setProducts(prev => prev.map(p => p.id === id ? updatedPayload : p))
      showToast(`${originalProd.name} restocked — now ${updatedPayload.stock} units`)
    } catch (err) {
      showToast("Error: Stock update server par fail ho gaya!")
    }
  }

  // === LAB INTEGRATION: HTTP POST (ADD PRODUCT) ===
  async function handleAddProduct() {
    const price = parseFloat(newPrice)
    const stock = parseInt(newStock)
    if (!newName.trim() || isNaN(price) || isNaN(stock)) { setFormErr(true); return }
    setFormErr(false)

    const payload = { name: newName.trim(), price, stock }

    try {
      // Hit backend POST endpoint
      const res = await axios.post(API_BASE_URL, payload)
      
      // Add newly generated item with server-assigned primary key ID
      setProducts(prev => [...prev, res.data])
      showToast(`"${res.data.name}" added to server database!`)
      setNewName(''); setNewPrice(''); setNewStock('')
    } catch (err) {
      showToast("Error: Model Validation fail hui ya server down hai!")
    }
  }

  function handleSearch(val) {
    setSearchTerm(val)
    setDotActive(true)
    clearTimeout(dotTimer.current)
    dotTimer.current = setTimeout(() => setDotActive(false), 800)
  }

  const totalStock = products.reduce((a, p) => a + p.stock, 0)
  const totalValue = products.reduce((a, p) => a + p.price * p.stock, 0)
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div style={S.root}>
      <div style={S.container}>

        {/* Header */}
        <header style={S.header}>
          <div style={S.headerLeft}>
            <div style={S.logoBox}><span style={S.logoIcon}>⊞</span></div>
            <div>
              <p style={S.headerTitle}>Live Database Dashboard</p>
              <p style={S.headerSub}>ASP.NET Core 8.0 API + React Full-Stack</p>
            </div>
          </div>
          <span style={S.headerBadge}>{products.length} active SKUs</span>
        </header>

        {/* Dynamic Stats calculated from Live Server JSON */}
        <div style={S.statRow}>
          <div style={S.statCard}><div style={S.statLabel}>Total SKUs</div><div style={S.statValue}>{products.length}</div><div style={S.statDelta}>Live Sync</div></div>
          <div style={S.statCard}><div style={S.statLabel}>Total units</div><div style={S.statValue}>{totalStock}</div><div style={S.statDelta}>In-Stock count</div></div>
          <div style={S.statCard}><div style={S.statLabel}>Inventory value</div><div style={S.statValueSm}>{inr(totalValue)}</div><div style={S.statDelta}>Live Valuation</div></div>
        </div>

        {/* Form component */}
        <div style={S.panel}>
          <div style={S.panelHead}><span style={S.panelTitle}>＋ Add New Database Entry</span><span style={S.panelTag}>HTTP POST</span></div>
          <div style={S.formRow}>
            <input type="text" placeholder="Product name" value={newName} onChange={e => setNewName(e.target.value)} style={{ ...S.input, flex: 1, minWidth: 140 }} />
            <input type="number" placeholder="Price ₹" value={newPrice} onChange={e => setNewPrice(e.target.value)} style={{ ...S.input, width: 100 }} />
            <input type="number" placeholder="Stock" value={newStock} onChange={e => setNewStock(e.target.value)} style={{ ...S.input, width: 80 }} />
            <button onClick={handleAddProduct} style={S.btnAdd}>+ Commit to DB</button>
          </div>
          {formErr && <div style={S.errMsg}>⚠ Fill in all fields correctly.</div>}
        </div>

        {/* Search */}
        <div style={S.panel}>
          <div style={S.panelHead}><span style={S.panelTitle}>⌕ Client-Side Live Filter</span><span style={S.panelTag}>Reactive Filtering</span></div>
          <div style={S.searchWrap}>
            <span style={S.searchIcon}>⌕</span>
            <input type="text" placeholder="Search live items..." value={searchTerm} onChange={e => handleSearch(e.target.value)} style={S.searchInput} />
            <div style={{ ...S.liveDot, opacity: dotActive ? 1 : 0.35 }} />
          </div>
        </div>

        {/* Data Grid Table */}
        <div style={S.panel}>
          <div style={S.panelHead}><span style={S.panelTitle}>▦ SQL Server Live Catalog Mirror</span><span style={S.panelTag}>{filtered.length} visible</span></div>
          <div style={S.tableWrap}>
            {filtered.length === 0 ? (
              <div style={S.emptyState}>No products found matching query.</div>
            ) : (
              <table style={S.table}>
                <thead>
                  <tr>{['ID', 'Product', 'Price', 'Stock', 'Action'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {filtered.map((p, i) => (
                    <tr key={p.id}>
                      <td style={S.td}>{pad(p.id)}</td>
                      <td style={{ ...S.td, fontWeight: 500 }}>{p.name}</td>
                      <td style={S.td}>{inr(p.price)}</td>
                      <td style={S.td}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 500, padding: '3px 8px', borderRadius: 20, ...stockStyle(p.stock) }}>
                          {p.stock}
                        </span>
                      </td>
                      <td style={S.td}>
                        <button onClick={() => handleUpdateStock(p.id)} style={{ fontSize: 12, padding: '5px 10px', borderRadius: 7, border: '1px solid #D1D9E6', background: '#fff', cursor: 'pointer' }}>
                          ↻ Restock +5
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
      <div style={{ ...S.toastBase, opacity: toast.visible ? 1 : 0, transform: toast.visible ? 'translateY(0)' : 'translateY(8px)' }}>✓ {toast.msg}</div>
    </div>
  )
}

export default App