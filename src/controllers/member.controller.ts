import {Request,Response} from "express"
import {T} from "../libs/types/common"

const memberController: T = {}
memberController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page");
    } catch (error) {
        console.log(error);
    }
}

memberController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page");
    } catch (error) {
        console.log(error);
    }
}

memberController.getSignup = (req: Request, res: Response) => {
    try {
        res.send("Signup Page");
    } catch (error) {
        console.log(error);
    }
}

export default memberController;