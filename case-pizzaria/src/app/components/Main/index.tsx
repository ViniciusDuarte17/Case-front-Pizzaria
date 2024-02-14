import React, { useRef } from "react";
import Image from "next/image";
import pizza from "@/app/icons/pizza.svg";
import fatia from "@/app/icons/fatia.svg";
import sandwich from "@/app/icons/sandwich.svg";
import frenchFried from "@/app/icons/french_fried.svg";
import pack from "@/app/icons/pack.svg";
import { motion, useScroll } from "framer-motion";
import { CardMenu } from "../CardMenu";
import { CardPizza } from "../CardPizza";
import pizzaImg from "@/app/icons/Pepperoni-Pizza 1.svg";
import pizzaTop from "@/app/icons/toppng 2.svg";


export const Main = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
 
  const menus = [
    { icon: fatia, name: "Pizza" },
    { icon: sandwich, name: "Burge" },
    { icon: frenchFried, name: "Fries" },
    { icon: pack, name: "Pack" },
  ];

  const pizzas = [
    {
      id: 1,
      img: pizzaImg,
      minTime: 10,
      maxTime: 14,
      namePizza: 'Pizza with Peperoni',
      typeSauce: 'extra tomate',
      preco: 12
    },
    {
      id: 2,
      img: pizzaTop,
      minTime: 16,
      maxTime: 25,
      namePizza: 'Pizza with Cheese',
      typeSauce: 'extra virgem',
      preco: 14
    },
    {
      id: 3,
      img: pizzaTop,
      minTime: 16,
      maxTime: 25,
      namePizza: 'Pizza with Cheese',
      typeSauce: 'extra virgem',
      preco: 14
    },
    {
      id: 4,
      img: pizzaTop,
      minTime: 16,
      maxTime: 25,
      namePizza: 'Pizza with Cheese',
      typeSauce: 'extra virgem',
      preco: 14
    },
    {
      id: 5,
      img: pizzaTop,
      minTime: 16,
      maxTime: 25,
      namePizza: 'Pizza with Cheese',
      typeSauce: 'extra virgem',
      preco: 14
    },
    {
      id: 6,
      img: pizzaTop,
      minTime: 16,
      maxTime: 25,
      namePizza: 'Pizza with Cheese',
      typeSauce: 'extra virgem',
      preco: 14
    },
    {
      id: 7,
      img: pizzaTop,
      minTime: 16,
      maxTime: 25,
      namePizza: 'Pizza with Cheese',
      typeSauce: 'extra virgem',
      preco: 14
    },
  ];

  return (
    <main className="flex flex-col h-[80vh] box-border">
      <section className="flex self-center mt-1 w-[95%] h-[16em] bg-black rounded-[24px] box-border">
        <section className="flex flex-col w-[44vw] h-full pl-6 pt-6 max-[892px]:h-[25vh]">
          <h1 className="text-primary text-xl pb-4">
            Make Your First Order and Get <br />
            <strong className="text-warning">50% OF</strong>
          </h1>
          <p className="text-info text-md pb-4 flex-wrap text-wrap max-[892px]:text-primary">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </p>

          <span className="bg-warning w-[140px] text-center p-2 rounded-[15px] text-primary flex-wrap text-wrap max-[892px]:bg-primary">
            Order now
          </span>
        </section>

        <section className="w-[21vw] ">
          <Image
            className="relative w-full h-auto sm:w-full md:w-full lg:w-full xl:w-full"
            src={pizza}
            alt="logo da pizza"
          />
        </section>
      </section>

      <section 
          className="mt-4 p-4 w-[90%] flex self-center justify-between bg-primary">
        <div>
          <h1 className="font-sans text-med">Menu</h1>
        </div>
        <section>
          <motion.ul
            ref={ref}
            className="flex gap-5 overflow-x-scroll list-none custom-scrollbar w-[100%] max-[885px]:w-[150px]"
          >
            {menus.map((item, index) => (
              <motion.li
                key={index}
                >
                  <CardMenu icon={item.icon} name={item.name} />
              </motion.li>
            ))}
          </motion.ul>
        </section>
        <div>
            <span className="text-warning bg-primary shadow p-2 rounded-md font-sans">Ver tudo</span>
        </div>
      </section>
      <section className="grid grid-cols-2 border border-none self-center gap-3 w-[90%] overflow-x-scroll list-none custom-scrollbar max-[1110] max-[892px]:grid-cols-1">    
       {
        pizzas.map( item =><CardPizza key={item.id} img={item.img} namePizza={item.namePizza} minTime={item.minTime} maxTime={item.maxTime} preco={item.preco} />)
       }
      </section>
    </main>
  );
};
