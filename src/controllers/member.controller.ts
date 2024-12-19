import {Request,Response} from "express"
import {T} from "../libs/types/common"
import { Member, MemberInput } from "../libs/types/member";
import { LoginInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";
//React
const memberController: T = {}

const memberService = new MemberService();


// Signup process 
memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log('signup')
        const input: MemberInput = req.body,
        result = await memberService.signup(input);
        // TODO: Token Auth

        res.json({member: result});
    } catch (err) {
        console.log("Error Signup: ", err);
        if(err instanceof Errors) {
            res.status(err.code).json({err});
        } else {
            res.status(Errors.standard.code).json({error: Errors.standard.message});
        }
    }
}
        
// Login process 
memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('login');
        const input: LoginInput = req.body,
        result : Member = await memberService.login(input);
        // TODO: Token

        res.json({member: result});
    } catch (err) {
        console.log("Error Login: ", err);
        if(err instanceof Errors) {
            res.status(err.code).json({err});
        } else {
            res.status(Errors.standard.code).json({error: Errors.standard.message});
        }
    }
}


export default memberController;