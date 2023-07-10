import { burgers } from "../db/BurgerDB.js";
import { BadRequest } from "../utils/Errors.js";

class BurgersService {
    getBurgers() {
        return burgers
    }



    getBurgerById(burgerId) {
        const foundBurger = burgers.find(burger => burger.id == burgerId)

        if (!foundBurger) {
            throw new BadRequest(`${burgerId} was not a valid Id`)
        }

        return foundBurger

    }


    createBurger(burgerData) {
        burgerData.id = burgers.length + 1

        burgers.push(burgerData)

        return burgerData

    }

    updateBurger(burgerId, burgerData) {
        let ogBurger = this.getBurgerById(burgerId)
        ogBurger.name = burgerData.name || ogBurger.name
        ogBurger.price = burgerData.price || ogBurger.price
        ogBurger.description = burgerData.description || ogBurger.description

        return ogBurger
    }



    deleteBurger(burgerId) {
        const foundIndex = burgers.findIndex(burger => burger.id == burgerId)

        if (foundIndex == -1) {
            throw new BadRequest(`${burgerId} invalid ID`)
        }

        burgers.splice(foundIndex, 1)

    }
}










export const burgersServie = new BurgersService()

