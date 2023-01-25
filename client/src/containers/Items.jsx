import React, { useState, useEffect } from 'react'

const Items = () => {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setItems(data)
    })
  }, [])

  
    return (
    <div>
        <h1>All Items</h1>
        <ul>
          {items.map((item, index) => <li key={ index }>{ item.category.title } : { item.description }</li>)}
        </ul>
    </div>
  )
}

export default Items