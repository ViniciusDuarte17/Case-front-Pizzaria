import React from "react";
import Image from "next/image";
import { Cart } from "../Cart";
import { FaRegBell } from "react-icons/fa6";
import profileLogo from "@/app/assets/profile.jpg";
import { BsCartPlus } from "react-icons/bs";
import pizzaImg from "@/app/icons/Pepperoni-Pizza 1.svg";
import { MethodPay } from "./components/pay";

export const SideBar = () => {

    const cartPizzas = [
        {
          id: 1,
          img: pizzaImg,
          minTime: 10,
          maxTime: 14,
          namePizza: 'Pizza with Peperoni',
          preco: 12
        },
       
      ];
    
    return (
      <main className="flex flex-col gap-2 p-4">
        <header className="flex justify-between w-[100%] items-center">
          <section className="flex gap-3 items-center">
            <figure>
              <Image
                className="border rounded-[999px] object-cover hover:scale-125"
                src={profileLogo}
                width={36}
                height={36}
                alt="foto de perfil"
              />
            </figure>
            <h4 className="font-sans font-bold text-xm">Vinicius Duarte</h4>
          </section>
          
          <section>
            
            <span>
              <FaRegBell />
            </span>
          </section>
        </header>
        <section className="flex w-[100%] justify-between items-center mb-1">
          <h1 className="font-sans font-bold text-med">Seus pedidos</h1>
          <span>
            <BsCartPlus />
          </span>
        </section>
        <hr className="text-info"/>
        <section>
          {cartPizzas.length > 0 &&
            cartPizzas.map((item) => <Cart key={item.id} {...item} />)}
        </section>
        <section className="flex justify-between items-center">
          <h1 className="font-sans font-bold text-med">Valor total</h1>
          <h2 className="font-sans font-bold text-med text-success">R$ 12,00</h2>
        </section>
        <section>
          <hr className="text-info mt-2"/>
          <MethodPay />
        </section>
      </main>
    );
}