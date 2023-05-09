export function createForm(user) {
  const body = document.querySelector("body");
  const formulaire = document.createElement("div");
  formulaire.setAttribute("class", "modal_container");
  formulaire.setAttribute("role", "dialog");
  formulaire.setAttribute("aria-labelledby", "Formulaire");
  formulaire.setAttribute("aria-describedby", "Formulaire de contact");
  formulaire.setAttribute("aria-hidden", "true");
  formulaire.setAttribute("aria-modal", "true");
  formulaire.setAttribute("tabindex", "-1");
  formulaire.innerHTML = `
  <div class="modal" aria-hidden="true" aria-label="modal" aria-labelledby="message_modal" role="dialog" role="document">
      <header class="header_form">
        <h2>Contactez-moi</h2>
        <img src="assets/icons/close.svg" onclick="closeModal()" title="Fermer">
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
          <input class="text-control" type="text" id="email" class="email" title="email">
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
      messageModal(getPrenom.value, getNom.value, getMail.value, getMessage.value);
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

  function showError(_check) {
    _check.parentElement.setAttribute("data-error-visible", "true");
  };

  function hideError(_check) {
    _check.parentElement.setAttribute("data-error-visible", "false");
  };

  function messageModal(prenom, nom, email, message) {
    const body = document.querySelector("body");
    const messageBox = document.createElement("div");
    messageBox.setAttribute("class", "message_modal_container");
    messageBox.setAttribute("role", "dialog");
    messageBox.setAttribute("aria-labelledby", "Message");
    messageBox.setAttribute("aria-describedby", "Message");
    messageBox.setAttribute("aria-hidden", "false");
    messageBox.setAttribute("aria-modal", "true");
    messageBox.setAttribute("tabindex", "-1");
    messageBox.innerHTML = `
    <div class="message_modal" aria-hidden="true" aria-labelledby="message_modal" role="dialog" role="document">
        <header class="message_modal_header" id="message_modal_header">
          <h2>Votre message à bien été réceptionné ${nom} - ${prenom}</h2>
        </header>
        <div class="user_infos">
          <p id="user_email">Votre adresse email : ${email}</p>
          <p id="user_message">Votre message : ${message}</p>
        </div>
        <button id="close_message_modal" aria-label="close message modal">Fermer</button>
    </div>`
    body.appendChild(messageBox);

    const closeMessageModalbtn = document.querySelector("#close_message_modal");
    closeMessageModalbtn.addEventListener("click", () => {
      messageBox.setAttribute("aria-hidden", "false");
      messageBox.style.display = "none";
    });

    const modal = document.querySelector(".message_modal_container");
    modal.style.display = "block";
  }

}

