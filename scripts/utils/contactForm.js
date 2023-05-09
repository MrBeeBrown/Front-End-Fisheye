function displayModal() {
    const modal = document.querySelector(".modal_container");
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.querySelector(".modal_container");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}

