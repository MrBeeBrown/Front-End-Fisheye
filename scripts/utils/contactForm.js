function displayModal() {
    const modal = document.querySelector(".modal_container");
    modal.setAttribute("aria-hidden", "false");
    const main = document.querySelector("main");
    main.setAttribute("aria-hidden", "true");
    modal.style.display = "block";
}

function closeModal() {
    const main = document.querySelector("main");
    main.setAttribute("aria-hidden", "false");
    const modal = document.querySelector(".modal_container");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}

