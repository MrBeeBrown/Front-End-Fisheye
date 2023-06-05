function displayModal() {
    const modal = document.querySelector(".modal_container");
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "block";
    const main = document.querySelector("main");
    main.setAttribute("aria-hidden", "true");
    main.setAttribute("tab-index", "-1");
    const prenom = document.getElementById("prenom").focus();
}

function closeModal() {
    const main = document.querySelector("main");
    main.removeAttribute("aria-hidden");
    main.removeAttribute("tab-index");
    const modal = document.querySelector(".modal_container");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}

