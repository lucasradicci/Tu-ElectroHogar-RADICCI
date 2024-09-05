
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
        li.appendChild(button);
        listaProductos.appendChild(li); 
    })
}

function agregarAlCarrito(id){
    const producto=productos.find(p => p.id=== id);
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito()
    mostrarMensaje`(${producto.nombre} ha sido agregado al carrito.)`;
}

function mostrarCarrito(){
    const listaCarrito= document.getElementById('listaCarrito');
    const total= document.getElementById('total');
    listaCarrito.innerHTML="";

    carrito.forEach((producto, index)=>{
        const li=document.createElement('li');
        li.textContent= `${producto.nombre} - $${producto.precio}`;
        const button=document.createElement('button');
        button.textContent='Eliminar';
        button.addEventListener('click', ()=> eliminarDelCarrito(index));
        li.appendChild(button);
        listaCarrito.appendChild(li);
    })

    const totalPrecio=carrito.reduce((acc, producto) => acc+ producto.precio, 0);
    total.textContent= `$${totalPrecio}`;
}

function eliminarDelCarrito(index){
    const productoEliminado= carrito.splice(index,1)[0];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    mostrarMensaje(`${productoEliminado.nombre} ha sido eliminado del carrito.`);

}

function mostrarMensaje(mensaje){
    const mensajeDiv= document.getElementById('mensaje');
    mensajeDiv.textContent= mensaje;
    mensajeDiv.classList.remove('oculto');
    mensajeDiv.classList.add('visible');

    setTimeout(() =>{
        mensajeDiv.classList.remove('visible');
        mensajeDiv.classList.add('oculto');
    }, 3000)


}