//Récupération de l'id du photographe via l'URL
const Id = new URL(location.href).searchParams.get("id");

//Récupération des infos du fichier photographer.json
async function getPhotographers() {
  let GetData = await fetch("/data/photographers.json")
    .then(response => response.json())
    .catch(error => console.log(error));
  return GetData;
}

//Récupération des infos du photographe
async function getUserData(UserId) {
  const { photographers } = await getPhotographers();
  photographers.forEach((photographer) => {
    if (photographer.id == UserId) {
      photographerData(photographer);
    }
  });
};

//Récupération des images du photographe
async function getUserPhotos(UserId) {
  let UserPhotos = [];
  const { media } = await getPhotographers();
  media.forEach((photos) => {
    if (photos.photographerId == UserId) {
      UserPhotos.push(photos);
    }
  });
  photographerPhotos(UserPhotos);
};

//Affichage des infos du photographe
function photographerData(data) {
  const { name, portrait, id, city, country, tagline } = data;

  const picture = `assets/photographers/${portrait}`;
  const header_infos = document.querySelector('.photograph-infos');
  const header_photo = document.querySelector('.photograph-photo');
  const img = document.createElement('img');
  const photographer = document.createElement("p");
  const header_form = document.querySelector(".header_form");
  photographer.setAttribute("class", "photographer");
  photographer.textContent = name;
  header_form.appendChild(photographer);
  header_photo.append(img);
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
  header_infos.appendChild(h2);
  header_infos.appendChild(h3);
  header_infos.appendChild(TagLine);
}

//Affichage des médias du photographe
function photographerPhotos(data) {
  const { date, id, image, likes, photographerId, price, title, video } = data;

  //Création des sections HTML
  const main = document.querySelector('#main');
  const filter = document.createElement('div');
  const sortby = document.createElement('p');
  const select = document.createElement("select");
  const data_popularity = document.createElement("option");
  const data_title = document.createElement("option");
  const data_date = document.createElement("option");
  const div_content = document.createElement("div");
  /*   const like_info = document.createElement("div");
    const price_info = document.createElement("div"); */
  const media_path = "/assets/images/";
  let img;
  let videos;
  let videos_src;
  let div_media;
  let div_header;
  let header_title;
  let header_like;
  let heart;
  /*   let price_like_data; */

  //Ajout de contenu dans les sections HTML
  div_content.setAttribute("class", "content");
  /*   like_info.setAttribute("class", "likes");
    price_info.setAttribute("class", "price"); */
  filter.setAttribute("class", "filter");
  sortby.textContent = "Trier par :"
  data_popularity.textContent = "Popularité";
  data_date.textContent = "Date";
  data_title.textContent = "Titre";
  select.appendChild(data_popularity);
  select.appendChild(data_date);
  select.appendChild(data_title);
  filter.appendChild(sortby);
  filter.appendChild(select);
  /*   price_like_data = document.createElement("div");
    price_like_data.setAttribute("class", "like_price");
    like_info.appendChild() */

  //Affichage du contenu dans le main
  main.appendChild(filter);

  for (let i = 0; i < data.length; i++) {
    if (data[i].image) {
      div_media = document.createElement("div");
      div_media.setAttribute("class", "media");
      div_header = document.createElement("div");
      div_header.setAttribute("class", "media_infos");
      header_title = document.createElement("div");
      header_title.setAttribute("class", "header_title");
      header_title.textContent = data[i].title;
      header_like = document.createElement("div");
      header_like.setAttribute("class", "header_like");
      heart = document.createElement("i");
      heart.setAttribute("class", "heart");
      heart.setAttribute("class", "fa-sharp fa-solid fa-heart")
      header_like.textContent = data[i].likes;
      header_like.appendChild(heart);
      img = document.createElement("img");
      img.setAttribute("src", media_path + data[i].image);
      img.setAttribute("alt", data[i].title);
      div_media.appendChild(img);
      div_header.appendChild(header_title);
      div_header.appendChild(header_like);
      div_media.appendChild(img);
      div_media.appendChild(div_header);
      div_content.appendChild(div_media);
      main.appendChild(div_content);
    } else {
      div_media = document.createElement("div");
      div_media.setAttribute("class", "media");
      div_header = document.createElement("div");
      div_header.setAttribute("class", "media_infos");
      header_title = document.createElement("div");
      header_title.setAttribute("class", "header_title");
      header_title.textContent = data[i].title;
      header_like = document.createElement("div");
      header_like.setAttribute("class", "header_like");
      heart = document.createElement("i");
      heart.setAttribute("class", "heart");
      heart.setAttribute("class", "fa-sharp fa-solid fa-heart")
      header_like.textContent = data[i].likes;
      header_like.appendChild(heart);
      videos = document.createElement("video");
      videos.setAttribute("controls", "");
      videos_src = document.createElement("source");
      videos_src.setAttribute("src", media_path + data[i].video);
      videos_src.setAttribute("type", "video/mp4");
      videos.appendChild(videos_src);
      div_media.appendChild(videos);
      div_header.appendChild(header_title);
      div_header.appendChild(header_like);
      div_media.appendChild(videos);
      div_media.appendChild(div_header);
      div_content.appendChild(div_media);
      main.appendChild(div_content);
    }
  };
}

getUserData(Id);
getUserPhotos(Id);