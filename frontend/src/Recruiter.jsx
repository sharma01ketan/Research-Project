import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
// import Popover from '@material-ui/core';



const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/records');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};

function FetchButton({ setData }) {
  const handleFetch = () => {
    fetchData()
      .then(data => setData(data.students))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleFetch}
    >
      FETCH DATA
    </Button>
  );
}

function FilterButton({ setData }) {
  const handleFetch = () => {
    fetchData()
      .then(data => setData(data.students))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleFetch}
    >
      FILTER DATA
    </Button>
  );
}

 function ButtonAppBar({fetchedData, setFetchedData}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RECRUITER PANEL
          </Typography>
          <FilterButton></FilterButton>
          <FetchButton setData={setFetchedData} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
  },
}));

function Data({ data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Enroll</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.enroll}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.enroll}</TableCell>
              <TableCell align="right">{item.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function MainComponent() {
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <>
    <ButtonAppBar fetchedData={fetchedData} setFetchedData={setFetchedData}></ButtonAppBar>
      <Data data={fetchedData} />
    </>
  );
}
