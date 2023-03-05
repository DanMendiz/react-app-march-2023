import React from 'react';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import { ClassRounded } from '@mui/icons-material';

function CarsList() {
  const cars = [
    {
      _id: 1,
      name: 'Ferrari',
      bhp: 1234,
      avatar_url:
        'https://images.squarespace-cdn.com/content/v1/5d3a5c45ae39520001834147/1605196766876-NZERJ3O393E9L3ND8J7J/2020+Ferrari+488+Pista+Green-1.jpg',
    },
    {
      _id: 2,
      name: 'Bugatti',
      bhp: 666,
      avatar_url:
        'https://cdn.motor1.com/images/mgl/WpAp1/s1/bugatti-chiron-pur-sport-in-lime-green.jpg',
    },
  ];
  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>

      <List>
        {cars.map(({ name, bhp, avatar_url, _id }) => (
          <ListItem key={_id}>
            <ListItemAvatar>
              <Avatar alt="" src={avatar_url} />
            </ListItemAvatar>
            <ListItemText>
              {name} (BHP: {bhp})
            </ListItemText>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => console.log(`Delete ${_id}`)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CarsList;
