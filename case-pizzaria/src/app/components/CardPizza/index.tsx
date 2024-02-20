import { PropsPizza } from "@/app/@types/pizza";
import Image from "next/image";
import React, { useContext } from "react";
import plus from "@/app/icons/plus (1).svg";
import { GlobalStateContext } from "@/app/context/GlobalStateContext";

interface Props {
    pizza: PropsPizza;
}

export const CardPizza = ({pizza}: Props) => {
    const { cartPizzas, setCartPizzas, setItIsMade } = useContext(GlobalStateContext)

    const addToPizzaCart = (newItem: PropsPizza) => {
      setItIsMade(true);
      const index = cartPizzas.findIndex(
        (i: PropsPizza) => i.id === newItem.id
      );
      const newCart = [...cartPizzas];

      if (index === -1) {
        const cartItem = { ...newItem, amout: 1 };
        newCart.push(cartItem);
      } else {
        newCart[index].amout = newCart[index].amout + 1;
      }

      setCartPizzas(newCart);
      // setItIsMade(false);
    };
    
    return(
        <div className="flex gap-4 border border-s-secondary box-border w-[90%] h-35 rounded-md shadow border-none">
            <section>
                <Image 
                    width={100}
                    height={100}
                    src={pizza.img} 
                    alt="pizza" />
            </section>
            <section>
                <h1 className="font-sans font-bold text-[22px] break-all whitespace-wrap">{pizza.namePizza}</h1>
                <span className="text-info text-xs">{pizza.minTime} - {pizza.maxTime} minutos</span>
                <div className="w-40 pb-2 pt-1 flex justify-between items-center mr-2">
                    <span className="text-success font-sans font-bold">{pizza.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                    <button onClick={ () => addToPizzaCart(pizza)} className="w-10 h-12 border border-none rounded-md shadow text-med text-secondary hover:bg-success">
                        <Image width={25} className="m-auto" src={plus} alt="Sinal de mais"/>
                    </button>
                </div>
            </section>
        </div>
    )
}