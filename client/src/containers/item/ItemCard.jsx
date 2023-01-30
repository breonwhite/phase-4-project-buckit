import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ item, deleteItem }) => {
  return (
    <div>
        <div>
        <Link to={`/items/${item.id}`}>
        { item.description }<br/>
        { item.category.title }
        </Link>
        - <button onClick={ () => {deleteItem(item)} }>Delete</button>
        </div>
    </div>
  )
}

export default ItemCard