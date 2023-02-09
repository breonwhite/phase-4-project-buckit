import React, { useEffect, useContext } from 'react'
import { UserContext } from '../../context/user';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import paper from '../../images/paper.jpg';
import Box from '@mui/material/Box';
import UnathorizedPage from '../../components/UnathorizedPage';

const Items = () => {
  const { user, items, loggedIn, addItem, fetchItems, deleteItem } = useContext(UserContext); // Data captured from context in User.jsx

  useEffect(() => {
    fetchItems()
  }, [])
  
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
            <Typography variant="overline" gutterBottom sx={{color: '#212121' }}>
              Add Items
            </Typography>
            <ItemForm addItem={addItem} />
            <br />
            <Divider sx={{color: '#212121' }}> { user.first_name }'s Items </Divider>
          </Grid>
          <Grid item xs={3}>
            { items.map((item, index) => 
              <ItemCard key={ index } item={item} deleteItem={deleteItem}/> 
            )}
          </Grid>
        </Grid>
      </Box>
    )
    } else return (
      <UnathorizedPage />
    )   
} 

export default Items