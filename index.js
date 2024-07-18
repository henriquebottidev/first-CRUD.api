const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.model.js");
const app = express();
const productRoute = require("./routes/product.route.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send(`<h1>Deus está com você. Ele te ama`); 
});

mongoose
  .connect(
    "mongodb+srv://henriquembotti:tA2VXlZ6eHnNjzvm@backenddb.iwjabe3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connection to mongoDB: True!");

    app.listen(8000, () => {
      console.log("The server is listening on port : 8000 ...");
    });
  })
  .catch(() => console.log("Connection to mongoDB: False!"));
