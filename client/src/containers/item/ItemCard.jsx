import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const ItemCard = ({ item, deleteItem }) => {

  return (
    <div>
    <Card sx={{ width: '97%', padding: '10px' }} elevation={12}>
    <CardHeader
        action={
          <IconButton onClick={ () => deleteItem( item ) }aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        title={ item.description }
        subheader={ item.category.title }
      />
      <CardContent>
      <Typography variant="caption">
      <Button color="inherit" component={ NavLink } exact="true" to={`/items/${item.id}`}>Edit</Button>
        <Link to={`/items/${item.id}`} state={{item: item}}>EDIT</Link>
      </Typography>
      </CardContent>
    </Card>
    <br/>
    </div>
  )
}

export default ItemCard