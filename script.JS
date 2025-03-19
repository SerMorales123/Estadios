document.addEventListener("DOMContentLoaded", () => {
    let contGrande = document.getElementById("grande-container");
    let puntos = document.querySelectorAll(".punto");

    puntos.forEach((punto, i) => {
        punto.addEventListener("click", () => {
            let posicionContenedor = -25 * i;
            contGrande.style.transform = `translateX(${posicionContenedor}%)`;

            // Eliminar la clase "punto-activo" de todos los puntos
            puntos.forEach(p => p.classList.remove("punto-activo"));

            // Agregar la clase "punto-activo" al clickeado
            punto.classList.add("punto-activo");
        });
    });
});
