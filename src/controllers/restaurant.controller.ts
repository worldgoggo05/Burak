import {Request,Response} from "express"
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service"
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member"
import { MemberType } from "../libs/enums/member.enum"
import Errors, { Message } from "../libs/Errors"

// BSSR
const restaurantController: T = {}
const memberService = new MemberService();

// Home page
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.render('home');
    } catch (error) {
        console.log(error);
    }
}

// Signup page
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.render("signup");
    } catch (error) {
        console.log(error);
        res.redirect("/admin");
    }
}   

// Login page
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.render("login");
    } catch (error) {
        console.log(error);
        res.redirect("/admin");
    }
}

// Signup process 
restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log('process Signup')
        console.log("body: ", req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const result = await memberService.processSignup(newMember);
        // TODO : Session Auth
        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });

    } catch (error) {
        console.log('Error Process Login: ', error);
        const message = error instanceof Errors ? error.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert('${message}'); window.location.replace('/admin/signup')</script>`);
    }
}

// Login process 
restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processLogin');

        const input: LoginInput = req.body,
        result = await memberService.processLogin(input);
        // TODO : Session Auth
        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });
    } catch (error) {
        console.log('Error Process Login: ', error);
        const message = error instanceof Errors ? error.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert('${message}'); window.location.replace('/admin/login')</script>`);
    }
}

// Logout process
restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("logout");
        req.session.destroy(function() {
            res.redirect("/admin");
        });
    } catch (error) {
        console.log(error);
        res.redirect("/admin");
    }
}

// Check Auth Session
restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession");
        if (req.session?.member) res.send(`<script>alert('Hi, ${req.session.member.memberNick}')</script>`);
        else res.send(`<script>alert('${Message.NOT_AUTHENTICATED}')</script>`);
    } catch (err) {
        console.log("Error, checkAuthSession:", err);
        res.send(err);
    }
}

export default restaurantController;