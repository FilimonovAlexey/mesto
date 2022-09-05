import { initialCards } from './initial-cards.js'
import { Card } from './Card.js'
import { FormValidator, config, } from './FormValidator.js'

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_edit-profile');
const addPopup = document.querySelector('.popup_add-card');
const imagePopup = document.querySelector('.popup_image');
const popupEditNameInput = document.querySelector('.popup__profile-name');
const popupEditJobInput = document.querySelector('.popup__profile-job');
const popupAddCardName = document.querySelector('.popup__card-name');
const popupAddCardLink = document.querySelector('.popup__card-link');
const editform = document.querySelector('.popup__edit-form');
const addform = document.querySelector('.popup__add-form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardsList = document.querySelector('.cards');
const popups = Array.from(document.querySelectorAll('.popup'));
const popupCaption = document.querySelector('.popup__caption');
const popupCardImage = document.querySelector('.popup__card-image');
const forms = Array.from(document.querySelectorAll('.popup__form'))

function createNewCard() {
  const newData = {
    name: popupAddCardName.value,
    link: popupAddCardLink.value
  }
  addCard(newData, cardsList, '.cards__template')
}

const renderElements = () => {
  initialCards.forEach((data) => {
    addCard(data, cardsList, '.cards__template')
  });
};

function addCard(data, container, cardSelector) {
  const cardElement = new Card(data, cardSelector, showImage).generateCard()
  container.prepend(cardElement);
}


function showImage(name, link) {
  popupCaption.textContent = name;
  popupCardImage.alt = name;
  popupCardImage.src = link;
  openPopup(imagePopup)
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc)
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupCloseEscape = document.querySelector('.popup_opened')
    closePopup(popupCloseEscape)
  }
}

function addProfileData() {
  popupEditNameInput.value = profileName.textContent;
  popupEditJobInput.value = profileJob.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditNameInput.value;
  profileJob.textContent = popupEditJobInput.value;
  closePopup(editPopup);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  createNewCard();
  addform.reset();
  closePopup(addPopup);
}

editButton.addEventListener('click', () => {
  openPopup(editPopup),
    addProfileData()
});

addButton.addEventListener('click', () => {
  openPopup(addPopup)
});


editform.addEventListener('submit', handleProfileFormSubmit);
addform.addEventListener('submit', handleAddFormSubmit);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__icon')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
  })
})

const editProfileValidator = new FormValidator(config, editform)
const addCardValidator = new FormValidator(config, addform)
editProfileValidator.enableValidation()
addCardValidator.enableValidation()
renderElements()