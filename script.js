// URL de tu Google Apps Script (Cuando la tengas, pégala aquí dentro de las comillas)
// Ejemplo: "https://script.google.com/macros/s/AKfycbx.../exec"
const APPS_SCRIPT_URL = ""; 

console.log("Sistema Agrario Buffet: Iniciado");

// Función para Borrar (Conectada al botón)
function borrarItem(nombreItem) {
    if(confirm(`¿Estás seguro de que quieres borrar: ${nombreItem}?`)) {
        
        // Simulación visual inmediata
        console.log("Borrando...", nombreItem);
        
        // CÓDIGO REAL PARA CONECTAR CON GOOGLE (Descomentar cuando tengas la URL)
        /*
        fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({ accion: "borrar", item: nombreItem })
        }).then(() => {
            alert("Borrado con éxito en la hoja de cálculo");
        }).catch(error => console.error("Error:", error));
        */

       alert("Elemento borrado (Simulación local)");
    }
}

// Función para Editar
function editarItem(nombreItem) {
    let nuevoValor = prompt("Editar nombre del ingrediente:", nombreItem);
    if (nuevoValor) {
        console.log("Cambiando", nombreItem, "por", nuevoValor);
        // Aquí iría el fetch de actualización
    }
}

// Botón de recargar
document.getElementById('btn-recargar').addEventListener('click', function() {
    this.style.transform = "rotate(360deg)";
    this.style.transition = "1s";
    console.log("Recargando datos...");
    // Aquí llamarías a una función para traer los datos de nuevo
    setTimeout(() => { this.style.transform = "rotate(0deg)"; }, 1000);
});