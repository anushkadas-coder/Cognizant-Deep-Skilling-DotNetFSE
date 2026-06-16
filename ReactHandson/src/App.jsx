import React, { useState, useEffect, useRef } from 'react'

// ── Inline styles ──────────────────────────────────────────────────────────────
const S = {
  root: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: '#F0F2F5',
    minHeight: '100vh',
    padding: '24px 16px',
    boxSizing: 'border-box',
  },
  container: { maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 },

  // Header
  header: {
    background: '#fff',
    border: '1px solid #E4E8EF',
    borderRadius: 12,
    padding: '14px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: { display: 'flex', alignItems: 'center', gap: 12 },
  logoBox: {
    width: 34, height: 34, borderRadius: 8,
    background: '#EEF3FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  logoIcon: { fontSize: 17, color: '#3B6BF8' },
  headerTitle: { fontSize: 14, fontWeight: 600, color: '#0D1117', margin: 0 },
  headerSub: { fontSize: 12, color: '#7A8499', margin: '2px 0 0' },
  headerBadge: {
    fontSize: 11, fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    background: '#ECFDF3', color: '#16A34A',
    padding: '3px 10px', borderRadius: 20, fontWeight: 500,
  },

  // Stat cards
  statRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 },
  statCard: {
    background: '#fff', border: '1px solid #E4E8EF', borderRadius: 10, padding: '14px 16px',
  },
  statLabel: {
    fontSize: 11, fontWeight: 500, color: '#7A8499',
    textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6,
  },
  statValue: {
    fontSize: 22, fontWeight: 600, color: '#0D1117',
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  },
  statValueSm: {
    fontSize: 16, fontWeight: 600, color: '#0D1117',
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  },
  statDelta: { fontSize: 11, color: '#16A34A', marginTop: 4 },

  // Panel
  panel: { background: '#fff', border: '1px solid #E4E8EF', borderRadius: 12, overflow: 'hidden' },
  panelHead: {
    padding: '11px 16px', borderBottom: '1px solid #E4E8EF',
    display: 'flex', alignItems: 'center', gap: 8, background: '#FAFBFC',
  },
  panelTitle: { fontSize: 13, fontWeight: 500, color: '#0D1117' },
  panelTag: {
    fontSize: 10, fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    background: '#F0F2F5', color: '#7A8499',
    border: '1px solid #E4E8EF', padding: '2px 6px', borderRadius: 4, marginLeft: 'auto',
  },

  // Form
  formRow: { display: 'flex', gap: 8, padding: '14px 16px', flexWrap: 'wrap', alignItems: 'center' },
  input: {
    height: 34, padding: '0 10px', fontSize: 13,
    fontFamily: "'Inter', sans-serif",
    border: '1px solid #D1D9E6', borderRadius: 7,
    background: '#F9FAFB', color: '#0D1117',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  },
  btnAdd: {
    height: 34, padding: '0 14px', fontSize: 13, fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    background: '#0D1117', color: '#fff',
    border: 'none', borderRadius: 7, cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
    transition: 'opacity 0.15s',
  },
  errMsg: { fontSize: 12, color: '#DC2626', padding: '0 16px 12px', display: 'flex', alignItems: 'center', gap: 5 },

  // Search
  searchWrap: { padding: '12px 16px', position: 'relative' },
  searchInput: {
    width: '100%', height: 36, padding: '0 38px', fontSize: 13,
    fontFamily: "'Inter', sans-serif",
    border: '1px solid #D1D9E6', borderRadius: 7,
    background: '#F9FAFB', color: '#0D1117',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  },
  searchIcon: {
    position: 'absolute', left: 28, top: '50%', transform: 'translateY(-50%)',
    fontSize: 15, color: '#9BA5B7', pointerEvents: 'none',
  },
  liveDot: {
    position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%)',
    width: 7, height: 7, borderRadius: '50%', background: '#16A34A',
    transition: 'opacity 0.2s',
  },

  // Table
  tableWrap: { width: '100%', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: {
    fontSize: 11, fontWeight: 500, color: '#7A8499',
    textTransform: 'uppercase', letterSpacing: '0.06em',
    padding: '9px 16px', textAlign: 'left',
    borderBottom: '1px solid #E4E8EF', background: '#FAFBFC',
  },
  td: { padding: '11px 16px', fontSize: 13, color: '#0D1117', borderBottom: '1px solid #F0F2F5' },
  tdId: { fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: 12, color: '#9BA5B7' },
  tdName: { fontWeight: 500 },
  tdPrice: { fontFamily: "'JetBrains Mono', 'Fira Code', monospace" },
  emptyState: { padding: '36px 16px', textAlign: 'center', color: '#9BA5B7', fontSize: 13 },

  // Toast
  toastBase: {
    position: 'fixed', bottom: 24, right: 24,
    background: '#fff', border: '1px solid #BBF7D0',
    color: '#16A34A', fontSize: 13, fontWeight: 500,
    padding: '10px 14px', borderRadius: 9,
    display: 'flex', alignItems: 'center', gap: 7,
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    transition: 'opacity 0.2s, transform 0.2s',
    zIndex: 999, pointerEvents: 'none',
  },
}

