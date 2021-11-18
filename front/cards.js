let cargarTabla =  (data) =>{
  
  let tabla = data.map((p)=>(` 
  <tr  >
      <th scope="row" id="${p.id}" >${p.id }</th>
      <td >${p.nombreprod}</td>
      <td>${p.precio}</td>
      <td ><button onClick=" porId (${p.id})">agregar</button></td>
      <td ><button onClick=" cambiar (${p.id})">CAMBIAR</button></td>
      <td ><button  onClick="borrar(${p.id})">x</button></td>
      
  </tr>`)).join('')

  document.getElementById('tbody').innerHTML=  tabla  
  if(data.length=== 0){
    document.getElementById('tbody').innerHTML= `<p>No hay productos disponibles</p>`  
  }
}

let mostrarTabla = () =>{
  fetch("http://localhost:8080/api/productos",{})
             .then((res)=> res.json())   
             .then(data => cargarTabla(data))

}

let carro = document.getElementById('cardCarrito')

let porId = (id) =>{
  fetch(`http://localhost:8080/api/productos/${id}`,{})
        .then((res)=> res.json())   
        .then(data => carro.innerHTML += `<tr  >
        <th scope="row" id="${data.id}" >${data.id }</th>
        <td >${data.nombreprod}</td>
        <td>${data.precio}</td>
    </tr>`)
       
}

let borrar = (id) =>{
  fetch(`http://localhost:8080/api/productos/${id}`,{method: "DELETE"})
        .then((res)=> res.json())   
        .then(data => console.log(data))
}


let cambiar = (id) =>{
  let body = {nombreprod:"goma", precio:78,foto:"", foto:"https://http2.mlstatic.com/D_NQ_NP_715532-MLA41715527036_052020-O.jpg"}
  console.log('body:', body)

  fetch(`http://localhost:8080/api/productos/${id}`,{method: "PUT", body:JSON.stringify(body), headers:{ 'Content-Type': 'application/json'}})
        .then((res)=> res.json())   
        .then(data => console.log(body))

}





mostrarTabla()


