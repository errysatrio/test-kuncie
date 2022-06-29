export const mockSuccessGetAllClasses = {
    items: [
        {
            id: 1,
            name: "Belajar Javascript Dasar"
        },
        {
            id: 2,
            name: "Belajar CSS Dasar"
        }
    ]
}

export const mockErrorGetAllClasses = {
    code: 40168402,
    message: "mollit officia magna anim"
}

export const mockSuccessGetOneClassDetails = {
    id: 1,
    name: "Belajar Javascript Dasar",
    mentors: [
        {
            id: 1,
            name: "Andi",
            description: "Engineer Company 1"
        },
        {
            id: 2,
            name: "Budi",
            description: "Engineer Company 2"
        }
    ],
    description: "Belajar Javascript Dasar bersama Andi dan Budi"
};

export const mocErrorGetOneClassDetails = {
    code: 404,
    message: "Class not found"
}

export const mockSuccessCreateResgiteredUser = {
    message: "You are successfully registered"
}

export const mockErrorCreateRegisteredUser = {
    code: 400,
    message: "Could not join"
}