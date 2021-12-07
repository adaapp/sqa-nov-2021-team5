const express = require('express');
const app = express(); 
const port = 5000; 
const cors = require('cors');
const RomanDecoder = require('./services/RomanDecoder');
const RomanEncoder = require('./services/RomanEncoder');

app.use(express.json());
app.use(cors())

app.get('/', async (req, res) => {
    res.send("Hello World!")
  })

app.post('/roman-decoder', async (req, res) => {
  const romanNumber = req.body.romanNumber
  res.send(RomanDecoder(romanNumber).toString())
})

app.post('/roman-encoder', async (req, res) => {
  const normalNumber = req.body.normalNumber
  res.send(RomanEncoder(normalNumber))
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`)); 
