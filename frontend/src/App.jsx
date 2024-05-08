import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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

function Data({ data }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {data.map(item => (
        <div key={item.enroll}>
          <div>{item.name}</div>
          <div>{item.enroll}</div>
          <div>{item.score}</div>
        </div>
      ))}
    </div>
  );
}

export default function MainComponent() {
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <>
      <FetchButton setData={setFetchedData} />
      <Data data={fetchedData} />
    </>
  );
}
