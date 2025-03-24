const http = require('http');
const fs = require('fs');

const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Login Successful</title>
      <style>
        body {
          background: black;
          color: white;
          font-family: monospace;
          padding: 40px;
        }
      </style>
    </head>
    <body>
      <h1>Login Successful</h1>
      <p>Parsing access token...</p>
      <code id="token">Loading...</code>
      <script>
        const hash = window.location.hash.substring(1); // ตัด '#' ออก
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");
        document.getElementById("token").textContent = accessToken || "No access token received.";
        console.log("Access Token from redirect:", accessToken);
      </script>
    </body>
  </html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlContent);
});

server.listen(8888, () => {
  console.log("🔄 Waiting for Google redirect at http://localhost:8888");
});
