const express = require('express')
const PATH = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(PATH.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})