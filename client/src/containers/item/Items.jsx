import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import EditLink from '../../components/EditLink';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';

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

  //adds new items that are submitted in ItemForm
  const addItem = (item) => {
    console.log(item)
    fetch("http://localhost:3000/items", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(data => {
      setItems([...items, data])
    })

  }

  
    return (
    <div>
        <h1>All Items</h1>
        <ItemForm addItem={addItem} />
        <ul>
          {items.map((item, index) => 
          <li key={ index }>
            <ItemCard item={item}/> 
           <EditLink item={item}/>
          </li>)}
        </ul>
    </div>
  )
}

export default Items