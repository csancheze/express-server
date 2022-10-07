const express = require("express")
const products = require("./routes/products");
const path = require('path');

const app = express();

app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use("/api/productos", products)