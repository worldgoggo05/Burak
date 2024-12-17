import { MemberType, MemberStatus } from "../enums/member.enum";
import { ObjectId } from "mongoose";

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

export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}