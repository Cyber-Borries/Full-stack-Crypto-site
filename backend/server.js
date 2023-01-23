//importing all the needed modules
const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const PORT = 8080;
const cors = require("cors");
// Create the app object from the top-level express function call
// to initialize the express app
const app = express();

app.use(helmet());

//added cors to allow the backend to communicate witht the front end
app.use(cors());

// Load the routes file to be able to use it
const apiRoutes = require("./routes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use("/", apiRoutes);

// For general error handling inline with the gist below
// We use the "*" wildcard to capture any errors
// https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd#generalized-error-handling
// Then we respond with the message if the use enters
// a different route not specified here
app.get("*", function (req, res, next) {
  let err = new Error();

  // we set the status code to 404
  err.statusCode = 404;

  // In order to enable our middleware to redirect
  // we set the shouldRedirect property on the err
  // object to true
  err.shouldRedirect = true;
  next(err);
});

// Error handling
app.use(function (err, req, res, next) {
  res.send("Oops something is wrong! Recheck your address");
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost/${PORT}`);
});
