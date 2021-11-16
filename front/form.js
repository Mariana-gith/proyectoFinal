
let cargarCArd =  (data) =>{
    let card = data.map((p)=>(`
     <div class="card" style="width: 18rem;">
    <img src="${p.foto}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${p.nombreprod}</h5>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ID:${p.id}</li>
      <li class="list-group-item">PRECIO: ${p.precio}</li>
    </ul>
  </div>`)).join('')
    
    //console.log('esto es card', card)
    document.getElementById('cardBody').innerHTML=  card  
}

let mostrarCard = () =>{
    
    fetch("http://localhost:8080/api/productos",{})
               .then((res)=> res.json())   
               .then(data => cargarCArd(data))

}

mostrarCard()





let cargarProducto = () =>{
    let body = {nombreprod:document.getElementById('nombre').value , precio: document.getElementById('precio').value,foto:document.getElementById('foto').value}
    console.log('body:', body)

    fetch("http://localhost:8080/api/productos",{method: "POST", body:JSON.stringify(body), headers:{ 'Content-Type': 'application/json'}})
    .then((res)=> res.json())   
    .then(data => document.getElementById('tabla').innerHTML=+data.map((p)=>(` 
    <tr>
        <th scope="row">${p.id}</th>
        <td>${p.nombreprod}</td>
        <td>${p.precio}</td>
    </tr>`)).join('')
    )

}
