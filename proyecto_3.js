let productos = [];
let subTotal = 0;
let totalIva = 0;
let total = 0;
let sumaTotal = 0;

function agregarProducto(nombre, precio, descuentoTipo){
    let precioDescuento;
    let descuento;
    let ivaProducto;

    if(descuentoTipo){
        switch(descuento){
            case 1:
              precioDescuento = precio - (precio * 0.10)
            break;
            
            case 2:
                precioDescuento = precio - (precio * 0.05)
            break;
            default:
                precioDescuento = precio - (precio * 0.03)
            break;
        }
    }

    if(precioDescuento){
        ivaProducto = calcularIva(precioDescuento);
        subTotal = subTotal + (precioDescuento - ivaProducto);
        total = total + precioDescuento;
    } else {
        ivaProducto = calcularIva(precio)
        subTotal = subTotal + (precio - ivaProducto);
        total = total + precio;
    }

    const producto = {
        nombre: nombre,
        precio,
        precioFinal: precioDescuento ? precioDescuento : undefined,
        valorIva: ivaProducto
    };
    productos.push(producto);
};

function calcularIva(precio) {
    let ivaProducto = precio * 0.13;
    totalIva = totalIva + ivaProducto
    return ivaProducto;   
}

function imprimirfactura(){
    for (let i = 0; i < productos.length; i++) {
        sumaTotal += productos[i].precioFinal
    }

    console.log(productos)
    console.log(`La suma total es: $${sumaTotal} doláres`)
}