const productos = [
  { id: 1, producto: "fideos", precio: 2000 },
  { id: 2, producto: "manteca", precio: 600 },
  { id: 3, producto: "leche", precio: 1000 },
  { id: 4, producto: "puerro", precio: 1200 },
  { id: 5, producto: "albaca", precio: 300 },
];
const carrito = [];

function renderizarPagina() {
  productos.forEach((producto) => {
    let contenedor = document.createElement("div");
    contenedor.classList.add('productos');
    contenedor.innerHTML = `<h1>ID: ${producto.id}</h1> <p> Producto: ${producto.producto}</p> <p> $ ${producto.precio}</p> <button id="comprar${producto.id}">Añadir al carrito</button>`;
    document.body.appendChild(contenedor);

    let boton = document.getElementById(`comprar${producto.id}`);
    boton.addEventListener("click", () => agregarProductoAlCarrito(producto.id, producto.producto, producto.precio));
  });
}

function agregarProductoAlCarrito(id, nombre, precio) {
  const productoEnCarrito = carrito.find(item => item.id === id);
  
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
    productoEnCarrito.total = productoEnCarrito.precio * productoEnCarrito.cantidad;
    localStorage.setItem("EnCarrito", JSON.stringify(carrito));
  } else {
    carrito.push({ id: id, nombre: nombre, precio: precio, cantidad: 1, total: precio });
  }
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





