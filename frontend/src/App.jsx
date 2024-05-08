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
          <FetchButton setData={setFetchedData} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// function Data({ data }) {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", flexDirection:"column"}}>
//       {data.map(item => (
//         <div key={item.enroll}>
//           <div>{item.name}</div>
//           <div>{item.enroll}</div>
//           <div>{item.score}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

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
    <div className={classes.root}>
    <Grid container spacing={2} justifyContent="center" direction="column" >
      {data.map((item) => (
        <Grid item xs={12}  key={item.enroll} justifyContent="center">
          <Paper className={classes.paper}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" style={{ marginRight: '10px' }}>{item.name}</Typography>
              <Typography style={{ marginRight: '10px' }}>{item.enroll}</Typography>
              <Typography variant="subtitle1">{item.score}</Typography>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </div>
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
