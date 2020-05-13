const express = require('express')
const bodyParser = require('body-parser')

// app
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/user', (req, res, next) => {
  res.send('<h1>User: ' + req.body.username + '</h1>')
})

app.get('/', (req, res, next) => {
  res.send(
    '<form action="user" method="post"><input type="text" name="username" /><button type="submit">CREATE USER</button></form>'
  )
})

app.use((req, res, next) => {
  //console.log(req)
  next()
})

// app.get('/', (req, res) => {
//   res.send('<h1>My node app</h1>')
// })

module.exports = app
