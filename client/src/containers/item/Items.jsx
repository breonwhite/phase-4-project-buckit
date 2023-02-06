import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import EditLink from '../../components/EditLink';
import { UserContext } from '../../context/user';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';



const Items = () => {
  const { user, items, loggedIn, addItem, fetchItems } = useContext(UserContext);
  // const [ items, setItems ] = useState([])
  const params = useParams();

  // useEffect(() => {
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
        <Grid 
          container
          direction="column"
          justify="center"
          spacing={2}
          style={{ minHeight: '100vh', width: '90%', margin: 'auto', padding: '10px' }}
          >
          <Grid item xs={3}>
            <Typography variant="overline" gutterBottom>
              Add Items
            </Typography>
            <ItemForm addItem={addItem} />
            <br />
          <Divider> { user.first_name }'s Items </Divider>
          </Grid>
              { items.map((item, index) => 
                <ItemCard key={ index } item={item} deleteItem={deleteItem}/> 
              )}
        </Grid>
      )
    } else {
      <h1>Not Authorized - Please log in</h1>
    }
    
} 

export default Items