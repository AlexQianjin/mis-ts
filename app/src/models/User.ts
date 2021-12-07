interface User {
    name: string;
    avatar: string;
    gender: Gender;
    cellPhone: Number;
}

enum Gender {
    Unknown = 0,
    Male = 1,
    Female = 2
}

export type { User };
