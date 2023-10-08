const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url !== "/favicon.ico") {
    let fileName;

    if (req.url === "/") {
      fileName = "index.html";
    } else if (req.url === "/about.html") {
      fileName = "about.html";
    } else if (req.url === "/contact-me.html") {
      fileName = "contact-me.html";
    } else {
      fileName = "404.html";
    }

    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
