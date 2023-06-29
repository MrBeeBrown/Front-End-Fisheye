export const createForm = (user) => {
  const body = document.querySelector("body");
  const formulaire = document.createElement("div");
  formulaire.setAttribute("class", "modal_container");
  formulaire.setAttribute("role", "dialog");
  formulaire.setAttribute("aria-label", "Formulaire");
  formulaire.setAttribute("aria-describedby", "Formulaire de contact");
  formulaire.setAttribute("aria-hidden", "true");
  formulaire.setAttribute("aria-modal", "true");
  formulaire.style.display = "none";
  formulaire.innerHTML = `
  <div class="modal" aria-hidden="true" aria-label="modal" aria-labelledby="message_modal" role="dialog" role="document">
      <header class="header_form">
        <h2>Contactez-moi</h2>
        <a><img src="assets/icons/close.svg" onclick="closeModal()" title="Close Contact Form" tabindex="1"></a>
        <p>${user.name}</p>
      </header>
      <form>
        <div class="formData" data-error="Veuillez entrer 2 caractères minimum et pas de chiffres.">
          <label for="prenom">Prénom</label>
          <input class="text-control" type="text" id="prenom" class="prenom" title="prenom" autofocus>
        </div>
        <div class="formData" data-error="Veuillez entrer 2 caractères minimum et pas de chiffres.">
          <label for="nom">Nom</label>
          <input class="text-control" type="text" id="nom" class="nom" title="nom">
        </div>
        <div class="formData" data-error="L'adresse mail saisie n'est pas correcte.">
          <label for="email">Email</label>
          <input class="text-control" type="text" id="email" class="email" title="email" autocomplete="off">
        </div>
        <div class="formData" data-error="Merci de renseigner votre message.">
          <label for="message">Votre message</label>
          <textarea class="text-control" id="message" class="message" title="message" name="message"
            rows="6"></textarea>
        </div>
        <button type="button" class="send_button">Envoyer</button>
      </form>
    </div>`
  body.appendChild(formulaire);

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

  //Selection des éléments focusable
  let focusableItems = [];
  const modal = document.querySelector(".modal");
  const input = modal.querySelectorAll("input");
  input.forEach(e => focusableItems.push(e));
  const textarea = modal.querySelector("textarea");
  focusableItems.push(textarea);
  const btn = modal.querySelector("button");
  focusableItems.push(btn);
  const closeBtn = modal.querySelector("img");
  focusableItems.push(closeBtn);

  //Detection Echap et tabulation
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      closeModal();
    }
    if (e.key === "Tab" && (formulaire.getAttribute("aria-hidden") == "false")) {
      focusInModal(e);
    }
    if (e.key === "Enter" && (document.activeElement === closeBtn)) {
      closeModal();
    }
  });

  const focusInModal = (e) => {
    e.preventDefault();
    let index = focusableItems.findIndex(f => f === modal.querySelector(`:focus`));
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
  };

  function validatePrenom() {
    const RegExPrenom = /[0-9|._]+/;
    if (getPrenom.value.trim().length < 2 || RegExPrenom.test(getPrenom.value)) {
      showError(getPrenom);
      validFirst = false;
    } else {
      hideError(getPrenom);
      validFirst = true;
    }
  };

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
    if (getMessage.value.trim().length == 0) {
      showError(getMessage);
      validMessage = false;
    } else {
      hideError(getMessage);
      validMessage = true;
    }
  };

  function validationSubmit() {
    if ((validFirst) && (validLast) && (validEmail) && (validMessage)) {
      messageModal(getPrenom.value, getNom.value, getMail.value, getMessage.value.trim());
      closeModal();
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

  const showError = (_check) => {
    _check.parentElement.setAttribute("data-error-visible", "true");
  };

  const hideError = (_check) => {
    _check.parentElement.setAttribute("data-error-visible", "false");
  };

  const messageModal = (prenom, nom, email, message) => {
    console.log(nom);
    console.log(prenom);
    console.log(email);
    console.log(message);
  }
}