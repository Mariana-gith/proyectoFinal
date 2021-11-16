let cargarTabla =  (data) =>{
  let tabla = data.map((p)=>(` 
  <tr  >
      <th scope="row" id="${p.id}" >${p.id }</th>
      <td >${p.nombreprod}</td>
      <td>${p.precio}</td>
      <td ><button onClick="porId(${p.id})">x</button></td>
      <td ><button  onClick=" borrar (${p.id})">BORRAR</button></td>
      <td ><button onClick=" cambiar (${p.id})">CAMBIAR</button></td>
      
  </tr>`)).join('')

  document.getElementById('tbody').innerHTML=  tabla  
}

let mostrarTabla = () =>{
  fetch("http://localhost:8080/api/productos",{})
             .then((res)=> res.json())   
             .then(data => cargarTabla(data))

}


let porId = (id) =>{
   
  fetch(`http://localhost:8080/api/productos/${id}`,{})
        .then((res)=> res.json())   
        .then(data => console.log(data))
}


let borrar = (id) =>{
  let body = {}
    console.log('body:', body)
    
  fetch(`http://localhost:8080/api/productos/${id}`,{method: "DELETE", body:JSON.stringify(body), headers:{ 'Content-Type': 'application/json'}})
        .then((res)=> res.json())   
        .then(data => console.log(data))

}


let cambiar = (id) =>{
  let body = {nombreprod:"goma", precio:78,foto:""}
  console.log('body:', body)

  fetch(`http://localhost:8080/api/productos/${id}`,{method: "PUT", body:JSON.stringify(body), headers:{ 'Content-Type': 'application/json'}})
        .then((res)=> res.json())   
        .then(data => console.log(body))

}





mostrarTabla()


