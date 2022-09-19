const express = require("express");
const handlebars = require("express-handlebars")
const app = express();
const PORT = 8080;

 let Producto = require("./Productos.js");
 let productos = new Producto();


// Configuramos Handlebars
app.engine(
    "hbs",
    handlebars({
        extname:".hbs",
        defaultLayout:"index.hbs",
        layoutsDir: "./views/layouts",
		partialsDir: "./views/partials",
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("public"));

// Importamos lo necesario para enviar JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/productos",(req,res) => {
    let prod_list = (productos.getAll())
    res.render("vista", {
        productos: prod_list,
        checkProducto: prod_list.length
    })
});

app.post("/", (req,res)=>{
    let newProduct = req.body;
    res.json(productos.postProducto(newProduct));
})

const server = app.listen(PORT, () => {
    console.log("Servidor Levantado");
}).on('error', (e) => {
    console.log('Error ocurrido: ', e.message)
 });
