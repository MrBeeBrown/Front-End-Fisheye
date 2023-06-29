export const showPhotographerInfo = (photographer) => {
  const picture = `assets/photographers/${photographer.portrait}`;
  const header_infos = document.querySelector('.photograph-infos');
  header_infos.innerHTML = `
    <h1>${photographer.name}</h1>
    <h2>${photographer.city}</h2>
    <p class="tagline">${photographer.tagline}</p>
    `
  const header_photo = document.querySelector('.photograph-photo');
  header_photo.innerHTML = `
    <img src="${picture}" alt="${photographer.name}" title="${photographer.name}">
    `
}