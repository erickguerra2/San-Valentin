const contenidos = {
    "06": {
        t: "¡Aceptaste! ❤️",
        m: "Sabía que mi ratita de queso favorita no diría que no. Si estás viendo esto, oficialmente eres mi San Valentín. Prepárate, porque cada día habrá algo nuevo aquí.",
        img: "https://media.giphy.com/media/l41lTfuxV6pT02xJS/giphy.gif"
    },
    "07": {
        t: "Donde todo empezó 💻",
        m: "Recordando cuando solo éramos dos estudiantes de ingeniería tratando de sobrevivir a los laboratorios. Quién diría que terminaríamos siendo el mejor equipo.",
        img: "fotos/dia7.jpg"
    },
    "08": {
        t: "Un momento random 🧀",
        m: "Me encanta cada risa y cada momento espontáneo contigo. Gracias por ser tan tú.",
        img: "fotos/dia8.jpg"
    },
    "09": {
        t: "Nuestra canción 🎶",
        m: "Cada vez que escucho esto, no puedo evitar pensar en ti. Eres la melodía de mi código favorito.",
        img: "fotos/dia9.jpg"
    },
    "10": {
        t: "Admiración pura ✨",
        m: "No solo eres hermosa, eres la ingeniera más inteligente que conozco. Me encanta verte brillar en lo que haces.",
        img: "fotos/dia10.jpg"
    },
    "11": {
        t: "Aventureros UVG 🌲",
        m: "De las aulas a cualquier lugar del mundo, siempre quiero que estés a mi lado.",
        img: "fotos/dia11.jpg"
    },
    "12": {
        t: "Casi, casi... ⏳",
        m: "Solo faltan dos días para celebrar lo mucho que te amo. Gracias por hacer que cada día sea especial.",
        img: "fotos/dia12.jpg"
    },
    "13": {
        t: "Víspera de Amor ❤️",
        m: "Mañana es el gran día, pero recuerda que te amo los 365 días del año (y los bisiestos también).",
        img: "fotos/dia13.jpg"
    },
    "14": {
        t: "Feliz San Valentín, Anggie ❤️",
        m: "Eres el amor de mi vida, mi compañera de proyectos y mi ratita de queso para siempre. ¡Gracias por decir que sí!",
        img: "fotos/final.jpg"
    }
};

function cargarPagina() {
    const params = new URLSearchParams(window.location.search);
    let dia = params.get('dia'); // Captura "07", "08", etc.

    // Si no hay parámetro en la URL, sacamos el día real del sistema
    if (!dia) {
        const hoy = new Date();
        // Solo extraemos el día (ej: "04", "06", "14")
        dia = String(hoy.getDate()).padStart(2, '0');
    }

    // Buscamos en el objeto usando solo el número del día
    // Si el día no está en el objeto (ej. hoy es 04), mostramos el día 06 por defecto
    const data = contenidos[dia] || contenidos["06"];

    // Actualizamos el HTML
    document.getElementById('titulo').innerText = data.t;
    document.getElementById('mensaje').innerText = data.m;
    
    const container = document.getElementById('media-container');
    if (data.img) {
        container.innerHTML = `<img src="${data.img}" class="animate__animated animate__zoomIn img-fluid">`;
    } else {
        container.innerHTML = "";
    }
    
    console.log("Mostrando contenido para el día:", dia);
}

// Ejecutar al cargar la ventana
window.onload = cargarPagina;