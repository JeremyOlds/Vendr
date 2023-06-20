
export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl

  }

  get SnacksTemplate() {
    return /*html*/`
    <div class="col-3 bg-dark p-3 text-white">
    <div>
    <img class="img-fluid"
      src="${this.imgUrl}"
      alt="Chips">
      </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="image-cover">
        <p>${this.name}</p>
        <p>$${this.price.toFixed(2)}</p>
      </div>
      <div>
        <button onclick="app.SnacksController.buySnack(${this.price})" class="btn btn-secondary">Buy</button>
      </div>
    </div>
  </div>
    `

  }

  get SnacksDisabledTemplate() {
    return /*html*/`  
    <div class="col-3 bg-dark p-3 text-white">
    <div class="image-cover">
    <img class="img-fluid"
      src="${this.imgUrl}"
      alt="Chips">
      </div>
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <p>${this.name}</p>
        <p>$${this.price.toFixed(2)}</p>
      </div>
      <div>
        <button onclick="app.SnacksController.buySnack(${this.price})" class="btn btn-secondary" disabled>Buy</button>
      </div>
    </div>
  </div>
    `

  }
}