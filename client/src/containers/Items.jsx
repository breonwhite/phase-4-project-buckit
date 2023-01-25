import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


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
          {items.map((item, index) => <li key={ index }>{ item.category.title } : { item.description } 
           <Link to={`/items/${item.id}`}>
            <button type="button">
                Edit
            </button>
          </Link>
          </li>)}
        </ul>
    </div>
  )
}

export default Items