import { IClassCardSuccessResponse } from "./IClassCard";
import { IClassDetailsData } from "./IClassDetails";
import { ICreateRegisteredUserSuccessResponse } from "./ICreateRegisterUser";

export interface IServerError {
    code: number,
    message: string,
}

export interface ICreateRegisterUserResponse {
    data?: ICreateRegisteredUserSuccessResponse;
    error?: IServerError;
}

export interface IClassCardResponse {
    data?: IClassCardSuccessResponse;
    error?: IServerError;
}

export interface IClassDetailsResponse {
    data?: IClassDetailsData;
    error?: IServerError;
}
