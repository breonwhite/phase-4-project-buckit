import React from 'react'
import { Link } from 'react-router-dom'

const EditLink = ({ item }) => {
  return (
    <div>
        <Link to={`/items/${item.id}/edit`}>
            <button type="button">
                Edit
            </button>
          </Link>
    </div>
  )
}

export default EditLink