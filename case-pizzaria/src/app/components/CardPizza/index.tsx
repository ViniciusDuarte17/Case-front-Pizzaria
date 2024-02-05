import { PropsPizza } from "@/app/@types/pizza";
import Image from "next/image";
import React from "react";

export const CardPizza = ({...pizza}: PropsPizza) => {
    
    return(
        <div className="flex gap-4 border border-s-secondary box-border w-[35%] h-35  rounded-md shadow border-none">
            <section >
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
                    <span className="text-success">{pizza.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                    <button className="w-8 border border-none shadow text-med text-secondary">+</button>
                </div>
            </section>
        </div>
    )
}