import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';


import MenuBookIcon from '@mui/icons-material/MenuBook';
import HikingIcon from '@mui/icons-material/Hiking';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FlightIcon from '@mui/icons-material/Flight';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CategoryIcon from '@mui/icons-material/Category';
import { useState } from 'react';



const ItemCard = ({ item, deleteItem }) => {
  // const [ icon, setIcon ] = useState(<CategoryIcon />)

    
  //   if (item.category_id == 1) {
  //     setIcon(<Diversity3Icon />)
  //   } else if (item.category.id = 2) {
  //     return (<FlightIcon />)
  //   } else if (item.category.id = 3) {
  //     return (<RamenDiningIcon />)
  //   } else if (item.category.id = 4) {
  //     return (<HikingIcon />)
  //   } else if (item.category.id = 5) {
  //     return (<MenuBookIcon />)
  //   } else {
  //     return (<CategoryIcon />)
  //   }


  return (
    <div>
    <Card sx={{ width: '97%', padding: '10px' }} elevation={12}>
    <CardHeader
        action={
          <IconButton onClick={ () => deleteItem( item ) }aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        title={<Link to={`/items/${item.id}`}>
        { item.description }
        </Link>
        }
        subheader={ item.category.title }
      />
    </Card>
    <br/>
    </div>
  )
}

export default ItemCard