import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/user' 
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'

//Icons for dropdown menu
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HikingIcon from '@mui/icons-material/Hiking';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FlightIcon from '@mui/icons-material/Flight';
import Diversity3Icon from '@mui/icons-material/Diversity3';


const ItemForm = () => {
  const [ item, setItem ] = useState({
    description: "",
    category_id: "",
  })
  const { addItem } = useContext(UserContext) // AddItem function found in context User.jsx

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
    setItem({
      description: "",
      category_id: "",
    })
  }

  return (
    <form onSubmit={ handleSubmit }>
      <Card sx={{ width: '95%', padding: '10px', backgroundColor: "#212121" }} elevation={24}>
        <FormControl sx={{ width: '97%', padding: '10px' }}>
          <InputLabel id="category_id">Category</InputLabel>
          <Select 
            labelId="demo-simple-select-label"
            name="category_id"
            type="number"
            label="Category"
            id="category_id"
            value={item.category_id}
            onChange={handleChange}
            sx={{ backgroundColor: '#f5f5f5' }}
            >
            <MenuItem value={1}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: '#212121' }}>
                  <Diversity3Icon />
                </Avatar>
                <Typography variant="button" gutterBottom>
                  People I Want to Meet
                </Typography>
              </Stack>
            </MenuItem>
            <MenuItem value={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: '#212121' }}>
                  <FlightIcon />
                </Avatar>
                <Typography variant="button" gutterBottom>
                  Places I Want to Travel To
                </Typography>
              </Stack>
            </MenuItem>
            <MenuItem value={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: '#212121' }}>
                  <RamenDiningIcon />
                </Avatar>
                <Typography variant="button" gutterBottom>
                  Foods I Want to Try
                </Typography>
              </Stack>
            </MenuItem>
            <MenuItem value={4}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: '#212121' }}>
                  <HikingIcon />
                </Avatar>
                <Typography variant="button" gutterBottom>
                  Adventures I Want to Take
                </Typography>
              </Stack>
            </MenuItem>
            <MenuItem value={5}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: '#212121' }}>
                  <MenuBookIcon />
                </Avatar>
                <Typography variant="button" gutterBottom>
                  Books I Want to Read
                </Typography>
              </Stack>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '97%', padding: '10px' }}>
          <TextField
            sx={{ width: '100%', backgroundColor: '#f5f5f5' }}
            type="text"
            name="description"
            label="Description"
            value={item.description}
            onChange={handleChange}
          />
        </FormControl>
      </Card>
      <br/>
      <Button 
        variant="contained"
        type="submit" size="large" 
        style={{
          borderRadius: 20,
          backgroundColor: "#212121",
          padding: "18px 36px",
          fontSize: "10px"
        }}>
          Add Item
      </Button>
    </form>
  )
}

export default ItemForm