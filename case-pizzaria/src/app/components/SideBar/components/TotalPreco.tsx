import { GlobalStateContext } from "@/app/context/GlobalStateContext";
import React, { useContext } from "react";

export const TotalPreco = () => {
  const { totalPrice } = useContext(GlobalStateContext);
  return (
    <main>
      <section className="flex justify-between items-center">
        <h1 className="font-sans font-bold text-med">Valor total</h1>
        <h2 className="font-sans font-bold text-med text-success">{totalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h2>
      </section>
    </main>
  );
};