
const express = require('express')
const cors = require('cors')

const app = express()
const port = 8080 
let arrP = []

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const contenedor = require("./contenedor")

let c = new contenedor.Contenedor("productos.json")

const contCarrito = require("./carrito")
let car = new contCarrito.ContenedorCarritos("carritos.json")

const apisRoutes = require("./routers/productos")
app.use("/api/productos",apisRoutes)
const apiRoutes = require ('./routers/carrito',"./routers/productos")
app.use("/api/carrito", apiRoutes)
app.use("/api/productos",apiRoutes)





app.listen(port, ()=>{
    console.log('Server run port ',port)
})