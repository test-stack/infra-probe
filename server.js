import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3014;

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let router = express.Router();

app.use("/api", router);

router.route("/ping").get((req, res) => {
  res.json({
    message: "pong"
  });
});

app.listen(port);

console.log(`listening on port ${port}`);

module.exports = app;
