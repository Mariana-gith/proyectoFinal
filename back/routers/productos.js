const express = require ('express')

const {Router} = express


const router = new Router()

const contenedor = require("../contenedor")
const arr = require('../productos.json')

let c = new contenedor.Contenedor("productos.json")

let admin = true

router.get ("/", async (req,res)=>{
    let allProd=  await c.getAll()
    res.send(allProd)
})

router.get("/:id", async (req,res)=>{
    let {id} = req.params
    let byId = await c.otenerById(id)
    //console.log('por id', byId)
    res.send( byId )
})

router.post("/", async(req,res)=>{
   
    console.log( req.query.admin)
    if(req.query.admin){
        let nuevoProd = await c.save(req.body)
        let allProd=  await c.getAll()
        res.send(allProd)
    }else{
        res.send({ error :404, ruta: 'localhost:8080/api/productos', método: "'POST' no autorizada "})
    }
})



router.put("/:id", async (req,res)=>{
    let params = req.body
    params.id = req.params.id
    console.log(params)
    await c.upDateById(params)
    res.send('Producto actulizado correctamente!')
})
 
router.delete("/:id", async (req,res)=>{
    await c.deleteById(req.params.id)
    res.send('se borro el producto')
})



module.exports = router