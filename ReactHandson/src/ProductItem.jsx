import React from 'react'

// Lab 2: Child component receiving dynamic data via Props
function ProductItem({ id, name, price, stock, onUpdateStock }) {
  return (
    <div style={{ 
      background: '#fff', 
      padding: '15px', 
      margin: '12px 0', 
      borderRadius: '8px', 
      borderLeft: '5px solid #005a9c', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
    }}>
      <div>
        <h4 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '18px' }}>{name}</h4>
        <p style={{ margin: 0, color: '#666' }}>Price: ₹{price} | Stock: <strong style={{ color: stock < 15 ? 'red' : 'green' }}>{stock} units</strong></p>
      </div>
      
      {/* Lab 3: Event Handler trigger on user click */}
      <button 
        onClick={() => onUpdateStock(id)} 
        style={{ 
          background: '#005a9c', 
          color: '#fff', 
          border: 'none', 
          padding: '8px 16px', 
          borderRadius: '4px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Restock (+5)
      </button>
    </div>
  )
}

export default ProductItem