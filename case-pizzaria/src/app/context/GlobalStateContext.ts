import React from 'react'
import { PropsPizza } from '../@types/pizza';
import { PropsMenu } from '../@types/menu';

interface propsType {
    pizzas: PropsPizza[] | any[];
    menus: PropsMenu[];
    cartPizzas: PropsPizza[];
    setCartPizzas: React.Dispatch<any>;
    totalPrice: number;
    setItIsMade: React.Dispatch<React.SetStateAction<boolean>>;
    itIsMade: boolean;
}

export const GlobalStateContext = React.createContext({} as propsType);