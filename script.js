// ---- MODAL PORTAFOLIO ----
function abrirPortafolio(tipo) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  const contenido = {
    branding: {
      titulo: "BRANDING",
      descripcion:
        "Proyectos de branding profesionales. Diseño de identidad visual, logos, guías de estilo y más.",
    },
    flyers: {
      titulo: "FLYERS",
      descripcion:
        "Diseño de flyers y materiales promocionales. Creatividad e impacto visual.",
    },
    packaging: {
      titulo: "PACKAGING",
      descripcion:
        "Diseño de packaging. Soluciones creativas para tus productos.",
    },
    senaletica: {
      titulo: "SEÑALÉTICA",
      descripcion: "Diseño de señalética y sistemas de orientación.",
    },
  };

  if (contenido[tipo]) {
    modalTitle.textContent = contenido[tipo].titulo;
    modalDescription.textContent = contenido[tipo].descripcion;
    modal.style.display = "block";
  }
}


function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = (event) => {
  const modal = document.getElementById("modal");
  if (event.target == modal) modal.style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {

  const dot = document.getElementById("cursor");
  const ring = document.getElementById("cursor-effect");

  // Seguridad: si no existen los divs, no sigue
  if (!dot || !ring) return;
// Cursor personalizado
  const cursor = document.querySelector(".custom-cursor")
  const cursorFollower = document.querySelector(".custom-cursor-follower")
  // Mover el cursor
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    ring.style.left = x + "px";
    ring.style.top = y + "px";
  });

  // Efecto hover
  document.querySelectorAll("a, button, .cursor-hover, [data-cursor='hover']")
    .forEach(el => {
      el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover-active");
      });
      el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover-active");
      });
    });

});


  // Aplicamos blur dinámico
  document.body.style.filter = `blur(${blurAmount}px)`;
  document.body.classList.add("scroll-breathe");

  // Guardar valores
  lastScrollY = newY;
  lastTime = now;

  // Fade suave cuando frenás
  clearTimeout(window._clearBlur);
  window._clearBlur = setTimeout(() => {
    document.body.style.filter = "blur(0px)";
  }, 120);


// ---- FORMULARIO ----
function enviarFormulario(event) {
  event.preventDefault();
  alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
  event.target.reset();
}

function descargarPortafolio() {
  alert("Descargando portafolio...");
}

function descargarCV() {
  alert("Descargando CV...");
}

function descargarProyecto() {
  const titulo = document.getElementById("modalTitle").textContent;
  alert(`Descargando proyecto: ${titulo}`);
}
// ---- SCROLL SUAVE PARA EL MENÚ ----
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    
    });
    
  });
  
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener("click", function (e) {

    // SI ES LINK EXTERNO → no interferir
    if (this.href.startsWith("http")) {
      return; // deja que el navegador abra Instagram normalmente
    }

    // SI ES LINK INTERNO → scroll suave
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
