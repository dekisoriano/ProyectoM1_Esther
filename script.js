const cantidad = document.getElementById("cantidad");

const botonGenerar = document.getElementById("generar");

const paleta = document.getElementById("paleta");

const mensaje = document.getElementById("mensaje");

function generarColorHSL(){
    const tono = Math.floor(Math.random() * 360);
    const saturacion = Math.floor(Math.random() * 101);
    const luminosidad = Math.floor(Math.random() * 101);

    return `hsl(${tono}, ${saturacion}%,${luminosidad}%)`;
}

 function convertirAHex(colorHSL) {
        const canvas = document.createElement("canvas");
        const contexto = canvas.getContext("2d")

        contexto.fillStyle = colorHSL;
        contexto.fillRect(0, 0, 1, 1);

        const datos = contexto.getImageData(0, 0, 1, 1).data;

        const rojo = datos[0];
        const verde = datos [1];
        const azul = datos [2];
        
        const hex = "#" + [rojo, verde, azul]
        .map(numero => numero.toString(16).padStart(2, "0"))
        .join("");

        return hex.toUpperCase();
    }

botonGenerar.addEventListener("click", function() {
    const numeroColores = Number(cantidad.value);

    paleta.innerHTML = "";

    for (let index = 0; index < numeroColores; index++) {
        const color = generarColorHSL();
        const codigoHex = convertirAHex(color);


        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const cuadroColor = document.createElement("div");
        cuadroColor.classList.add("color");
        cuadroColor.style.backgroundColor = color;
        
        const codigo = document.createElement("p");
        codigo.classList.add("codigo");
        codigo.textContent = codigoHex;

        tarjeta.appendChild(cuadroColor);
        tarjeta.appendChild(codigo);
        paleta.appendChild(tarjeta);
        
    }
    mensaje.textContent = "¡Paleta generada correctamente!";


});



