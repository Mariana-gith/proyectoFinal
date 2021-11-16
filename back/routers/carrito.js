const express = require ('express')

const {Router} = express


const router = new Router()

const contenedor = require("../contenedor")


let c = new contenedor.Contenedor("productos.json")




router.get("/", async(req,res)=>{
    let allProd=  await c.getAll()
 
    let carro= tabla()
   
    res.send(carro)
   
})


router.get("/:id", async (req,res)=>{
    let {id} = req.params
    let byId = await c.otenerById(id)
    console.log('por id', byId)
    res.send( byId )
})



module.exports = router