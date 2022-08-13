
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEditButtonClose = document.querySelector('.popup__edit-button-close');
const popupAddButtonClose = document.querySelector('.popup__add-button-close');
const popupImageButtonClose = document.querySelector('.popup__image-button-close');
const editPopup = document.querySelector('.popup_edit-profile');
const addPopup = document.querySelector('.popup_add-card');
const imagePopup = document.querySelector('.popup_image');
const popupEditNameInput = document.querySelector('.popup__profile-name');
const popupEditJobInput = document.querySelector('.popup__profile-job');
const popupAddCardName = document.querySelector('.popup__card-name');
const popupAddCardLink = document.querySelector('.popup__card-link');
const editform = document.querySelector('.popup__edit-form');
const addform = document.querySelector('.popup__add-form');
const linkImage = document.querySelector('.popup__card-image');
const nameImage = document.querySelector('.popup__caption');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.cards__template').content;
const cardTitle = document.querySelector('.cards__title')
const popups = Array.from(document.querySelectorAll('.popup'));

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function fillProfileData() {
  popupEditNameInput.value = profileName.textContent;
  popupEditJobInput.value = profileJob.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditNameInput.value;
  profileJob.textContent = popupEditJobInput.value;
  closePopup(editPopup);
}

function handleProfileFormAdd(evt) {
  evt.preventDefault();
  addCard(cardsList, createCard(popupAddCardName.value, popupAddCardLink.value));
  closePopup(addPopup);
  evt.target.reset();
}

function addCard(container, element) {
  container.prepend(element);
}

function addInfoImage(name, link) {
  nameImage.textContent = name;
  nameImage.alt = name;
  linkImage.src = link;
}

function createCard(name, link) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.cards__image');
  const cardTitle = card.querySelector('.cards__title');
  const cardLike = card.querySelector('.cards__like');
  const cardBasket = card.querySelector('.cards__basket');
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardBasket.addEventListener('click', deleteCard);
  cardLike.addEventListener('click', toggleateLike);
  cardImage.addEventListener('click', () => {
    addInfoImage(name, link),
      openPopup(imagePopup)
  });
  return card;
}

function toggleateLike(event) {
  event.target.classList.toggle('cards__like_active');
}

function deleteCard(event) {
  event.target.closest('.cards__item').remove();
}


editButton.addEventListener('click', () => {
  openPopup(editPopup),
  fillProfileData()
});

addButton.addEventListener('click', () => {
  openPopup(addPopup)
});

popupEditButtonClose.addEventListener('click', () => {
  closePopup(editPopup)
})

popupAddButtonClose.addEventListener('click', () => {
  closePopup(addPopup)
})

popupImageButtonClose.addEventListener('click', () => {
  closePopup(imagePopup)
})

editform.addEventListener('submit', handleProfileFormSubmit);
addform.addEventListener('submit', handleProfileFormAdd);


initialCards.forEach((data) => {
  addCard(cardsList, createCard(data.name, data.link))
});

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