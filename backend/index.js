// const express = require('express')
// const app = express()
// const port = 3000
// const mockData = require('./mockdata.json')
// const axios = require('axios')
// const cors = require("cors")
// const bodyParser = require('body-parser');

// app.use(
//   cors({
//     origin: "http://localhost:5173"
//   })
// )

// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/records', (req, res) => {
//     res.json(mockData);
// });

// app.put('/admin', (req, res) => {
//   const newData = req.body;

//   mockData.students.push(newData);

//   fs.writeFile('./mockdata.json', JSON.stringify(mockData, null, 2), err => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error updating data');
//     }
//     res.json(mockData);
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port} http://localhost:3000/`)
// })

const express = require('express');
const app = express();
const port = 3000;
const mockData = require('./mockdata.json');
const fs = require('fs'); // Import the fs module
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(
  cors({
    origin: "http://localhost:5173"
  })
)

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/records', (req, res) => {
    res.json(mockData);
});

app.put('/admin', (req, res) => {
  const newData = req.body;

  mockData.students.push(newData);

  fs.writeFile('./mockdata.json', JSON.stringify(mockData, null, 2), err => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error updating data');
    }
    res.json(mockData);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} http://localhost:3000/`)
})
