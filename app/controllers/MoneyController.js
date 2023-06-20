import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneyService.js"
import { setHTML } from "../utils/Writer.js"



function _drawMoney() {
  const moneyTotal = AppState.money
  console.log(moneyTotal)
  setHTML('Money', moneyTotal.toFixed(2))
}


export class MoneyController {
  constructor() {
    console.log('Money test')
    _drawMoney()
    AppState.on('money', _drawMoney)
  }

  addMoney() {
    moneyService.addMoney()
  }
}