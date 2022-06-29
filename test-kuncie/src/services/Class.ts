import axios, { AxiosError } from "axios";
import { ICreateRegisterUserResponse, IServerError, } from "../@types/APIResponse";
import { ICreateRegisterUserPayload } from "../@types/ICreateRegisterUser";
import { availableClassesUrl, joinClassUrl, learningClassesUrl } from "../constants/apis";


export const getAvailableClasses = async () => {
    try {
        const result = await axios.get(availableClassesUrl);
        return result.data;
    } catch (e) {
        console.error(e)
        return (e as AxiosError).response?.data as IServerError;
    }
};

export const getLearningClassDetails = async (id: string | string[]) => {
    try {
        const config = {
            params: {
                id: id,
            }
        };
        const result = await axios.get(learningClassesUrl, config);
        return result.data;
    } catch (e) {
        console.error(e)
        return (e as AxiosError).response?.data as IServerError;
    }
};

export const createRegisteredUser = async (payload: ICreateRegisterUserPayload) => {
    try {
        const config = {
            data: payload
        }
        const result = await axios.post<ICreateRegisterUserResponse>(joinClassUrl, config);
        return result.data;
    } catch (e) {
        console.error(e)
        return (e as AxiosError).response?.data as IServerError;
    }
};