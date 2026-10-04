console.log("Inicio script 3");

// Bucle for que cuenta hasta 500 llamando a console.log para simular script pesado
for (let i = 0; i < 500; i++) {
    console.log(`[script3] iteración ${i}`);
}

const titulo3 = document.getElementById('titulo');
if (titulo3) {
    titulo3.innerText = 'Cambiado por Script 3';
    console.log("Éxito: Script 3 modificó el título");
} else {
    console.error("Error: El DOM aún no se ha construido (script3)");
}