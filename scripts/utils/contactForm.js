/* const modal_background = document.querySelector(".modal_background");
modal_background.addEventListener("click", closeModal); */

/*** Validation du prénom ***/
const getPrenom = document.querySelector("#prenom");
getPrenom.addEventListener("input", validatePrenom);

/*** Validation du nom ***/
const getNom = document.querySelector("#nom");
getNom.addEventListener("input", validateNom);

/*** Validation du mail ***/
const getMail = document.querySelector("#email");
getMail.addEventListener("input", validateMail);

/*** Validation du date de naissance ***/
const getMessage = document.querySelector("#message");
getMessage.addEventListener("input", validateMessage);

/*** Selection du bouton de validation ***/
const validateBtn = document.querySelector(".send_button");
validateBtn.addEventListener("click", validationSubmit);

/*** Selection des entrées du formulaire ***/
const formData = document.querySelectorAll(".formData");

/*** Variables utilisées pour vérifier l'activation du bouton d'envoi du formulaire***/
let validFirst = false;
let validLast = false;
let validEmail = false;
let validMessage = false;

//detect Escape key press
const escapeKey = document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

function validatePrenom() {
    const RegExPrenom = /[0-9|._]+/;
    if (getPrenom.value.trim().length < 2 || RegExPrenom.test(getPrenom.value)) {
        showError(getPrenom);
        validFirst = false;
    } else {
        hideError(getPrenom);
        validFirst = true;
    }
}

function validateNom() {
    const RegExNom = /[0-9|._]+/;
    if (getNom.value.trim().length < 2 || RegExNom.test(getNom.value)) {
        showError(getNom);
        validLast = false;
    } else {
        hideError(getNom);
        validLast = true;
    }
};

function validateMail() {
    const RegExMail = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
    showError(getMail);
    validEmail = false;
    if (RegExMail.test(getMail.value.trim())) {
        hideError(getMail);
        validEmail = true;
    }
};

function validateMessage() {
    showError(getMessage);
    validMessage = false;
    if (getMessage.value.length > 0) {
        hideError(getMessage);
        validMessage = true;
    }
};

function validationSubmit() {
    if ((validFirst) && (validLast) && (validEmail) && (validMessage)) {
        submitFormData();
    } else {
        for (let i = 0; i < formData.length; i++) {
            let getHiddenError = "";
            getHiddenError = formData[i].getAttribute("data-error-visible");
            if (getHiddenError == null) {
                formData[i].setAttribute("data-error-visible", "true");
            }
        }
    }
};

function submitFormData() {
    console.log("Nom : " + getPrenom.value);
    console.log("Prénom : " + getNom.value);
    console.log("Email : " + getMail.value);
    console.log("Message : " + getMessage.value);
    closeModal();
}

function showError(_check) {
    _check.parentElement.setAttribute("data-error-visible", "true");
};

function hideError(_check) {
    _check.parentElement.setAttribute("data-error-visible", "false");
};

function displayModal() {
    const modal = document.querySelector(".modal_container");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.querySelector(".modal_container");
    modal.style.display = "none";
}

