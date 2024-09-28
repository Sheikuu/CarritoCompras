// Productos
const productos = [
    { id: 1, nombre: "Tomates (1 kg)", precio: 1750 },
    { id: 2, nombre: "Pan Bimbo", precio: 1640 },
    { id: 3, nombre: "Chocolate Trencito", precio: 1000 },
    { id: 4, nombre: "Pepino (Unidad)", precio: 990 },
    { id: 5, nombre: "Sal de Mar", precio: 980 },
    { id: 6, nombre: "Repollo", precio: 560},
];

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach(producto => {
        mensaje += `${producto.id}. ${producto.nombre} $${producto.precio}\n`;
    });
    return mensaje;
}

function agregarProducto() {
    let total = 0;
    let seguirAgregando = true;

    // Productos disponibles
    while (seguirAgregando) {
        alert(mostrarProductos());

        // Ingresar número del producto
        let productoSeleccionado = parseInt(prompt("Ingresa el número del producto que deseas agregar al carrito:"));
        let producto = productos.find(p => p.id === productoSeleccionado);

        if (producto) {
            let cantidad = parseInt(prompt("¿Cuantas unidades del producto desea agregar?:"));
            let subtotal = producto.precio * cantidad;

            // Confirmación de compra + subtotal
            alert(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito. Subtotal: $${subtotal}`);

            // Sumar al total
            total += subtotal;

            let respuesta = prompt("¿Desea seguir agregando productos? (s/n)").toLowerCase();
            if (respuesta !== "s") {
                seguirAgregando = false;
            }
        } else {
            alert("Producto no existe en la lista :(");
        }
    }

    alert(`Su total a pagar es de: $${total}. ¡Gracias por su compra!`);
}
