const http = require('http')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, 'dist')
const PASSWORD = process.env.PLAYGROUND_PASSWORD || 'emi-al'
const COOKIE_NAME = 'playground_auth'
const PORT = Number(process.env.PORT || 4173)

const contentType = (filePath) => {
  if (filePath.endsWith('.html')) return 'text/html; charset=utf-8'
  if (filePath.endsWith('.js')) return 'application/javascript; charset=utf-8'
  if (filePath.endsWith('.css')) return 'text/css; charset=utf-8'
  if (filePath.endsWith('.json')) return 'application/json; charset=utf-8'
  if (filePath.endsWith('.svg')) return 'image/svg+xml'
  if (filePath.endsWith('.png')) return 'image/png'
  if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) return 'image/jpeg'
  return 'text/plain; charset=utf-8'
}

const loginPage = (error = '') => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>OpenPrep | Login</title>
    <style>
      body { font-family: Inter, system-ui, sans-serif; background:#020617; color:#e5e7eb; display:grid; place-items:center; min-height:100vh; margin:0; }
      .card { width:min(92vw, 420px); background:#111827; border:1px solid rgba(148,163,184,.18); border-radius:20px; padding:28px; }
      h1 { margin:0 0 10px; font-size:28px; }
      p { color:#94a3b8; }
      input { width:100%; margin-top:12px; border-radius:12px; border:1px solid rgba(148,163,184,.18); background:#020617; color:#fff; padding:14px; box-sizing:border-box; }
      button { margin-top:14px; width:100%; border:0; border-radius:12px; padding:14px; font-weight:700; background:linear-gradient(135deg,#38bdf8,#6366f1); color:white; cursor:pointer; }
      .error { color:#fca5a5; min-height:20px; }
    </style>
  </head>
  <body>
    <form class="card" method="POST" action="/login">
      <h1>OpenPrep</h1>
      <p>Enter the password to open OpenPrep.</p>
      <div class="error">${error}</div>
      <input type="password" name="password" placeholder="Password" autofocus />
      <button type="submit">Enter</button>
    </form>
  </body>
</html>`

const parseBody = (req) =>
  new Promise((resolve) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
      if (data.length > 1e6) req.socket.destroy()
    })
    req.on('end', () => resolve(new URLSearchParams(data)))
  })

const isAuthed = (req) => {
  const cookie = req.headers.cookie || ''
  return cookie.includes(`${COOKIE_NAME}=1`)
}

const sendFile = (res, filePath) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    res.writeHead(200, { 'Content-Type': contentType(filePath) })
    res.end(data)
  })
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/login' && req.method === 'POST') {
    const body = await parseBody(req)
    if ((body.get('password') || '') === PASSWORD) {
      res.writeHead(302, {
        'Set-Cookie': `${COOKIE_NAME}=1; HttpOnly; SameSite=Lax; Path=/; Max-Age=604800`,
        Location: '/',
      })
      res.end()
      return
    }

    res.writeHead(401, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(loginPage('Wrong password, try again.'))
    return
  }

  if (!isAuthed(req)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(loginPage())
    return
  }

  const requestedPath = req.url === '/' ? '/index.html' : req.url
  const safePath = path.normalize(requestedPath).replace(/^\.\.(\/|\\|$)+/, '')
  let filePath = path.join(ROOT, safePath)

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(ROOT, 'index.html')
  }

  sendFile(res, filePath)
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`OpenPrep server listening on ${PORT}`)
})
