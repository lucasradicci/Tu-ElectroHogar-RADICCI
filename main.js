
const productos = [
    { id: 1, nombre: 'Heladera', precio: 800 },
    { id: 2, nombre: 'Lavarropas', precio: 500 },
    { id: 3, nombre: 'Microondas', precio: 150 },
    { id: 4, nombre: 'Televisor', precio: 1000 },
    { id: 5, nombre: 'Horno Eléctrico', precio: 250},
    
];

let carrito= JSON.parse(localStorage.getItem('carrito')) ||[];

function mostrarProductos(){
    const listaProductos= document.getElementById('listaProductos');
    listaProductos.innerHTML='';

    productos.forEach(producto=>{
        const li= document.createElement('li');
        li.textContent= `${producto.nombre} - $${producto.precio}`;
        const button= document.createElement('button');
        button.textContent='Agregar al Carrito';
        button.addEventListener('click', ()=> agregarAlCarrito(producto.id));
        li.appendChild(li); 
    })
}
mostrarProductos()
