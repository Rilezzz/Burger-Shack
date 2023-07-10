import { burgersServie } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.createBurger)
            .put('/:burgerId', this.updateBurger)
            .delete('/:burgerId', this.deleteBurger)
    }

    async getBurgers(req, res, next) {
        try {
            const burgers = await burgersServie.getBurgers()
            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getBurgerById(req, res, next) {
        try {
            const burgerId = req.params.burgerId
            const burger = await burgersServie.getBurgerById(burgerId)

            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next) {
        try {
            const burgerData = req.body

            const burger = await burgersServie.createBurger(burgerData)

            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async updateBurger(req, res, next) {
        try {
            const burgerId = req.params.burgerId
            const burgerData = req.body
            const updatedBurger = await burgersServie.updateBurger(burgerId, burgerData)
            res.send(updatedBurger)
        } catch (error) {
            next(error)
        }
    }

    async deleteBurger(req, res, next) {
        try {
            const burgerId = req.params.burgerId

            await burgersServie.deleteBurger(burgerId)

            res.send('Burger was deleted')

        } catch (error) {
            next(error)
        }
    }

}