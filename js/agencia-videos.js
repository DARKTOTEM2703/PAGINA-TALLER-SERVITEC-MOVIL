document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los contenedores de video
  const videoContainers = document.querySelectorAll(
    ".agencia-logo.video-container"
  );

  // Variable para almacenar el video que se está reproduciendo actualmente
  let currentPlayingVideo = null;

  // Función para controlar la reproducción de video
  function toggleVideoPlay(container) {
    const video = container.querySelector("video");
    const overlay = container.querySelector(".video-overlay");

    if (video.paused) {
      // Pausar cualquier otro video que esté reproduciéndose
      if (currentPlayingVideo && currentPlayingVideo !== video) {
        currentPlayingVideo.pause();
        currentPlayingVideo
          .closest(".video-container")
          .classList.remove("playing");
      }

      // Reproducir este video
      video.play();
      container.classList.add("playing");
      currentPlayingVideo = video;
    } else {
      // Pausar video
      video.pause();
      container.classList.remove("playing");
      currentPlayingVideo = null;
    }
  }

  // Añadir event listeners a cada contenedor de video
  videoContainers.forEach((container) => {
    container.addEventListener("click", () => toggleVideoPlay(container));
  });

  // Añadir listener para el carrusel para pausar los videos cuando cambie de diapositiva
  const carouselElement = document.getElementById("carouselAgencias");
  if (carouselElement) {
    carouselElement.addEventListener("slide.bs.carousel", function () {
      if (currentPlayingVideo) {
        currentPlayingVideo.pause();
        currentPlayingVideo
          .closest(".video-container")
          .classList.remove("playing");
        currentPlayingVideo = null;
      }
    });

    // Verificar qué slide está activo cuando se detiene el carrusel
    carouselElement.addEventListener("slid.bs.carousel", function () {
      // Si la reproducción automática está habilitada, podrías iniciar el video del slide activo
      // Descomenta las siguientes líneas para habilitar la reproducción automática
      /*
            const activeSlide = this.querySelector('.carousel-item.active');
            if (activeSlide) {
                const videoContainer = activeSlide.querySelector('.video-container');
                if (videoContainer) {
                    setTimeout(() => toggleVideoPlay(videoContainer), 500);
                }
            }
            */
    });
  }
});
