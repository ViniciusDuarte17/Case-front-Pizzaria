import React from 'react'
import { PropsPizza } from '../@types/pizza';
import { PropsMenu } from '../@types/menu';

interface propsType {
    pizzas: PropsPizza[] | any[];
    menus: PropsMenu[];
    cartPizzas: PropsPizza[];
    setCartPizzas: React.Dispatch<any>
}

export const GlobalStateContext = React.createContext({} as propsType);