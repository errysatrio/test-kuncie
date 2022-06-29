export interface ICreateRegisteredUserSuccessResponse {
    message: string;
}

export interface ICreateRegisterUserPayload {
    attendeeFullName: string;
    attendeeEmail: string;
    classId: number;
}
