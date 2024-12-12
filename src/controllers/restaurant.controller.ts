import {Request,Response} from "express"
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service"

const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.send("Home Page");
    } catch (error) {
        console.log(error);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.send("Login Page");
    } catch (error) {
        console.log(error);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.send("Signup Page");
    } catch (error) {
        console.log(error);
    }
}

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('processLogin');
        res.send("Login Process Page");
    } catch (error) {
        console.log(error);
    }
}

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log('process Signup');
        res.send("Signup Process Page");
    } catch (error) {
        console.log(error);
    }
}

export default restaurantController;