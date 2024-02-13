import Image from "next/image";
import React from "react";

export const Cart = ({ ...item }) => {
  console.log(item);
  return (
    <section className="bg-info">
      <section className="flex">
        <section>
          <Image width={50} src={item.img} alt="img pizza" />
        </section>
        <section>
          <h4>{item.namePizza}</h4>
          <span>extra tomate</span>
         
        </section>
      </section>
      <section className="flex items-center">
          <span>
            {item.preco.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        <button className="w-6 border border-none rounded-sm shadow text-med text-secondary bg-primary ">
          -
        </button>
        <h4>01</h4>
        <button className="w-6 border border-none rounded-sm shadow text-med text-secondary bg-primary ">
          +
        </button>
      </section>
    </section>
  );
};
