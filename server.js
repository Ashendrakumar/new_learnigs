// node server  // npm install json-server --save-dev and node server to launch the server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Path to your JSON file or database
const middleware = jsonServer.defaults();
server.use(middleware);

server.use((req, res, next) => {
  console.log("req.headers");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.use(router);
