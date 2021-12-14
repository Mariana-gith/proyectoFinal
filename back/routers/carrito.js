const express = require ('express')

const {Router} = express


const router = new Router()

const contenedor = require("../contenedor")
const contCarrito = require("../carrito")


let c = new contenedor.Contenedor("productos.json")
let carros = new contCarrito.ContenedorCarritos("carritos.json")


router.post("/", async(req,res)=>{
    let nuevoId = await carros.agregarCarrito()
    res.send(nuevoId)
})

router.delete("/:id", async (req,res)=>{
    await carros.eliminarCarrito(req.params.id)
    res.sendStatus(200)
})


router.delete("/:id/productos/:id_prod",async (req,res)=>{
    let resultado= await carros.eliminarProducto(req.params.id_prod, req.params.id)
    if(resultado == null){
    res.sendStatus(404)
    }else {res.sendStatus(200)}
})

router.get("/", async(req,res)=>{
    let allProd =  await carros.obtenerTodos()
    res.send(allProd)

})


router.post("/:id/productos", async (req,res)=>{
    let {id} = req.params
    let body = req.body
    let resultado = await carros.agregarProductos(body,id)
    if(resultado === null){
        res.sendStatus(404)
    }
    res.send( resultado)

})
module.exports = router