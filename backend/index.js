const express = require('express')
const app = express()
const port = 3000
const mockData = require('./mockdata.json')
const axios = require('axios')
const cors = require("cors")

app.use(
  cors({
    origin: "http://localhost:5173"
  })
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/records', (req, res) => {
    res.json(mockData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} http://localhost:3000/`)
})