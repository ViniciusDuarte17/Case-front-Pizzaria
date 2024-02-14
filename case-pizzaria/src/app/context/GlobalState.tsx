import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { PropsPizza } from "../@types/pizza";
import jsonPizza from "@/app/api/pizza.json";

export const GlobalState = (props: any) => {
  const [pizzas, setPizzas] = useState<PropsPizza[]>([]);
  useEffect(() => {
    setPizzas(jsonPizza);
  }, []);

  const data = {
    pizzas
  }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
