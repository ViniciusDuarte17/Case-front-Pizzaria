import { useContext } from "react";
import { PropsPizza } from "../@types/pizza";
import { GlobalStateContext } from "../context/GlobalStateContext";

export const useFunctionPizza = () => {
  const { cartPizzas, setCartPizzas, setItIsMade } = useContext(GlobalStateContext);

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
  };

  const removeToPizzaCart = (removeItem: PropsPizza) => {
    const index = cartPizzas.findIndex((i: PropsPizza) => i.id === removeItem.id);
    const newCart = [...cartPizzas];

    if (newCart[index].amout === 1) {

      newCart.splice(index, 1)
    } else {
      newCart[index].amout -= 1;
    }

    setCartPizzas(newCart);
  };

  return { addToPizzaCart, removeToPizzaCart };
}