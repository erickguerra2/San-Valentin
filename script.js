/**
 * Script para el San Valentín de Anggie ❤️
 * Desarrollado por: Erick Antonio Guerra Illescas
 */

const contenidos = {
    "06": {
        t: "¡Aceptaste! ❤️",
        m: "Sabía que mi ratita de queso favorita no diría que no. Si estás viendo esto, oficialmente eres mi San Valentín. Prepárate, porque cada día habrá algo nuevo aquí.",
        img: "fotos/dia6.png" // Asegúrate de que este archivo sea .png en tu carpeta
    },
    "07": {
        t: "Donde todo empezó 📸",
        m: "Pues no es exactamente donde todo empezó JAJA, pero es una de nuestras primeras fotos juntos así que la vamos a usar como símbolo para este día. Además hasta la foto dice que eres 'you' y sí que eres tú, estoy seguro de eso.",
        img: "fotos/dia7.jpg"
    },
    "08": {
        t: "Un momento random 🧀",
        m: "Amo pasar esos momentos tan espontáneos en los que nos vemos al terminar las clases y hablamos cositas lindas y nos podemos dar abracitos y besitos. Amo que nuestra relación sea tan espontánea, divertida y que seas tú con la que me sienta feliz.",
        img: "fotos/dia8.jpeg"
    },
    "09": {
        t: "Nuestra canción 🎶",
        m: "Cada vez que escucho esto, no puedo evitar pensar en ti. Eres la melodía de mi vida.",
        img: "fotos/dia9.jpeg",
        // RECUERDA REEMPLAZAR ESTOS LINKS POR LOS REALES DE TU PLAYLIST
        music: "https://open.spotify.com/embed/playlist/2k6ZLYnZLahKGWVr0hv2k1?utm_source=generator&theme=0", // El src que encontraste
        playlistLink: "https://open.spotify.com/playlist/2k6ZLYnZLahKGWVr0hv2k1?si=d2374da569a549c3"
    },
    "10": {
        t: "Admiración pura ✨",
        m: "No solo eres hermosa, eres la mujer más inteligente que conozco. Me encanta verte brillar en lo que haces. Eres excepcional, jamás dejes de luchar por tus convicciones y por tus sueños y sabes que siempre me tendrás para apoyarte. Soy tu fan #1 amorcito.",
        img: "fotos/dia10.jpeg"
    },
    "11": {
        t: "Aventureros 🌲",
        m: "Por más viajes a cualquier lado, ya llevamos uno a Xela JAJA. Amo pasar tiempo contigo, sin duda alguna el mejor viaje de mi vida: ir contigo en el carro abrazaditos, dormidos, agarrados de la mano, molestándote... amo eso de verdad y quiero que en un futuro sean muchos viajes así. TE AMO.",
        img: "fotos/dia11.jpeg"
    },
    "12": {
        t: "Casi, casi... ⏳",
        m: "Solo faltan dos días para celebrar lo mucho que te amo. Gracias por hacer que cada día sea especial. Este día solo es una excusa para demostrarte amor, pero te amo cada día de mi vida y te seguiré amando el resto de mis días. Gracias por estar a mi lado siempre, eres la razón por la que soy más feliz, me haces ser una mejor persona e inspiras a ser mejor cada día. TE AMO MI RATITA DE QUESO.",
        img: "fotos/dia12.jpeg"
    },
    "13": {
        t: "Víspera de Amor ❤️",
        m: "Mañana es el gran día, pero recuerda que te amo los 365 días del año (y los bisiestos también). Espero te guste lo que tengo preparado (al momento de hacer esto aún no está todo muy claro JAJA). Te amo mi princesa hermosa.",
        img: "fotos/dia13.jpeg"
    },
    "14": {
        t: "Feliz San Valentín, Amorcito ❤️",
        m: "Eres el amor de mi vida, mi compañera de aventuras y mi ratita de queso para siempre. ¡Gracias por decir que sí!",
        img: "fotos/final.png" // Aquí subes tu collage hecho en Canva
    }
};

function cargarPagina() {
    const params = new URLSearchParams(window.location.search);
    let dia = params.get('dia'); 

    // Si no hay parámetro, usamos el día real del sistema
    if (!dia) {
        const hoy = new Date();
        dia = String(hoy.getDate()).padStart(2, '0');
    }

    // Buscamos la data del día; si no existe, mostramos el día 06 por defecto
    const data = contenidos[dia] || contenidos["06"];

    // --- LÓGICA DE FONDO (BEIGE Y COLLAGE) ---
    const body = document.body;
    
    if (dia === "14") {
        // Estilo para el día final: Imagen de fondo + overlay suave
        body.style.backgroundImage = `linear-gradient(rgba(245, 245, 220, 0.75), rgba(245, 245, 220, 0.75)), url('${data.img}')`;
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.backgroundAttachment = "fixed";
    } else {
        // Estilo beige aesthetic para el resto de los días
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#F5F5DC"; 
    }

    // --- ACTUALIZACIÓN DE CONTENIDO ---
    document.getElementById('titulo').innerText = data.t;
    document.getElementById('mensaje').innerText = data.m;
    
    // Imagen principal en la tarjeta
    const container = document.getElementById('media-container');
    if (data.img) {
        container.innerHTML = `<img src="${data.img}" class="animate__animated animate__zoomIn rounded-3xl shadow-lg border-4 border-white w-full h-auto object-cover aspect-square">`;
    } else {
        container.innerHTML = "";
    }
    
    // Reproductor y botón de Spotify
    const musicContainer = document.getElementById('spotify-container');
    if (data.music) {
        let htmlExtra = `
            <iframe style="border-radius:12px" 
                src="${data.music}" 
                width="100%" height="152" 
                frameBorder="0" allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>`;

        if (data.playlistLink) {
            htmlExtra += `
                <div class="mt-4">
                    <a href="${data.playlistLink}" target="_blank" class="btn btn-primary btn-outline w-full rounded-full gap-2 animate__animated animate__fadeIn">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" class="w-6 h-6">
                        Escuchar playlist completa
                    </a>
                </div>`;
        }
        musicContainer.innerHTML = htmlExtra;
    } else {
        musicContainer.innerHTML = "";
    }
    
    console.log("Mostrando contenido para el día:", dia);
}

// Inicializar la página al cargar
window.onload = cargarPagina;