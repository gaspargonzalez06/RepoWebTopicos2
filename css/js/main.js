
function obtenerNumeros() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    return { numero1, numero2 };
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}

function sumar() {
    const { numero1, numero2 } = obtenerNumeros();
    const resultado = numero1 + numero2;
    mostrarResultado(resultado);
}

function restar() {
    const { numero1, numero2 } = obtenerNumeros();
    const resultado = numero1 - numero2;
    mostrarResultado(resultado);
}

// Descomenta las siguientes funciones para agregar multiplicación y división
/*
function multiplicar() {
    const { numero1, numero2 } = obtenerNumeros();
    const resultado = numero1 * numero2;
    mostrarResultado(resultado);
}

function dividir() {
    const { numero1, numero2 } = obtenerNumeros();
    if (numero2 === 0) {
        mostrarResultado("Error: División por cero");
    } else {
        const resultado = numero1 / numero2;
        mostrarResultado(resultado);
    }
}
*/
