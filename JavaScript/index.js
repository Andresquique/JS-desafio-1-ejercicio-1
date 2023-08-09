let costoFijo;
let precioVenta;
let costoVariable;


function ingresoDato(input,nombre){
    do {
        input = Number(prompt(`ingrese el ${nombre}`))}
    while (!input || input <= 0);
    return input;
}

precioVenta = ingresoDato(precioVenta,"precio de venta");
costoFijo = ingresoDato(costoFijo,"costo fijo");
costoVariable = ingresoDato(costoVariable,"costo variable");

alert(`precio venta es ${precioVenta}, costo fijo es ${costoFijo} y costo variable es ${costoVariable}`);
const puntoDeEquilibrio = (costoFijo/(precioVenta+costoVariable));
alert(`El punto de equilibrio es ${puntoDeEquilibrio}`);