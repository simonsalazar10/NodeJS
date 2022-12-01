import dataBase from "../database/database.js";
import { DataTypes } from "sequelize";

const Producto = dataBase.define('producto', { 
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }

})

export default Producto