import {Request,Response} from "express"
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service"
import { LoginInput, MemberInput } from "../libs/types/member"
import { MemberType } from "../libs/enums/member.enum"

// BSSR
const restaurantController: T = {}
const memberService = new MemberService();

// Home page
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.send("Home Page");
    } catch (error) {
        console.log(error);
    }
}

// Signup page
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.send("Signup Page");
    } catch (error) {
        console.log(error);
    }
}   

// Login page
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.send("Login Page");
    } catch (error) {
        console.log(error);
    }
}

// Signup process 
restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('process Signup')
        console.log("body: ", req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const result = await memberService.processSignup(newMember);
        // TODO : Session Auth
        res.send(result);
    } catch (err) {
        console.log("Error Process Signup: ", err);
        res.send(err);
    }
}

    // Login process 
restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log('processLogin');

        const input: LoginInput = req.body,
        result = await memberService.processLogin(input);
        // TODO : Session Auth
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}


export default restaurantController;