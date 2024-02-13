import Image from "next/image";
import React from "react";
import plus from "@/app/icons/plus.svg";
import line from "@/app/icons/Line 1.svg";

export const Cart = ({ ...item }) => {

  return (
    <section className="bg-info bg-opacity-30 p-2 rounded-lg">
      <section className="flex gap-3">
        <section>
          <Image
            className="border rounded-[100%]"
            width={45}
            src={item.img}
            alt="img pizza"
          />
        </section>
        <section className="">
          <h4 className="font-sans font-bold text-base">{item.namePizza}</h4>
          <span className="font-sans text-textColor text-xs">extra tomate</span>
        </section>
      </section>
      <section className="flex items-center justify-between ml-12">
        <section>
          <span className="text-success font-sans font-bold">
            {item.preco.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </section>

        <section className="flex items-center gap-1">
          <button className="w-6 h-6 mt-2 mb-2 border border-none rounded-md shadow text-med text-secondary bg-primary hover:bg-warning">
           <Image className="m-auto" width={15} src={line} alt="sinal de menos" />
          </button>
          <h4>01</h4>
          <button className="w-6 h-6 mr-1 border border-none rounded-md shadow text-med text-secondary bg-primary hover:bg-success">
            <Image className="m-auto" width={15} src={plus} alt="sinal de mais" />
          </button>
        </section>
      </section>
    </section>
  );
};
