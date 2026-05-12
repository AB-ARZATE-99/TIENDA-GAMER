import { calcularEnvio } from './envio.js';
import { calcularDescuento } from './descuento.js';
import { esVIP } from './vip.js';

const nombre = "ABRAHAM";
const cantidad = 5;
const total = 250;

console.log(`Hola ${nombre}`);

console.log(calcularEnvio(cantidad));

const infoDescuento = calcularDescuento(total);
if (typeof infoDescuento === "string") {
    console.log(infoDescuento);
} else {
    console.log(infoDescuento.mensaje);
    console.log(`Nuevo total: $${infoDescuento.nuevoTotal.toFixed(2)} USD`);
}

// 3. Mostrar si es VIP
if (esVIP(cantidad, total)) {
    console.log("Status: Cliente VIP 🌟");
}