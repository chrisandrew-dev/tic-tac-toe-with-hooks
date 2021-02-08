import React from 'react'

const style = {
  border:     '1px solid grey',
  fontSize:   '40px',
  fontWeight: '800',
  cursor:     'pointer',
  outline:    'none'
}

const Square = ({ value, onClick }) => (
  <button 
    style={style} 
    onClick={onClick}
  >
    {value}
  </button>
)

export default Square
