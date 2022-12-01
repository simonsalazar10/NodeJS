// const express = require('express');
import express from 'express';
import dataBase from './database/database.js';
import productoRouter from './routes/ProductoRoute.js';

const app = express();

app.use('/productos', productoRouter)

try {
    await dataBase.authenticate()
    console.log('conexion exitosa')
} catch (error) {
    console.log (error)
}

app.listen(3200, ()=>{
    console.log('Servidor corriendo en el puerto 3200');
    console.log('http://localhost:3200/')
})