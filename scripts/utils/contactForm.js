/* const modal_background = document.querySelector(".modal_background");
modal_background.addEventListener("click", closeModal); */

//detect Escape key press
const escapeKey = document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        closeModal();
    }
});

function displayModal() {
    const modal = document.querySelector(".modal_container");
    modal.style.display = "block";
    /* const main = document.getElementById("main");
    main.style.display = "none"; */
}

function closeModal() {
    const modal = document.querySelector(".modal_container");
    modal.style.display = "none";
    /* const main = document.getElementById("main");
    main.style.display = "block"; */
}

