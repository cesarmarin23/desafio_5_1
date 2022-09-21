const express = require("express");
const app = express();
const PORT = 8080;

 let Producto = require("./Productos.js");
 let productos = new Producto();


app.set("view engine", "ejs");

app.use(express.static("public"));

// Importamos lo necesario para enviar JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/productos",(req,res) => {
    let prod_list = (productos.getAll())
    res.render("pages/index.ejs", {
        productos: productos})
});

app.post("/", (req,res)=>{
    let newProduct = req.body;
    res.redirect("/");
    res.json(productos.postProducto(newProduct));
})

const server = app.listen(PORT, () => {
    console.log("Servidor Levantado");
}).on('error', (e) => {
    console.log('Error ocurrido: ', e.message)
 });
