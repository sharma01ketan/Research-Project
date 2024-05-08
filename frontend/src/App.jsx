import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const studentsData = {
  "students": [
      {
          "name": "John Doe",
          "enroll": "IT001",
          "score": 490
      },
      {
          "name": "Jane Smith",
          "enroll": "IT002",
          "score": 509
      },
      {
          "name": "Alice Johnson",
          "enroll": "IT003",
          "score": 522
      },
      {
          "name": "Bob Brown",
          "enroll": "IT004",
          "score": 494
      },
      {
          "name": "Eva Wilson",
          "enroll": "IT005",
          "score": 499
      },
      {
          "name": "Michael Lee",
          "enroll": "IT006",
          "score": 512
      },
      {
          "name": "Sophia Garcia",
          "enroll": "IT007",
          "score": 499
      },
      {
          "name": "Oliver Martinez",
          "enroll": "IT008",
          "score": 506
      },
      {
          "name": "Isabella Taylor",
          "enroll": "IT009",
          "score": 502
      },
      {
          "name": "Liam Anderson",
          "enroll": "IT010",
          "score": 512
      }
  ]
};


const fetchData = () => {
  fetch('http://localhost:3000/records')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data received:', data);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
};

function FetchButton(){
  return <Button
        variant="contained"
        color="primary"
        onClick={fetchData}
      >
        FETCH DATA
      </Button>
}

function Data({data}){
  return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
    {
      data.map(item =>{
        return <div key={item.enroll}>
          <div>{item.name}</div>
          <div>{item.enroll}</div>
          <div>{item.score}</div>
        </div>
      })
    }
    </div>

}

export default function MainComponent() {
  return (
    <>
    <FetchButton>
    </FetchButton>
    <Data data={studentsData.students}></Data>
    </>
  );
}


// export default function MainComponent() {
//   return (
//     <>
//     {/* <FetchButton>
//     </FetchButton> */}
//     <Data data={studentsData}></Data>
//     </>
//   );
// }


