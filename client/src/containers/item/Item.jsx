import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemEdit from './ItemEdit'
import { useNavigate } from 'react-router-dom'

const Item = () => {
    const [ item, setItem ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const {id} = useParams()
    //When a user clicks the edit button, it displays the edit form
    const [ form, setForm ] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/items/${id}`)
        .then(response => response.json())
        .then(data => {
            setItem(data)
            setLoading(false)
        })
    }, [])

    const editItem = (thisItem) => {
        console.log(thisItem)
        //only permits the description and the category of the item to be updated
        const updatedItem = {
            description: thisItem.description,
            category_id: thisItem.category_id,
        }
        fetch(`/items/${thisItem.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(response => response.json())
        .then(data => {
            setItem(data)
            setForm(false)
        })
    }

    if(loading) {
        return <h1>Loading Item Details</h1>
    } else {
    return (
    <div>
        <h1>Item Details</h1><br />
        [BACK BUTTON] - [DELETE BUTTON HERE]
        <br/><br/>
        { item.description }<br/>
        { item.category.title } <br/>
        {/* Displays a form when button is clicked */}
        { form ? 
            <ItemEdit thisItem={item} editItem={editItem} /> : 
            <button onClick={ () => {setForm(true)} }>Edit Item</button>
        }
    </div>
  )
}}

export default Item