import React, { useState, useEffect } from 'react'

const ItemEdit = ({ thisItem, editItem }) => {
    const [ item, setItem ] = useState({
        //prefills the edit form fields with the current todo
        id: thisItem.id,
        user_id: thisItem.user_id,
        description: thisItem.description,
        category_id: thisItem.category_id,
    })

    const handleChange = (e) => {
        setItem({
            ...item, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editItem(item)
    }

  return (
    <div>
        <h1>ItemEdit</h1>
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

export default ItemEdit
