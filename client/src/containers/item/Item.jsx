import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditLink from '../../components/EditLink'

const Item = () => {
    const [ item, setItem ] = useState()
    const [ loading, setLoading ] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetch(`/items/${id}`)
        .then(response => response.json())
        .then(data => {
            setItem(data)
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <h1>Loading Item Details</h1>
    } else {
    return (
    <div>
        <h1>Item Details</h1><br />
        [BACK BUTTON] - <EditLink item={item} /> - [DELETE BUTTON HERE]
        <br/><br/>
        { item.description }<br/>
        { item.category.title }
    </div>
  )
}}

export default Item