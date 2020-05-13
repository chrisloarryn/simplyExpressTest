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
const app = require('./app')
dotenv.config({ path: './.env' })

const port = 5000
app.listen(process.env.PORT, () => {
  console.log('App listening on port:', process.env.PORT)
})
