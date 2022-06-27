// Generated by https://quicktype.io

export interface LoanPayload {
    code:    string;
    student: string;
    book:    string;
    start:   string;
    end:     string;
    status:  boolean;
}


// Generated by https://quicktype.io

// Generated by https://quicktype.io

export interface LoanResponse {
    _id:     string;
    code:    string;
    student: Student;
    book:    Book;
    start:   string;
    end:     string;
    status:  boolean;
    __v:     number;
}

export interface Book {
    _id:         string;
    isbn:        string;
    name:        string;
    edition:     string;
    observation: string;
    author:      Author;
    category:    Author;
    editorial:   Author;
    __v:         number;
}

export interface Author {
    _id:          string;
    name:         string;
    gender?:      string;
    __v:          number;
    description?: string;
}

export interface Student {
    _id:            string;
    identification: string;
    name:           string;
    address:        string;
    phone:          string;
    __v:            number;
}

// Generated by https://quicktype.io

export interface ReturnsPayload {
    code:    string;
    date:    string;
    book:    string;
    student: string;
}


// Generated by https://quicktype.io

export interface ReturnsResponse {
    _id:     string;
    code:    string;
    date:    string;
    book:    Book;
    student: Student;
    __v:     number;
}

export interface Book {
    _id:         string;
    isbn:        string;
    name:        string;
    edition:     string;
    observation: string;
    author:      Author;
    category:    Author;
    editorial:   Author;
    __v:         number;
}

export interface Author {
    _id:          string;
    name:         string;
    gender?:      string;
    __v:          number;
    description?: string;
}

export interface Student {
    _id:            string;
    identification: string;
    name:           string;
    address:        string;
    phone:          string;
    __v:            number;
}
