import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import EditLink from '../../components/EditLink';
import { UserContext } from '../../context/user';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';

const Items = () => {
  const { items, loggedIn, addItem } = useContext(UserContext);
  // const [ items, setItems ] = useState([])
  const params = useParams();

  // useEffect(() => {
  //   fetch("http://localhost:3000/items")
  //   .then(response => response.json())
  //   .then(data => {
  //       console.log(data)
  //       setItems(data)
  //   })
  // }, [])

  //adds new items that are submitted in ItemForm
  // const addItem = (item) => {
  //   console.log(item)
  //   fetch("http://localhost:3000/items", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type' : 'application/json',
  //       'Accept' : 'application/json'
  //     },
  //     body: JSON.stringify(item)
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setItems([...items, data])
  //   })
  // }

  const deleteItem = (item) => {
    console.log(`Item Deleted: ${item}`)
    fetch(`/items/${item.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
    })
    .then(() => {
      const newItems = items.filter(i => i.id != item.id)
      // setItems(newItems)
    })
  }
    if(loggedIn) {
      return (
        <div>
            <h1>All Items</h1>
            <ItemForm addItem={addItem} />
            <ul>
              { items.map((item, index) => 
              <li key={ index }>
                <ItemCard item={item} deleteItem={deleteItem}/> 
              </li>)}
            </ul>
        </div>
      )
    } else {
      <h1>Not Authorized - Please log in</h1>
    }
    
} 

export default Items