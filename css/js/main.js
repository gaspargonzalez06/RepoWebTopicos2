document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sumar').addEventListener('click', sumar);
    document.getElementById('restar').addEventListener('click', restar);
    document.getElementById('multiplicar').addEventListener('click', multiplicar);
    document.getElementById('dividir').addEventListener('click', dividir);
});

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
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = numero1 + numero2;
        mostrarResultado(resultado);
    } else {
        mostrarResultado('Por favor, introduce números válidos.');
    }
}

function restar() {
    const { numero1, numero2 } = obtenerNumeros();
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = numero1 - numero2;
        mostrarResultado(resultado);
    } else {
        mostrarResultado('Por favor, introduce números válidos.');
    }
}

function multiplicar() {
    const { numero1, numero2 } = obtenerNumeros();
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = numero1 * numero2;
        mostrarResultado(resultado);
    } else {
        mostrarResultado('Por favor, introduce números válidos.');
    }
}

function dividir() {
    const { numero1, numero2 } = obtenerNumeros();
    if (!isNaN(numero1) && !isNaN(numero2)) {
        if (numero2 === 0) {
            mostrarResultado("Error: División por cero");
        } else {
            const resultado = numero1 / numero2;
            mostrarResultado(resultado);
        }
    } else {
        mostrarResultado('Por favor, introduce números válidos.');
    }
}
