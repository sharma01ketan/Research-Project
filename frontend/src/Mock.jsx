// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";
// import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';



// function AlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"UPLOAD DATA"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Select the type of data you want to upload.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>.xlsx</Button>
//           <Button onClick={handleClose} autoFocus>
//             .csv
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }


// const fetchData = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/records');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log('Data received:', data);
//     return data;
//   } catch (error) {
//     console.error('There was a problem with your fetch operation:', error);
//   }
// };

// function FetchButton({ setData }) {
//   const handleFetch = () => {
//     fetchData()
//       .then(data => setData(data.students))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   return (
//     <Button
//       variant="contained"
//       color="primary"
//       onClick={handleFetch}
//     >
//       FETCH DATA
//     </Button>
//   );
// }

// function UploadButton({ setData }) {
//   const [openDialog, setOpenDialog] = useState(false);

//   const handleFetch = () => {
//     fetchData()
//       .then(data => setData(data.students))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   const handleClick = () => {
//     setOpenDialog(true); // Open the dialog when the button is clicked
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false); // Close the dialog
//   };

//   return (
//     <React.Fragment>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//       >
//         UPLOAD DATA
//       </Button>
//       <AlertDialog // Render the AlertDialog component
//         open={openDialog}
//         handleClose={handleCloseDialog}
//       />
//     </React.Fragment>
//   );
// }

// function FilterButton({ setData }) {
//   const handleFetch = () => {
//     fetchData()
//       .then(data => setData(data.students))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   return (
//     <Button
//       variant="contained"
//       color="primary"
//       onClick={handleFetch}
//     >
//       ADD DATA
//     </Button>
//   );
// }

//  function ButtonAppBar({fetchedData, setFetchedData, setData}) {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ADMIN PANEL
//           </Typography>
//           <UploadButton></UploadButton>
//           <FilterButton></FilterButton>
//           <FetchButton setData={setFetchedData} />
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     margin: theme.spacing(1),
//   },
// }));

// function Data({ data }) {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell><TextField id="filled-basic" label="Name " variant="filled" /> </TableCell>
//             <TableCell align="right"><TextField id="filled-basic" label="Enroll" variant="filled" /></TableCell>
//             <TableCell align="right"><TextField id="filled-basic" label="Score" variant="filled" /></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((item) => (
//             <TableRow key={item.enroll}>
//               <TableCell component="th" scope="row">
//                 {item.name}
//               </TableCell>
//               <TableCell align="right">{item.enroll}</TableCell>
//               <TableCell align="right">{item.score}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default function Mock() {
//   const [fetchedData, setFetchedData] = useState([]);

//   return (
//     <>
//     <ButtonAppBar fetchedData={fetchedData} setFetchedData={setFetchedData}></ButtonAppBar>
//       <Data data={fetchedData} />
//     </>
//   );
// }


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
import TextField from '@material-ui/core/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ketanSharma = {
    name: "Ketan Sharma",
    semester: "8th",
    branch: "IT",
    subjects: {
        COA: "A",
        CN: "B+",
        OS: "A-",
        DBMS: "B"
    }
};

function fetchData() {
  // Assuming you fetch this data from an API, for now, I'll return a Promise with the data
  return Promise.resolve([ketanSharma]); // Returning Ketan Sharma's data as an array of objects
}

function ButtonAppBar({ fetchedData, setFetchedData }) {
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
            ADMIN PANEL
          </Typography>
          {/* Removed unnecessary buttons */}
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
            <TableCell><TextField id="filled-basic" label="Name" variant="filled" defaultValue={data[0].name} /></TableCell>
            <TableCell align="right"><TextField id="filled-basic" label="Enroll" variant="filled" defaultValue={data[0].semester} /></TableCell>
            <TableCell align="right"><TextField id="filled-basic" label="Branch" variant="filled" defaultValue={data[0].branch} /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data[0].subjects).map(([subject, grade]) => (
            <TableRow key={subject}>
              <TableCell component="th" scope="row">
                {subject}
              </TableCell>
              <TableCell align="right">{grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Mock() {
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <>
      <ButtonAppBar fetchedData={fetchedData} setFetchedData={setFetchedData} />
      <Data data={fetchedData} />
    </>
  );
}
