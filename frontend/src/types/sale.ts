import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type Salepage = {
    content?: Sale [];
    totalPages: number;
    totalElements?: number;
    last: boolean;
    numberOfElements: number;
    first: boolean;
    size?: number;
    number: number;
    empty?: boolean;
}


export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
        visited: number;
        deals: number;
        sellerName: string;
}