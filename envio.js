export function calcularEnvio(cantidad) {
    if (cantidad < 3) {
        return "No se permiten compras menores a 3 productos";
    } else if (cantidad >= 3 && cantidad <= 10) {
        return "Costo de envío: $15 USD";
    } else {
        return "Envío gratis";
    }
}