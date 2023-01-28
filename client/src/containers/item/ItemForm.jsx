import React, { useState, useEffect } from 'react'
import Toggle from 'react'

const ItemForm = () => {
  const [ item, setItem ] = useState({
    user_id: "",
    description: "",
    category_id: "",
  })

  const handleChange = () => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
        <h1>Item Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Description</label>
          <input 
            type="text"
            name="description"
            onChange={handleChange}
            value={item.description}
            />
            <input type="submit"/>
        </form>
    </div>
  )
}

export default ItemForm