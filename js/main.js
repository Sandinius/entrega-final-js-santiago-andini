
const productos = [
    { producto: "fideos", precio: 2000 },
  { producto: "manteca", precio: 600 },
  { producto: "leche", precio: 1000 },
  { producto: "puerro", precio: 1200 },
  { producto: "albaca", precio: 300 },
];

const carrito = [];

const sacarPrecio = (comprado) => {
    const buscaPrecios = productos.find(i => i.producto === comprado);
    return buscaPrecios ? buscaPrecios.precio : "El producto no se encuentra disponible";
};

let producto = prompt('Estos son nuestros productos disponibles: fideos, manteca, leche, puerro y albaca. Escribe "fin" para finalizar.');

while (producto.toLowerCase() !== 'fin') {
    let valor = sacarPrecio(producto);
    
    carrito.push({ producto: producto, precio: valor });
    
    producto = prompt('Estos son nuestros productos disponibles: fideos, manteca, leche, puerro y albaca. Escribe "fin" para finalizar.');
}
let mensajeCarrito = 'Carrito:\n';
for (const item of carrito) {
    mensajeCarrito += `Producto: ${item.producto}, Precio: ${item.precio}\n`;
}


alert(`Este es su carrito ${mensajeCarrito}`)
