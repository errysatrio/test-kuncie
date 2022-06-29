export interface IErrorResponse {
    code: number;
    message: string
}

export const errorHandler = (e: IErrorResponse) => {
    const { code, message } = e;
    return {
        code,
        message
    }
}