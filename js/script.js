 // Aquí tu código

 document.addEventListener("click", function () {
    const agregar = document.getElementById("agregar");
    const lista = document.getElementById("lista");

    agregar.addEventListener("click", function () {
        const edad = prompt("Ingresa tu edad:");
        const kilos = prompt("Ingresa tu peso en kilogramos:");
        const diasEntrenamiento = prompt("Ingresa el número de días que entrenas a la semana:");

        if (edad !== null && kilos !== null && diasEntrenamiento !== null) {
            const mensaje = `Edad: ${edad} años, Peso: ${kilos} kg, Días de entrenamiento: ${diasEntrenamiento} días`;

            const nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = mensaje;

            lista.appendChild(nuevoElemento);
        }
    });
});