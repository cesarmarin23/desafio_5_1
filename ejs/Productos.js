class Producto {
    constructor(productos){
        this.productos =[];
    }

    getAll(){
        return this.productos.length
        ? this.productos
        :{ error: "No hay productos cargados"};
    }

    postProducto(new_obj){
    let productoIngresado = new_obj;
    if(this.productos.length == 0){
        const id_creado = 1;
        productoIngresado.id = id_creado;
	    this.productos.push(productoIngresado);
        return 
    } else{
        let id_creado = parseInt(this.productos[this.productos.length-1].id)+ 1
        productoIngresado.id = id_creado;
	    this.productos.push(productoIngresado)
    }   
}}

module.exports = Producto;