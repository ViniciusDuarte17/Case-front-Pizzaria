import React from 'react'
import { PropsPizza } from '../@types/pizza';
import { PropsMenu } from '../@types/menu';

interface propsType {
    pizzas: PropsPizza[] | any[];
    menus: PropsMenu[];
    cartPizzas: PropsPizza[];
    setCartPizzas: React.Dispatch<any>
    totalPrice: number
}

export const GlobalStateContext = React.createContext({} as propsType);