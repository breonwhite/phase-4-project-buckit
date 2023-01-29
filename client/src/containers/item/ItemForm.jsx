import React, { useState, useEffect } from 'react'
import Toggle from 'react'

const ItemForm = ({ addItem }) => {
  const [ item, setItem ] = useState({
    user_id: "",
    description: "",
    category_id: "",
  })

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //adds new items that are submitted in ItemForm, passed fuction to /Items
    addItem(item)
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
            <br />
            <label>Category</label>
            <input 
            type="number"
            name="category_id"
            onChange={handleChange}
            value={item.category_id}
            />
            <br />
            <label>User ID - Temporary</label>
            <input 
            type="number"
            name="user_id"
            onChange={handleChange}
            value={item.user_id}
            />
            <input type="submit"/>
        </form>
    </div>
  )
}

export default ItemForm