//load express library
const express = require("express");
//create an apiRouter
const apiRouter = express.Router();
require("dotenv").config();

//create an empty array where the data returned from the api will be stored
let apiData = [];

// api key 489eb63f-81b7-46ba-a7aa-f86b350e072c
// 8638b98a-e6bd-41de-b1c4-4f6118d24287

//the get request fetches the data from the api
apiRouter.get("/api", function (req, res) {
  fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
    headers: {
      "X-CMC_PRO_API_KEY": "8638b98a-e6bd-41de-b1c4-4f6118d24287",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      apiData = response.data;
      res.json(apiData);
    });
});

module.exports = apiRouter;
