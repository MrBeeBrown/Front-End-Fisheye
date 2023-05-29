async function getPhotographers() {
    let GetData = await fetch("/data/photographers.json")
        .then(response => response.json())
        .catch(error => console.log(error));
    return GetData;
}

function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}


init();

//Selection des éléments focusable
let focusableItems = [];
const body = document.querySelector("body");
const logo = body.querySelector(".logo");
focusableItems.push(logo);
const article = body.querySelectorAll(".article");
article.forEach(e => focusableItems.push(e));

//Detection Echap et tabulation
window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        focusInIndex(e);
    }
});

function focusInIndex(e) {
    let index = focusableItems.findIndex(f => f === body.querySelector(`:focus`));
    if (e.shiftKey === true) {
        index--;
    } else {
        index++;
    }
    if (index >= focusableItems.length) {
        index = 0;
    }
    if (index < 0) {
        index = focusableItems.length - 1;
    }
    focusableItems[index].focus();
}