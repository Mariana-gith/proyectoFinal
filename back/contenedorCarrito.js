const fs = require("fs")


const contenedor = require("../contenedor")
const arr = require('../productos.json')

let c = new contenedor.Contenedor("productos.json")




const obtenerCarro = async (carro) =>{
    try{
        return JSON.parse(await fs.promises.readFile(carro,"utf-8"));
    }catch{
        return [];
    }
};

let producto = c.contenedor.getAll(producto)


class Carrito{
    constructor(id,timestamp,producto){
        this.id =id,
        this.timestamp= timestamp,
        this.producto= producto
    }

    async saveCarro(carrito){
        let carros = await obtenerCarro(this.nombre)
        if (carro.lendth > 0){
            this.carro = carros;
            carros.push(carrito)
            await fs.promises.writeFile(this.nombre, JSON.stringify(this.carro,null,2),"utf-8")
        }else{
            this.carro.push(carrito);
            await fs.promises.writeFile(this.nombre,JSON.stringify(this.pr,null,2),"utf-8");
        }

    }


}



const ejecutor = () => {
    let carrito = new Carrito ("carrito.json");
  
}


ejecutor()