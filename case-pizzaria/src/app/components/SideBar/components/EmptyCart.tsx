import React from "react";
import { BsCartX } from "react-icons/bs";

export const EmptyCart = () => {
  return (
    <React.Fragment>
      <section className="flex justify-center items-center gap-2">
        <h1 className="font-sans text-med-lg font-bold">Carrinho vazio</h1>
        <BsCartX/>
      </section>
    </React.Fragment>
  );
};
