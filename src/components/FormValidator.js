class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._form = form
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._setEventListenerInputs()
  }

  _setEventListenerInputs() {
    this._checkButtonValidity()
    this._form.addEventListener('reset', () => {
      this._disableButton()
    })
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkImputValidity(input)
        this._checkButtonValidity()
      })
    })
  }

  _checkImputValidity(input) {
    this._errorElement = this._form.querySelector(`.${input.id}-error`)
    if (input.validity.valid) {
      this._setInputValid(input)
    } else {
      this._setInputInvalid(input)
    }

  }

  _checkButtonValidity() {
    if (this._form.checkValidity()) {
      this._enableButton()
    } else {
      this._disableButton()
    }
  }

  _setInputValid(input) {
    this._errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass)
  }

  _setInputInvalid(input) {
    this._errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass)
  }

  _enableButton() {
    this._button.removeAttribute('disabled')
    this._button.classList.remove(this._inactiveButtonClass)
  }

  _disableButton() {
    this._button.setAttribute('disabled', '')
    this._button.classList.add(this._inactiveButtonClass)
  }

  resetErrors() {
    this._inputList.forEach((input) => {
      this._errorElement = this._form.querySelector(`.${input.id}-error`)
      this._setInputValid(input)
    })
  }
}

const config = {
  formSelector: '.popup__form',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save'
}



export { FormValidator, config }



