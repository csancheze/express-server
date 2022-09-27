import express from "express"
import fileManagement  from "./module.js"

const app = express()

app.get("/productos", async (request, response)=>{
    const productos = await fileManagement.buscarTodos()
    response.send(productos)
})

app.get("/productoRandom", async(request, response)=>{
    const numeroAleatorio = parseInt(Math.random() * 3 + 1)
    const productoRandom = await fileManagement.buscarPorId(numeroAleatorio)
    response.send(productoRandom)
})

app.listen(8080, () => {
    console.log("listening on port: 8080")
})