export class Card {
  constructor({ data, templateSelector, handleCardClick }) {
    this._cardSelector = templateSelector;
    this._title = data.name;
    this._image = data.link;
    this.handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__image')
    this._cardTitile = this._element.querySelector('.cards__title')
    this._cardLike = this._element.querySelector('.cards__like')
    this._cardBasket = this._element.querySelector('.cards__basket')
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true)
    return cardElement
  }

  _toggleLike(event) {
    event.target.classList.toggle('cards__like_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._cardTitile.textContent = this._title;
    this._setEventListeners()
    return this._element;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', this._toggleLike)
    this._cardBasket.addEventListener('click', () => { this._deleteCard() })
    this._cardImage.addEventListener('click', () => { this.handleCardClick() })
  }
}
