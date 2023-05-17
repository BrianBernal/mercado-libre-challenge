const express = require("express");
// *** ADD ***
const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

function allowCrossDomain(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
}

// Middlewares
app.use(allowCrossDomain);
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Servidor en ${req.baseUrl} disponible!</h1>`);
});

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
