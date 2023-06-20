import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"


class SnacksService {
  buySnack(cost) {

    if (AppState.money < cost) {
      Pop.error('You Need More Money!')
      return
    } else {
      AppState.money -= cost
    }

  }


}


export const snacksService = new SnacksService()