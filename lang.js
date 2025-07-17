const translations = {
  es: {
    inicio: "Inicio",
    nosotros: "Nosotros",
    galeria: "Galería",
    blog: "Blog",
    eventos: "Eventos",
    contacto: "Contacto",
    inicio_titulo: "Bienvenido",
    inicio_texto: "Este es el sitio oficial de la banda de metal Sosiality Suicide. Aquí encontrarás todo sobre nuestra música, eventos y más.",
    nosotros_titulo: "Quiénes Somos",
    nosotros_texto: "Sosiality Suicide es una banda de death y black metal formada para romper los límites del sonido y las emociones humanas. Oscuridad, potencia y verdad en cada nota.",
    galeria_titulo: "Galería",
    blog_titulo: "Noticias y Blog",
    blog_post_titulo: "Nuevo álbum en camino",
    blog_post_texto: "Estamos trabajando en un nuevo proyecto cargado de riffs oscuros y letras demoledoras. ¡Espéralo muy pronto!",
    eventos_titulo: "Eventos y Conciertos",
    contacto_titulo: "Contacto",
    contacto_nombre: "Nombre:",
    contacto_correo: "Correo:",
    contacto_mensaje: "Mensaje:",
    contacto_enviar: "Enviar"
  },
  en: {
    inicio: "Home",
    nosotros: "About Us",
    galeria: "Gallery",
    blog: "Blog",
    eventos: "Events",
    contacto: "Contact",
    inicio_titulo: "Welcome",
    inicio_texto: "This is the official site of the metal band Sosiality Suicide. Here you’ll find everything about our music, events, and more.",
    nosotros_titulo: "Who We Are",
    nosotros_texto: "Sosiality Suicide is a death and black metal band formed to break the limits of sound and human emotion. Darkness, power, and truth in every note.",
    galeria_titulo: "Gallery",
    blog_titulo: "News & Blog",
    blog_post_titulo: "New Album Coming Soon",
    blog_post_texto: "We are working on a new project full of dark riffs and crushing lyrics. Stay tuned!",
    eventos_titulo: "Events and Concerts",
    contacto_titulo: "Contact",
    contacto_nombre: "Name:",
    contacto_correo: "Email:",
    contacto_mensaje: "Message:",
    contacto_enviar: "Send"
  }
};

let currentLang = "es"; // idioma predeterminado

function cambiarIdioma() {
  currentLang = currentLang === "es" ? "en" : "es";

  const elementos = document.querySelectorAll("[data-lang]");
  elementos.forEach(el => {
    const clave = el.getAttribute("data-lang");
    if (translations[currentLang][clave]) {
      el.textContent = translations[currentLang][clave];
    }
  });

  // Cambiar texto del botón de idioma
  const boton = document.getElementById("lang-toggle");
  if (boton) {
    boton.textContent = currentLang === "es" ? "EN" : "ES";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botonIdioma = document.getElementById("lang-toggle");
  if (botonIdioma) {
    botonIdioma.addEventListener("click", cambiarIdioma);
  }
});    
