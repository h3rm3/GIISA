
// Obtener el contador del almacenamiento local o inicializarlo en 0
let visitCount = localStorage.getItem('visitCount');
if (!visitCount) {
    visitCount = 0;
}

// Incrementar el contador
visitCount++;

// Mostrar el contador en la página
document.getElementById('visit-count').innerText = visitCount;

// Guardar el nuevo valor en el almacenamiento local
localStorage.setItem('visitCount', visitCount);
