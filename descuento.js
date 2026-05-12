export function calcularDescuento(total) {
    if (total < 200) {
        return `Te faltan $${200 - total} para obtener una promoción.`;
    } else if (total >= 200 && total <= 500) {
        return { 
            mensaje: "Tienes un descuento del 5%", 
            nuevoTotal: total * 0.95 
        };
    } else {
        return { 
            mensaje: "Tienes un descuento del 12%", 
            nuevoTotal: total * 0.88 
        };
    }
}