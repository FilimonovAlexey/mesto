export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const changeAvatarButton = document.querySelector('.profile__overlay');
export const editPopup = document.querySelector('.popup_edit-profile');
export const addPopup = document.querySelector('.popup_add-card');
export const imagePopup = document.querySelector('.popup_image');
export const popupEditNameInput = document.querySelector('.popup__profile-name');
export const popupEditJobInput = document.querySelector('.popup__profile-job');
export const popupAddCardName = document.querySelector('.popup__card-name');
export const popupAddCardLink = document.querySelector('.popup__card-link');
export const popupDeleteConfirm = document.querySelector('.popup_delete-confirm');
export const popupChangeAvatar = document.querySelector('.popup_change-avatar');
export const editform = document.querySelector('.popup__edit-form');
export const addform = document.querySelector('.popup__add-form');
export const avatarForm = document.querySelector('.popup__avatar-form');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const profileAvatar = document.querySelector('.profile__avatar-photo');
export const cardsList = document.querySelector('.cards');
export const popups = Array.from(document.querySelectorAll('.popup'));
export const popupCaption = document.querySelector('.popup__caption');
export const popupCardImage = document.querySelector('.popup__card-image');
export const config = {
    formSelector: '.popup__form',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save'
  };