//Récupération de l'id du photographe via l'URL
const Id = new URL(location.href).searchParams.get("id");

//Récupération des infos du fichier photographer.json
async function getPhotographers() {
  let GetData = await fetch("/data/photographers.json")
    .then(response => response.json())
    .catch(error => console.log(error));
  return GetData;
}

//Récupération des infos du photographer
async function getUserData(UserId) {
  const { photographers } = await getPhotographers();
  photographers.forEach((photographer) => {
    if (photographer.id == UserId) {
      photographerData(photographer);
    }
  });
};

function photographerData(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserInfos() {
    const header = document.querySelector('photograph-header');
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Photo of ${name}`);
    img.setAttribute("aria-label", `Photo of ${name}`);
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    const TagLine = document.createElement("p");
    TagLine.textContent = tagline;
    TagLine.classList.add("tagline");
    header.appendChild(h2);
    header.appendChild(h3);
    header.appendChild(TagLine);
    return (header);
  }
  return { name, picture, getUserInfos }
}

getUserData(Id);