//Création de la galerie d'images
export const createLightbox = () => {
  const body = document.querySelector("body");
  const box = document.createElement("div");
  box.setAttribute("class", "lightBox_container");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-label", "LightBox");
  box.setAttribute("aria-describedby", "Galerie d'images");
  box.setAttribute("aria-hidden", "true");
  box.setAttribute("aria-modal", "true");
  box.style.display = "none";
  box.innerHTML = `
  <div class="lightBox_background" role="document">
    <div class="lightBox">
      <i class="fa-solid fa-chevron-left" title="previous image" tabindex="0"></i>
      <div class="lightBox_data"></div>
      <i class="fa-solid fa-chevron-right" title="next image" tabindex="0"></i>
      <i class="fa-solid fa-square-xmark close_lightBox" title="Close dialog" tabindex="0"></i>
    </div>
  </div>`
  body.appendChild(box);
}

export const openLightBox = () => {
  const main = document.querySelector("main");
  main.style.display = "none";
  const lightBox = document.querySelector(".lightBox_container");
  lightBox.style.display = "block";
  lightBox.setAttribute("aria-hidden", "false");

  //Icône de fermeture de la lightBox
  const close = document.querySelector(".close_lightBox");
  close.addEventListener("click", closeLightBox);
  close.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      closeLightBox();
    }
  })

  //Detection de la touche Escape
  const escapeKey = document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      closeLightBox();
    }
  });

  //Ajout eventListener pour media suivant
  const next = document.querySelector(".fa-chevron-right");
  next.addEventListener("click", nextImage);
  next.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      nextImage();
    }
  });

  //Detection de la touche fleche droite
  const nextKey = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "Enter") {
      nextImage();
    }
  });

  //Ajout eventListener pour media précédent
  const prev = document.querySelector(".fa-chevron-left");
  prev.addEventListener("click", prevImage);
  prev.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      prevImage();
    }
  });

  //Detection de la touche fleche gauche
  const prevKey = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "Enter") {
      prevImage();
    }
  });

  //Afficher média suivante
  function nextImage() {
    let media = [];
    media = document.querySelectorAll(".media_filter");
    for (let i = 0; i < media.length; i++) {
      if (!media[i].hasAttribute("hidden")) {
        media[i].toggleAttribute("hidden");
        i++;
        if (i == media.length) {
          i = 0
        }
        media[i].toggleAttribute("hidden");
      }
    }
  }

  //Afficher média précédente
  function prevImage() {
    let media = [];
    media = document.querySelectorAll(".media_filter");
    for (let i = 0; i < media.length; i++) {
      if (!media[i].hasAttribute("hidden")) {
        media[i].toggleAttribute("hidden");
        i--;
        if (i < 0) {
          i = media.length - 1;
        }
        media[i].toggleAttribute("hidden");
      }
    }
  }

  function closeLightBox() {
    const main = document.querySelector("main");
    main.style.display = "block";
    const lightBox = document.querySelector(".lightBox_container");
    lightBox.style.display = "none";
    lightBox.setAttribute("aria-hidden", "true");
    hideMedia();
  }


  const hideMedia = () => {
    const hideAllMedia = document.querySelectorAll(".media_filter");
    hideAllMedia.forEach((e) => {
      e.setAttribute("hidden", "");
    })
  }
}
