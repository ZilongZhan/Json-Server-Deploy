const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

const logMiddleware = (req, _res, next) => {
  console.log({ method: req.method });
  console.log({ body: req.body });
  console.log({ params: req.params });
  console.log({ query: req.query });
  next();
};

server.use(jsonServer.bodyParser);
// Set custom middleware to log requests
server.use(logMiddleware);

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3001; //  chose port from here like 8080, 3001
server.listen(port, () => console.log(`Server running at port ${port}`));
