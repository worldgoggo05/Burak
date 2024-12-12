import {Request,Response} from "express"
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service"
import { MemberInput } from "../libs/types/member"
import { MemberType } from "../libs/enums/member.enum"

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

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('process Signup')
        console.log("body: ", req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch (err) {
        console.log("Error Process Signup: ", err);
        res.send(err);
    }
}

export default restaurantController;