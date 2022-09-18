import { Popup } from './Popup.js'
export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup)
    this.popupCaption = this._popup.querySelector('.popup__caption')
    this.popupImage = this._popup.querySelector('.popup__card-image')
  }

  open(item) {
    super.open()
    this.popupCaption.textContent = item.name;
    this.popupImage.alt = item.name;
    this.popupImage.src = item.link;
  }
}


