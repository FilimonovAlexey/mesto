import {
  initialCards,
  cardsList,
  editPopup,
  addPopup,
  imagePopup,
  editButton,
  addButton,
  profileName,
  profileJob,
  popupEditNameInput,
  popupEditJobInput
} from '../utils/constants.js'

import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import { FormValidator, config } from '../components/FormValidator.js'
import './index.css'

const popopImageData = new PopupWithImage(imagePopup)

const popupEditForm = new PopupWithForm({
  popup: editPopup,
  handleSubmitForm: (formData) => {
    userInfo.setUserInfo(formData)
  }
})

const popupAddForm = new PopupWithForm({
  popup: addPopup,
  handleSubmitForm: (formData) => {
    cards.addItem(createCard(formData));
  }
})

const userInfo = new UserInfo(profileName, profileJob)

popopImageData.setEventListeners()
popupEditForm.setEventListeners()
popupAddForm.setEventListeners()



function createCard(item) {
  const card = new Card({
    data: item,
    templateSelector: '.cards__template',
    handleCardClick: () => {
      popopImageData.open(item)
    }
  });
  const cardElement = card.generateCard()
  return cardElement
}

const cards = new Section({
  items: initialCards,
  renderer: (item) => {
    cards.addItem(createCard(item));
  }
}, cardsList)

cards.renderer();


editButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo()
  popupEditForm.open()
  popupEditNameInput.value = name
  popupEditJobInput.value = job
});

addButton.addEventListener('click', () => {
  popupAddForm.open()
});


const formValidators = {}
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);
