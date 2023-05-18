let data = false;
//Récupération des infos du fichier photographer.json
export async function api() {
  if (!data) {
    data = await fetch("/data/photographers.json")
      .then(response => response.json())
      .catch(error => console.log(error));
    return data;
  } else {
    return data;
  }
};