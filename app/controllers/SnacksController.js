import { AppState } from "../AppState.js"
import { Snack } from "../models/Snacks.js"
import { snacksService } from "../services/SnacksService.js"
import { setHTML } from "../utils/Writer.js"

function _drawSnacks() {
  const Snacks = AppState.Snacks

  let stringOfSnacksHtml = ''

  Snacks.forEach(s => {
    if (AppState.money < s.price) {
      stringOfSnacksHtml += s.SnacksDisabledTemplate
    } else {
      stringOfSnacksHtml += s.SnacksTemplate
    }
  })

  setHTML('snackList', stringOfSnacksHtml)
}



export class SnacksController {
  constructor() {
    console.log('Snack Test')
    _drawSnacks()
    AppState.on('money', _drawSnacks)
  }


  buySnack(cost) {
    snacksService.buySnack(cost)
  }
}