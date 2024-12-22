// Member interface
import { Session } from "express-session";
import { MemberType, MemberStatus } from "../enums/member.enum";
import { ObjectId } from "mongoose";
import { Request } from "express";

// Member interface
export interface Member {
    _id: ObjectId;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberImage?: string;
    memberPoints: number;
    memberDesc?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Member input interface
export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberImage?: string;
    memberPoints?: number;
    memberDesc?: string;
}

// Login input interface
export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}

// Session interface
export interface AdminRequest extends Request {
    member: Member;
    session: Session & {member: Member};
}