import { Key } from "react";

export interface PropsPizza {
    [x: string]: Key | null | undefined;
    img: any;
    namePizza: string;
    sauce?: string;
    minTime: number;
    maxTime: number;
    preco: number;
    amout: number
}