// import modules
const express = require("express");
const { json, urlencoded } = express;
const bodyParser = require("body-parser");
const cors = require("cors");

// app
const app = express();
const PORT = 8080;
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// routes
const productRoutes = require("./routes/products");
app.use("/", productRoutes);

// port
const port = process.env.PORT || PORT

// port listener
const server = app.listen(port, () => { console.log("Server started!") })