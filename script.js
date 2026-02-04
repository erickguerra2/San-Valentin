const contenidos = {
    "2026-02-06": { t: "¡Aceptaste! ❤️", m: "Mensaje del día 6...", img: "https://media.giphy.com/media/l41lTfuxV6pT02xJS/giphy.gif" },
    "2026-02-07": { t: "Donde todo empezó 💻", m: "Mensaje del día 7...", img: "fotos/foto1.jpeg" },
    "2026-02-08": { t: "Un momento random 🧀", m: "Mensaje del día 8...", img: "fotos/dia8.jpg" },
    "2026-02-09": { t: "Nuestra canción 🎶", m: "Mensaje del día 9...", img: "fotos/dia9.jpg" },
    "2026-02-10": { t: "Admiración pura ✨", m: "Mensaje del día 10...", img: "fotos/dia10.jpg" },
    "2026-02-11": { t: "Aventureros UVG 🌲", m: "Mensaje del día 11...", img: "fotos/dia11.jpg" },
    "2026-02-12": { t: "Casi, casi... ⏳", m: "Mensaje del día 12...", img: "fotos/dia12.jpg" },
    "2026-02-13": { t: "Víspera de Amor ❤️", m: "Mensaje del día 13...", img: "fotos/dia13.jpg" },
    "2026-02-14": { t: "Feliz San Valentín, Anggie ❤️", m: "Mensaje final...", img: "fotos/final.jpg" }
};

function cargarPagina() {
    // 1. Detectar si hay un parámetro "?dia=" en la URL
    const params = new URLSearchParams(window.location.search);
    const diaPrueba = params.get('dia'); // Ejemplo: "08"

    let fechaFinal;

    if (diaPrueba) {
        // Si pusiste ?dia=08, forzamos esa fecha
        fechaFinal = `2026-02-${diaPrueba}`;
        console.log("🛠️ Modo Debug: Probando el día " + fechaFinal);
    } else {
        // Si no hay parámetro, usa la fecha real del sistema
        const ahora = new Date();
        fechaFinal = ahora.getFullYear() + '-' + 
                     String(ahora.getMonth() + 1).padStart(2, '0') + '-' + 
                     String(ahora.getDate()).padStart(2, '0');
    }

    // 2. Buscar el contenido. Si no existe ese día, mostrar el del día 6.
    const data = contenidos[fechaFinal] || contenidos["2026-02-06"];

    // 3. Renderizar en el HTML
    document.getElementById('titulo').innerText = data.t;
    document.getElementById('mensaje').innerText = data.m;
    if(data.img) {
        document.getElementById('media-container').innerHTML = 
            `<img src="${data.img}" class="animate__animated animate__zoomIn img-fluid">`;
    }
}

window.onload = cargarPagina;