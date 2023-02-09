import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/user' 
import { useParams, useLocation } from 'react-router-dom'
import ItemEdit from './ItemEdit'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import paper from '../../images/paper.jpg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import UnathorizedPage from '../../components/UnathorizedPage';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';

const Item = () => {
    const { loggedIn } = useContext(UserContext); // Data captured from context in User.jsx
    
    const location = useLocation(); // Captures the state of the item from ItemCard.jsx, pushes it through the link
    
    const [ item, setItem ] = useState(location.state?.item)
    const [ form, setForm ] = useState(false) // When a user clicks the edit button, it displays the edit form

    const {id} = useParams() // Captures id from item in the params
    
    useEffect(() => {
        fetch(`/items/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(`Page Reloaded: ${data}`)
            setItem(data)
        })
    }, [])
    
    const editItem = (item) => {
        //only permits the description and the category of the item to be updated
        const updatedItem = {
            description: item.description,
            category_id: item.category_id,
        }
        fetch(`/items/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setItem(data)
            setForm(false)
        })
    }
    
    if(loggedIn) {
    return (
    <Box
        style={{
        backgroundImage: `url(${paper})`,
        backgroundSize: "cover",
        height: "100%",
        color: "#f5f5f5"
        }}>  
        <Grid 
          container
          direction="column"
          justify="center"
          spacing={2}
          style={{ minHeight: '100vh', width: '90%', margin: 'auto', padding: '10px' }}
          >
            <Grid item xs={3}>
                <Button variant="contained" href="/items/" startIcon={<ArrowLeftIcon />}>
                    BACK TO ITEMS
                </Button><br />
                <Typography variant="overline" gutterBottom sx={{color: '#212121' }}>
                    Item Details
                </Typography>
                <Card sx={{ width: '95%', padding: '10px', backgroundColor: "transparent" }} elevation={24}>
                    <CardContent>
                        <Typography variant="overline" gutterBottom sx={{color: '#212121' }}>
                            Category: { item.category.title }
                        </Typography><br />
                        <Typography variant="h3" gutterBottom sx={{color: '#212121' }}>
                            { item.description }
                        </Typography>
                    </CardContent>
                    { form ? 
                        <ItemEdit thisItem={item} editItem={editItem} /> : 
                        <Button fullWidth variant="contained" size="medium" onClick={ () => {setForm(true)} }>Edit Item</Button>
                    }
                </Card>
            </Grid>
        </Grid>
    </Box>
    )
    } else return (
    <UnathorizedPage />
  )
}

export default Item