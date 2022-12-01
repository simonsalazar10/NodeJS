import {Producto} from "../models/ProductoModel.js"

const crearProducto = async (req, res) => {
    try {
        Producto.create(req.body)
        res.json({
            message: "usuario creado correctamente"
        })
    } catch (error) {
        res.json({
            message: `no se pudo registrar ${error}`
        })
        
    }


}
const listarProducto = () => {

}
const listarProductos = () => {
    
}
const editarProducto = () => {
    
}
const eliminarProducto = () => {
    
}

export {
    crearProducto,
    listarProducto,
    listarProductos,
    editarProducto,
    eliminarProducto
}