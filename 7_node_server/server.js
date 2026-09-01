const http = require("http");
const fs = require("fs");
const path = require("path");

// Middleware
function logger(req, res, next) {
    console.log(req.method + " " + req.url);
    next();
}

function handleRequest(req, res) {

    logger(req, res, () => {

        let filePath;

        if (req.url == "/" || req.url == "/index.html") {
            filePath = path.join(__dirname, "public", "index.html");
        }
        else if (req.url == "/about.html") {
            filePath = path.join(__dirname, "public", "about.html");
        }
        else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 - Page Not Found</h1>");
            return;
        }

        fs.readFile(filePath, (err, data) => {

            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 - File Not Found</h1>");
                return;
            }

            let ext = path.extname(filePath);
            let contentType = "text/html";

            if (ext == ".css") {
                contentType = "text/css";
            }
            else if (ext == ".js") {
                contentType = "text/javascript";
            }
            else if (ext == ".png") {
                contentType = "image/png";
            }
            else if (ext == ".jpg") {
                contentType = "image/jpeg";
            }

            res.writeHead(200, {
                "Content-Type": contentType
            });

            res.end(data);
        });
    });
}

const server = http.createServer(handleRequest);

server.on("error", (err) => {
    console.log("Server Error:", err.message);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
