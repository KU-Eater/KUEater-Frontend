const http = require('http');

const server = http.createServer((req, res) => {
  // ตรงนี้ดึง fragment จาก URL (หลัง #)
  const urlParts = req.url.split('#');
  if (urlParts.length < 2) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('❌ No access token received.');
    return;
  }

  const fragment = urlParts[1];
  const params = new URLSearchParams(fragment);
  const accessToken = params.get('access_token');

  console.log('✅ Access Token:', accessToken);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>✅ Login Successful</h1>
    <p>Copy this token and paste it into your app:</p>
    <code>${accessToken}</code>
  `);
});

server.listen(8888, () => {
  console.log('🔄 Waiting for Google redirect at http://localhost:8888');
});
