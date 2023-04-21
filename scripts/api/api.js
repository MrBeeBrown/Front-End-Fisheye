let data = "";
//Récupération des infos du fichier photographer.json
export async function api() {
  if (!data) {
    data = await fetch("/data/photographers.json")
      .then(response => response.json())
      .catch(error => console.log(error));
    console.log("fetch en cours...");
    return data;
  } else {
    console.log("récupération des données stockées !");
    return data;
  }
};