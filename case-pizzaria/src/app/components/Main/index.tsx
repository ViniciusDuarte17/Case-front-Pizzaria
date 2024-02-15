import React, { useContext, useRef } from "react";
import Image from "next/image";
import pizza from "@/app/icons/pizza.svg";
import { motion } from "framer-motion";
import { CardMenu } from "../CardMenu";
import { CardPizza } from "../CardPizza";
import { GlobalStateContext } from "@/app/context/GlobalStateContext";

export const Main = () => {
  const { pizzas, menus } = useContext(GlobalStateContext);
  const ref = useRef(null);

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
        pizzas?.length > 0 ?(
        pizzas?.map( item => <CardPizza key={item.id} pizza={item} />)
       ) : <div className="flex justify-end">carregando...</div>}
      </section>
    </main>
  );
};
