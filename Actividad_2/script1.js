console.log("Inicio script 1");

// Bucle for que cuenta hasta 500 llamando a console.log para simular script pesado
for (let i = 0; i < 500; i++) {
    console.log(`[script1] iteración ${i}`);
}

const titulo1 = document.getElementById('titulo');
if (titulo1) {
    titulo1.innerText = 'Cambiado por Script 1';
    console.log("Éxito: Script 1 modificó el título");
} else {
    console.error("Error: El DOM aún no se ha construido (script1)");
}