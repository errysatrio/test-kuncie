export interface IClassDetailsData {
    id?: number;
    name?: string;
    mentors?: IMentorDetailsData[];
    description?: string;
}

export interface IMentorDetailsData {
    id: number;
    name: string;
    description: string;
}