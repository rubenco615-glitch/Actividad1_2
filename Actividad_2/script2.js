console.log("Inicio script 2");

// Bucle for que cuenta hasta 500 llamando a console.log para simular script pesado
for (let i = 0; i < 500; i++) {
    console.log(`[script2] iteración ${i}`);
}

const titulo2 = document.getElementById('titulo');
if (titulo2) {
    titulo2.innerText = 'Cambiado por Script 2';
    console.log("Éxito: Script 2 modificó el título");
} else {
    console.error("Error: El DOM aún no se ha construido (script2)");
}