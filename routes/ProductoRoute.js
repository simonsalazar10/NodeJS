import Express  from "express"
import { crearProducto } from "../controllers/ProductoController"
const productoRouter = Express.Router()

 productoRouter.post('/', crearProducto)

 export default productoRouter