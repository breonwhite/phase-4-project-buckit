import React, { useState, useEffect, useContext } from 'react'
import Toggle from 'react'
import { UserContext } from '../../context/user' 

const ItemForm = () => {
  const [ item, setItem ] = useState({
    description: "",
    category_id: "",
  })
  const { addItem } = useContext(UserContext)

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
            <input type="submit"/>
        </form>
    </div>
  )
}

export default ItemForm