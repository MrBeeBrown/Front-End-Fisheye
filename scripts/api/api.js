let data = null;
//Récupération des infos du fichier photographer.json
export async function api() {
  if (!data) {
    console.log("fetch en cours...");
    data = await fetch("/data/photographers.json")
      .then(response => response.json())
      .catch(error => console.log(error));
    return data;
  } else {
    console.log("récupération des données stockées !");
    return data;
  }
};