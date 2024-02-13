import React from "react";
import Image from "next/image";
import { Cart } from "../Cart";
import { FaRegBell } from "react-icons/fa6";
import profileLogo from "@/app/assets/profile.jpg";
import { BsCartPlus } from "react-icons/bs";
import pizzaImg from "@/app/icons/Pepperoni-Pizza 1.svg";

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
    
    return(
        <main className="border border-warning p-4" >
            <header className="flex justify-between w-[90%] items-center">
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
            <section className="flex border border-warning w-[90%] justify-between items-center mt-20 mb-5">
                <h1 className="font-sans font-bold text-sm">Seus pedidos</h1>
                <span>
                    <BsCartPlus/>
                </span>
            </section>
            {
              cartPizzas.length > 0 && cartPizzas.map( (item) => (
                    <Cart key={item.id} {...item}/>
                ))
            }
        </main>
    )
}