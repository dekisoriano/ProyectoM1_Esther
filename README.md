# Generador de paleta de colores

## Descripción del proyecto 

Mi proyecto consiste en una herramienta web que permite crear paletas de colores aleatorias. Su propósito es ayudar a acelerar el flujo creativo del equipo y estandarizar las propuestas iniciales mediante la generación de diferentes combinaciones de colores.

Para utilizarla, el usuario debe ingresar a la página y seleccionar la cantidad de colores que desea generar, ya sean 6, 8 o 9. Después, debe presionar el botón «Generar paleta» y, finalmente, puede copiar el código HEX del color que más le guste para utilizarlo en sus propios diseños.

Durante el desarrollo de este proyecto pude reforzar mis conocimientos de HTML, especialmente el uso de etiquetas y atributos como label, id y class. En CSS aprendí más sobre el diseño responsive, que permite adaptar una página a diferentes tamaños de pantalla. Por último, en JavaScript practiqué el uso de ciclos for, funciones y la manipulación del DOM para generar y mostrar los colores de manera dinámica.

## Funcionalidades 
-  Seleccionar la cantidad de colores: permite al usuario elegir entre 6, 8 o 9 colores para crear su paleta.
- Generar paletas de colores: al presionar el botón «Generar paleta», se crean combinaciones de colores aleatorias.
- Visualizar códigos de colores: cada color generado se muestra junto con su código HEX.
- Generar nuevas combinaciones: permite reemplazar la paleta anterior por una nueva, facilitando la búsqueda de diferentes combinaciones de colores.
- Confirmación visual: muestra un mensaje cuando se genera una paleta correctamente.

## Tecnologías utilizadas 
- HTML 5: lo utilicé para crear la estructura de mi proyecto, organizando los diferentes elementos de la página, como el título, el selector de colores y el botón para generar la paleta.
- CSS:  lo utilicé para darle estilos a mi página, incluyendo los colores, tamaños, espacios y la distribución de las tarjetas. También me permitió implementar un diseño responsive para adaptar la página a diferentes tamaños de pantalla.
- JavaScript: lo utilicé para darle interactividad a mi página. Mediante funciones y ciclos for, pude generar colores aleatorios y crear las tarjetas de manera dinámica, según la cantidad seleccionada por el usuario. los utilicé para guardar los avances de mi proyecto y llevar un historial de los cambios que se realizaron según se iba acompletando una parte importante del proyecto. Almacené mi código en un repositorio.

## Decisiones técnicas 

### Organizar los colores en tarjetas con CSS Grid
Decidí mostrar los colores en tarjetas individuales porque visualmente resulta más cómodo y ordenado. De esta manera, el usuario puede distinguir fácilmente cada color y encontrar debajo su código HEX, lo que facilita su identificación y uso.

### Uso de for en JavaScript
Decidí utilizar un ciclo for porque me permite ahorrar tiempo y evitar escribir repetidamente el mismo código. Gracias a este ciclo, puedo generar la cantidad de tarjetas que el usuario seleccione, ya sean 6, 8 o 9. En cada repetición se genera un color aleatorio y se muestra en una tarjeta junto con su código HEX.

### Uso de los formatos HSL y HEX
Decidí utilizar HSL para generar los colores aleatorios, ya que permite trabajar con el tono, la saturación y la luminosidad de cada color. Después, los colores se convierten al formato HEX porque es uno de los formatos más utilizados en el desarrollo web y resulta más fácil de reconocer y utilizar para los usuarios.

## Cómo ejecutar el proyecto
Para ejecutar el proyecto en una computadora, se deben seguir estos pasos:

- Ingresar al repositorio de GitHub y descargar el proyecto.
- Descomprimir la carpeta descargada, si es necesario.
- Abrir Visual Studio Code.
- Seleccionar la opción File > Open Folder y abrir la carpeta del proyecto.
- Una vez abierta la carpeta, se mostrarán los archivos index.html, style.css y script.js.
- Abrir el archivo index.html y ejecutar Live Server mediante la opción Go Live.
- El proyecto se abrirá en el navegador y estará listo para utilizarse.

Nota: Para utilizar Live Server, es necesario tener instalada esta extensión en VSC. También se puede abrir directamente el archivo index.html en un navegador.

## Cómo desplegarlo en GitHub Pages
Para publicar mi proyecto en GitHub Pages, primero subí los archivos de mi aplicación a un repositorio de GitHub.

Después seguí estos pasos:

- Ingresé a mi repositorio de GitHub.
- Abrí la sección Settings.
- En el menú lateral, seleccioné Pages.
- En Build and deployment, elegí la opción Deploy from a branch.
- Seleccioné la rama main y la carpeta / (root), donde se encuentran los archivos de mi proyecto.
- Presioné Save y esperé a que GitHub terminara de publicar la página.
- Finalmente, abrí el enlace generado para comprobar que mi aplicación funcionara correctamente.

## Enlace a la aplicación
https://dekisoriano.github.io/ProyectoM1_Esther/

## Documentación y evidencias 