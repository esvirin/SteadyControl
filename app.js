const express = require('express')
const app = express()
const getFile = require('./extensions/getDataFromFile')

app.use(express.static('public'))
app.listen(5000, function () {
  console.log('express listen 3000')
})

app.get('/', function (request, response) {
  res.render('./client/public/index.html')
})

app.get('/api/cities', function (request, response) {
  getFile('cities.json', 'application/json', response)
})

app.get('/api/citizens', function (request, response) {
  getFile('citizens.json', 'application/json', response)
})
