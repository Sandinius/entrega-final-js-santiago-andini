
let carrito = JSON.parse(localStorage.getItem("EnCarrito")) || [];


function loadLocalJSONData(nombreDelArchivo) {
  return fetch(nombreDelArchivo)
    .then(response => {
      if (!response.ok) {
        throw new Error('Hubo un error al recuperar los datos');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

nombreDelArchivo = '/productos.json';

loadLocalJSONData(nombreDelArchivo)
  .then(data =>{
    console.log(data)
    renderizarPagina(data);
  })

function renderizarPagina(data) {
  let article = document.getElementById('articlecontainer');

  article.classList.add('productos');

  let titulo = document.getElementById('carritotitulo');

  titulo.innerHTML = `Carrito <p id="carrito" class="carritocontenedor"> </p> <button id="borrar">Borrar Carrito</button> <button id="mostrar">Mostrar Carrito</button>`;


  document.body.appendChild(titulo);
  
  data.forEach((producto) => {
   
    
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `<img src="${producto.foto}" alt="${producto.producto}"/> <p> Producto: ${producto.producto}</p> <p> $ ${producto.precio}</p> <button id="comprar${producto.id}">Añadir al carrito</button>`;
    contenedor.classList.add('contenedores_productos');

     

    article.appendChild(contenedor);
    
    let botonMostrar = document.getElementById(`mostrar`);
    let botonBorrar = document.getElementById(`borrar`);
    let boton = document.getElementById(`comprar${producto.id}`);
    botonMostrar.addEventListener("click", ()=> renderizarCarrito())
    botonBorrar.addEventListener("click", ()=> borrarProductosDelCarrito())
    boton.addEventListener("click", () => agregarProductoAlCarrito(producto.id, producto.producto, producto.precio));
  });
}

function borrarProductosDelCarrito(){
  carrito = [];

  localStorage.removeItem("EnCarrito");

  renderizarCarrito();
  swal({
    text:"Carrito borrado correctamente",
    icon:"info",
  }); 
}
function agregarProductoAlCarrito(id, nombre, precio) {
  const productoEnCarrito = carrito.find(item => item.id === id);
  
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
    productoEnCarrito.total = productoEnCarrito.precio * productoEnCarrito.cantidad;
  } else {
    carrito.push({ id: id, nombre: nombre, precio: precio, cantidad: 1, total: precio });
    swal({
      text:"Producto agregado al carrito por primera vez",
      icon:"success",
    });  
  }

  // Actualizar los datos en localStorage
  localStorage.setItem("EnCarrito", JSON.stringify(carrito));

  renderizarCarrito();
}


function renderizarCarrito() {
 
  const carritoDiv = document.getElementById("carrito");
  carritoDiv.innerHTML = ' '; 
  
  carrito.forEach((item) => {
    let carritoItem = document.createElement("div");
    carritoItem.innerHTML = `<p> Producto: ${item.nombre}</p> <p> Cantidad: ${item.cantidad}</p> <p> Total: $ ${item.total}</p>`;
    carritoDiv.appendChild(carritoItem);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderizarPagina();
});
