document.addEventListener("DOMContentLoaded", function () {
  // Esperar un momento para asegurarse de que Bootstrap está completamente cargado
  setTimeout(function () {
    // Reiniciar el carrusel de agencias para garantizar su funcionamiento correcto
    var carouselElement = document.querySelector("#carouselAgencias");

    if (carouselElement) {
      // Verificar que Bootstrap está disponible
      if (window.bootstrap) {
        try {
          // Intentar obtener instancia existente
          var existingInstance =
            bootstrap.Carousel.getInstance(carouselElement);

          // Si existe una instancia, destruirla
          if (existingInstance) {
            existingInstance.dispose();
          }

          // Crear nueva instancia con configuración específica
          var carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000, // Tiempo entre slides (5 segundos)
            wrap: true, // Vuelve al principio cuando termina
            keyboard: true, // Permitir navegación con teclado
            pause: "hover", // Pausar al pasar el ratón
            touch: true, // Permitir gestos táctiles
          });

          // Verificar que los botones de navegación funcionen correctamente
          var prevButton = document.querySelector(
            "#carouselAgencias .carousel-control-prev"
          );
          var nextButton = document.querySelector(
            "#carouselAgencias .carousel-control-next"
          );

          if (prevButton) {
            prevButton.addEventListener("click", function (e) {
              e.preventDefault();
              carousel.prev();
            });
          }

          if (nextButton) {
            nextButton.addEventListener("click", function (e) {
              e.preventDefault();
              carousel.next();
            });
          }

          // También agregar eventos para los indicadores
          var indicators = document.querySelectorAll(
            "#carouselAgencias .carousel-indicators button"
          );
          indicators.forEach(function (indicator) {
            indicator.addEventListener("click", function () {
              var slideTo = this.getAttribute("data-bs-slide-to");
              carousel.to(parseInt(slideTo));
            });
          });

          console.log("✅ Carrusel de agencias inicializado correctamente");
        } catch (error) {
          console.error("Error al inicializar el carrusel:", error);
        }
      } else {
        console.error("Bootstrap no está disponible");
      }
    } else {
      console.error("Elemento del carrusel no encontrado");
    }
  }, 500); // Pequeño retraso para asegurar que todo esté listo
});
