import { AppState } from "../AppState.js"


class MoneyService {
  addMoney() {
    AppState.money += .5
    console.log(AppState.money)
  }


}

export const moneyService = new MoneyService()