import React from 'react'
import { PropsPizza } from '../@types/pizza';

interface propsType {
    pizzas: PropsPizza[];
}

export const GlobalStateContext = React.createContext({} as propsType);