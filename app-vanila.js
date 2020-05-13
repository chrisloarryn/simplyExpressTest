const http = require('http')

// constants
const PORT = 5000

const server = http.createServer((req, res) => {
  console.log('server created')
  console.log(req.method, req.url)

  if (req.method === 'POST') {
    let body = ''
    req.on('end', () => {
        const userName = body.split('=')
        console.log(userName)
        res.end('<h1>Got the POST request.</h1>')
    })
    req.on('data', chunk => {
      body += chunk
    })
  } else {
    res.setHeader('Content-Type', 'text/html')
    res.end(
      '<form method="POST"><input type="text" name="username" /><button type="submit">Create user</button></form>'
    )
  }
})

server.listen(PORT)
