export class Section {
  constructor({ items, renderer} , container) {
    this._renderer = renderer;
    this._container = container;
  }

  renderer(cards) {
    cards.forEach(card => {
      this._renderer(card)
    });
  }

  addItem(element) {
    this._container.append(element)
  }

  addNewItem(element) {
    this._container.prepend(element)
  }

}