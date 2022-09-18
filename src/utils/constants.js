export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const editPopup = document.querySelector('.popup_edit-profile');
export const addPopup = document.querySelector('.popup_add-card');
export const imagePopup = document.querySelector('.popup_image');
export const popupEditNameInput = document.querySelector('.popup__profile-name');
export const popupEditJobInput = document.querySelector('.popup__profile-job');
export const popupAddCardName = document.querySelector('.popup__card-name');
export const popupAddCardLink = document.querySelector('.popup__card-link');
export const editform = document.querySelector('.popup__edit-form');
export const addform = document.querySelector('.popup__add-form');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const cardsList = document.querySelector('.cards');
export const popups = Array.from(document.querySelectorAll('.popup'));
export const popupCaption = document.querySelector('.popup__caption');
export const popupCardImage = document.querySelector('.popup__card-image');