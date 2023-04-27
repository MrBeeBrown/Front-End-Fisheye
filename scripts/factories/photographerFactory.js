export function photographerInfo(photographers, id) {

  //Sélection du photographe en fonction de l'id de l'URL
  photographers.forEach((photographer) => {
    if (photographer.id == id) {
      printInfos(photographer);
    }
  })

  function printInfos(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    const header_infos = document.querySelector('.photograph-infos');
    header_infos.innerHTML = `
    <h2>${name}</h2>
    <h3>${city}</h3>
    <p class="tagline">${tagline}</p>
    `
    const header_photo = document.querySelector('.photograph-photo');
    header_photo.innerHTML = `
    <img src="${picture}" alt="Photo of ${name}">
    `
  }
}