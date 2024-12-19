import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import { HttpCode, Message } from "../libs/Errors";
import Errors from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";

// MemberService class
class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }


    /** SPA - MEMBER **/
    public async signup(input: MemberInput): Promise<Member> {
        // Password hashing
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

       try {
        const result = await this.memberModel.create(input);
        result.memberPassword = "";
        return result.toJSON();
       } catch (err) {
        console.log("Error Model Signup: ", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
       }
    }

    // Login process Define 
    public async login(input: LoginInput): Promise<Member> {
    // TODO: Member Status Check Later
        const member = await this.memberModel
            .findOne(
                {memberNick: input.memberNick}, //Filter
                { memberNick: 1, memberPassword: 1} //Projection
            )
            .exec();
        if(!member) {
            throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
        }
        const isMatch = await bcrypt.compare(
            input.memberPassword, 
            member.memberPassword
        );
        // const isMatch = input.memberPassword === member.memberPassword;
        if(!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).lean().exec();

    }

    /** BSSR - RESTAURANT **/
    // Signup process
    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({memberType: MemberType.RESTAURANT})
            .exec();
        if(exist) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }

        // Password hashing
        // console.log("Before: ", input.memberPassword);
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        // console.log("After: ", input.memberPassword);

       try {
        const result = await this.memberModel.create(input);
        result.memberPassword = "";

        return result;
       } catch (err) {
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
       }
    }

    // Login process Define 
    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                {memberNick: input.memberNick}, //Filter
                { memberNick: 1, memberPassword: 1} //Projection
            )
            .exec();
        if(!member) {
            throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
        }
        const isMatch = await bcrypt.compare(
            input.memberPassword, 
            member.memberPassword
        );
        // const isMatch = input.memberPassword === member.memberPassword;
        if(!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).exec();

    }
}

export default MemberService;







 //Classlardan instance olib DB malumot uzatish
    // const tempResult = new this.memberModel(input)
    // const result = await tempResult.save();