import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ item }) => {
  return (
    <div>
        <div>
        <Link to={`/items/${item.id}`}>
        { item.description }<br/>
        { item.category.title }
        </Link>
    </div>
    </div>
  )
}

export default ItemCard