// ── Utility helpers ────────────────────────────────────────────────────────────
const pad = (n) => `#${String(n).padStart(3, '0')}`
const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`

function stockStyle(stock) {
  if (stock > 20) return { background: '#ECFDF3', color: '#16A34A', border: '1px solid #BBF7D0' }
  if (stock > 5)  return { background: '#FFFBEB', color: '#D97706', border: '1px solid #FDE68A' }
  return               { background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA' }
}

function stockIcon(stock) {
  if (stock > 20) return '✓'
  if (stock > 5)  return '▲'
  return '!'
}

// ── Sub-components ─────────────────────────────────────────────────────────────
function StatCard({ label, value, note, small }) {
  return (
    <div style={S.statCard}>
      <div style={S.statLabel}>{label}</div>
      <div style={small ? S.statValueSm : S.statValue}>{value}</div>
      <div style={S.statDelta}>{note}</div>
    </div>
  )
}

function PanelHeader({ icon, title, tag }) {
  return (
    <div style={S.panelHead}>
      <span style={{ fontSize: 15, color: '#7A8499' }}>{icon}</span>
      <span style={S.panelTitle}>{title}</span>
      <span style={S.panelTag}>{tag}</span>
    </div>
  )
}

function StockPill({ stock }) {
  const st = stockStyle(stock)
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontSize: 12, fontWeight: 500, padding: '3px 8px', borderRadius: 20, ...st,
    }}>
      {stockIcon(stock)} {stock}
    </span>
  )
}

function RestockButton({ onClick }) {
  const [hover, setHover] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: 12, fontWeight: 500, fontFamily: "'Inter', sans-serif",
        padding: '5px 10px', borderRadius: 7,
        border: '1px solid #D1D9E6',
        background: hover ? '#F0F2F5' : '#fff',
        color: hover ? '#0D1117' : '#7A8499',
        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5,
        transition: 'all 0.12s',
      }}
    >
      ↻ Restock +5
    </button>
  )
}

function Toast({ message, visible }) {
  return (
    <div style={{
      ...S.toastBase,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(8px)',
    }}>
      ✓ {message}
    </div>
  )
}

// ── Main App ───────────────────────────────────────────────────────────────────
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Gaming Laptop',       price: 95000, stock: 10 },
    { id: 2, name: 'Wireless Mouse',      price: 1500,  stock: 50 },
    { id: 3, name: 'Mechanical Keyboard', price: 4500,  stock: 25 },
  ])
  const nextId = useRef(4)

  // Lab 4 — controlled form fields
  const [newName,  setNewName]  = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newStock, setNewStock] = useState('')
  const [formErr,  setFormErr]  = useState(false)

  // Lab 5 — live search
  const [searchTerm, setSearchTerm] = useState('')
  const [dotActive,  setDotActive]  = useState(false)
  const dotTimer = useRef(null)

  // Toast
  const [toast, setToast]   = useState({ msg: '', visible: false })
  const toastTimer = useRef(null)

  // Input focus style helper
  const [focusedInput, setFocusedInput] = useState(null)

  function showToast(msg) {
    setToast({ msg, visible: true })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 2500)
  }

  // Lab 3 — restock handler
  function handleUpdateStock(id) {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: p.stock + 5 } : p))
    const prod = products.find(p => p.id === id)
    showToast(`${prod.name} restocked — now ${prod.stock + 5} units`)
  }

  // Lab 4 — add product
  function handleAddProduct() {
    const price = parseFloat(newPrice)
    const stock = parseInt(newStock)
    if (!newName.trim() || isNaN(price) || isNaN(stock)) { setFormErr(true); return }
    setFormErr(false)
    setProducts(prev => [...prev, { id: nextId.current++, name: newName.trim(), price, stock }])
    showToast(`"${newName.trim()}" added to inventory`)
    setNewName(''); setNewPrice(''); setNewStock('')
  }

  // Lab 5 — search
  function handleSearch(val) {
    setSearchTerm(val)
    setDotActive(true)
    clearTimeout(dotTimer.current)
    dotTimer.current = setTimeout(() => setDotActive(false), 800)
  }

  // Derived stats
  const totalStock = products.reduce((a, p) => a + p.stock, 0)
  const totalValue = products.reduce((a, p) => a + p.price * p.stock, 0)

  // Lab 5 — filtered list
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function focusStyle(id) {
    return focusedInput === id
      ? { ...S.input, borderColor: '#3B6BF8', boxShadow: '0 0 0 3px rgba(59,107,248,0.12)' }
      : S.input
  }

  function focusSearchStyle() {
    return focusedInput === 'search'
      ? { ...S.searchInput, borderColor: '#3B6BF8', boxShadow: '0 0 0 3px rgba(59,107,248,0.12)' }
      : S.searchInput
  }

  return (
    <div style={S.root}>
      <div style={S.container}>

        {/* ── Header ── */}
        <header style={S.header}>
          <div style={S.headerLeft}>
            <div style={S.logoBox}>
              <span style={S.logoIcon}>⊞</span>
            </div>
            <div>
              <p style={S.headerTitle}>Inventory Dashboard</p>
              <p style={S.headerSub}>Cognizant FSE Training — Labs 1–5</p>
            </div>
          </div>
          <span style={S.headerBadge}>
            {products.length} item{products.length !== 1 ? 's' : ''}
          </span>
        </header>

        {/* ── Stat cards ── */}
        <div style={S.statRow}>
          <StatCard label="SKUs" value={products.length} note="↑ products tracked" />
          <StatCard label="Total units" value={totalStock} note="↑ units in stock" />
          <StatCard label="Inventory value" value={inr(totalValue)} note="↑ estimated worth" small />
        </div>

        {/* ── Lab 4: Add product form ── */}
        <div style={S.panel}>
          <PanelHeader icon="＋" title="Add product" tag="Lab 4 · controlled form" />
          <div style={S.formRow}>
            <input
              type="text"
              placeholder="Product name"
              value={newName}
              onChange={e => { setNewName(e.target.value); setFormErr(false) }}
              onKeyDown={e => e.key === 'Enter' && handleAddProduct()}
              onFocus={() => setFocusedInput('name')}
              onBlur={() => setFocusedInput(null)}
              style={{ ...focusStyle('name'), flex: 1, minWidth: 140 }}
            />
            <input
              type="number"
              placeholder="Price ₹"
              value={newPrice}
              onChange={e => { setNewPrice(e.target.value); setFormErr(false) }}
              onFocus={() => setFocusedInput('price')}
              onBlur={() => setFocusedInput(null)}
              style={{ ...focusStyle('price'), width: 100 }}
            />
            <input
              type="number"
              placeholder="Stock"
              value={newStock}
              onChange={e => { setNewStock(e.target.value); setFormErr(false) }}
              onFocus={() => setFocusedInput('stock')}
              onBlur={() => setFocusedInput(null)}
              style={{ ...focusStyle('stock'), width: 80 }}
            />
            <button
              onClick={handleAddProduct}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              style={S.btnAdd}
            >
              + Add item
            </button>
          </div>
          {formErr && (
            <div style={S.errMsg}>⚠ Fill in all three fields before adding.</div>
          )}
        </div>

        {/* ── Lab 5: Live search ── */}
        <div style={S.panel}>
          <PanelHeader icon="⌕" title="Filter inventory" tag="Lab 5 · live search" />
          <div style={S.searchWrap}>
            <span style={S.searchIcon}>⌕</span>
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchTerm}
              onChange={e => handleSearch(e.target.value)}
              onFocus={() => setFocusedInput('search')}
              onBlur={() => setFocusedInput(null)}
              style={focusSearchStyle()}
            />
            <div style={{
              ...S.liveDot,
              opacity: dotActive ? 1 : 0.35,
              transform: `translateY(-50%) scale(${dotActive ? 1.2 : 1})`,
              transition: 'opacity 0.2s, transform 0.2s',
            }} />
          </div>
        </div>

        {/* ── Stock table ── */}
        <div style={S.panel}>
          <PanelHeader
            icon="▦"
            title="Stock list"
            tag={`${filtered.length} result${filtered.length !== 1 ? 's' : ''}`}
          />
          <div style={S.tableWrap}>
            {filtered.length === 0 ? (
              <div style={S.emptyState}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>○</div>
                No products match your search.
              </div>
            ) : (
              <table style={S.table}>
                <thead>
                  <tr>
                    {['ID', 'Product', 'Price', 'Stock', 'Action'].map(h => (
                      <th key={h} style={S.th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p, i) => (
                    <ProductRow
                      key={p.id}
                      product={p}
                      isLast={i === filtered.length - 1}
                      onRestock={() => handleUpdateStock(p.id)}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>

      <Toast message={toast.msg} visible={toast.visible} />
    </div>
  )
}

// ── ProductRow (replaces ProductItem) ──────────────────────────────────────────
function ProductRow({ product, isLast, onRestock }) {
  const [hovered, setHovered] = useState(false)
  const tdStyle = {
    ...S.td,
    borderBottom: isLast ? 'none' : '1px solid #F0F2F5',
    background: hovered ? '#FAFBFC' : 'transparent',
    transition: 'background 0.1s',
  }
  return (
    <tr onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <td style={{ ...tdStyle, ...S.tdId }}>{pad(product.id)}</td>
      <td style={{ ...tdStyle, ...S.tdName }}>{product.name}</td>
      <td style={{ ...tdStyle, ...S.tdPrice }}>{inr(product.price)}</td>
      <td style={tdStyle}><StockPill stock={product.stock} /></td>
      <td style={tdStyle}><RestockButton onClick={onRestock} /></td>
    </tr>
  )
}

export default App