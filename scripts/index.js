const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
let popupNameInput = document.getElementById('popup__profile-name');
let popupJobInput = document.getElementById('popup__profile-job');
let formElement = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function openPopup() {
  popup.classList.add('popup_opened');
  popupNameInput.value = profileName.textContent;
  popupJobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileJob.textContent = popupJobInput.value;
  closePopup()
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 
