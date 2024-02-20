import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import fatia from "@/app/icons/fatia.svg";
import sandwich from "@/app/icons/sandwich.svg";
import frenchFried from "@/app/icons/french_fried.svg";
import pack from "@/app/icons/pack.svg";
import pepperoniPizza from "@/app/icons/Pepperoni-Pizza 1.svg"
import toopPizza from "@/app/icons/toppng 2.svg";
import { PropsPizza } from "../@types/pizza";

export const GlobalState = (props: any) => {
  const [cartPizzas, setCartPizzas] = useState<PropsPizza | any>([]);
  const [itIsMade, setItIsMade] = useState(false);
 
  const pizzas = [
    {
      id: 1,
      img: pepperoniPizza,
      minTime: 8,
      maxTime: 12,
      namePizza: "Pizza de Pepperoni",
      sauce: "molho de tomate caseiro",
      preco: 15,
    },
    {
      id: 2,
      img: toopPizza,
      minTime: 14,
      maxTime: 22,
      namePizza: "Pizza de Queijo",
      sauce: "molho barbecue",
      preco: 17,
    },
    {
      id: 3,
      img: pepperoniPizza,
      minTime: 13,
      maxTime: 20,
      namePizza: "Pizza de Frango",
      sauce: "molho de alho",
      preco: 16,
    },
    {
      id: 4,
      img: toopPizza,
      minTime: 15,
      maxTime: 24,
      namePizza: "Pizza de Calabresa",
      sauce: "molho pesto",
      preco: 18,
    },
    {
      id: 5,
      img: pepperoniPizza,
      minTime: 16,
      maxTime: 25,
      namePizza: "Pizza de Marguerita",
      sauce: "molho de queijo cheddar",
      preco: 19,
    },
    {
      id: 6,
      img: toopPizza,
      minTime: 12,
      maxTime: 18,
      namePizza: "Pizza de Vegetais",
      sauce: "molho de curry",
      preco: 16,
    },
    {
      id: 7,
      img: pepperoniPizza,
      minTime: 11,
      maxTime: 17,
      namePizza: "Pizza de Atum",
      sauce: "molho tártaro",
      preco: 17,
    },
    {
      id: 8,
      img: toopPizza,
      minTime: 14,
      maxTime: 22,
      namePizza: "Pizza de Quatro Queijos",
      sauce: "molho de pimenta",
      preco: 20,
    },
  ];

  const menus = [
    { icon: fatia, name: "Pizza" },
    { icon: sandwich, name: "Burge" },
    { icon: frenchFried, name: "Fries" },
    { icon: pack, name: "Pack" },
  ];

  let totalPrice = 0;

  cartPizzas.forEach( (item: PropsPizza) => {
    totalPrice += item.preco * item.amout
  });


  const data = {
    pizzas,
    menus,
    cartPizzas,
    setCartPizzas,
    totalPrice,
    setItIsMade,
    itIsMade
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};