const express = require('express')
const dotenv = require('dotenv')
// const fs = require('fs')

// const userName = 'bC7ElrdJaJnPbAP'
// fs.writeFile('user-data.txt', 'Name: ' + userName, err => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('wrote file')
// })
const app = express()
dotenv.config({ path: './.env' })

app.get('/', (req, res) => {
  res.send('<h1>My node app</h1>')
})
const port = 5000
app.listen(process.env.PORT, () => {
  console.log('App listening on port:', process.env.PORT)
})
