import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Cart } from "../Cart";
import { FaRegBell } from "react-icons/fa6";
import { BiSolidBellPlus } from "react-icons/bi";
import profileLogo from "@/app/assets/profile.jpg";
import { BsCartPlus } from "react-icons/bs";
import { MenuPay } from "./components/pay";
import { TotalPreco } from "./components/TotalPreco";
import { EmptyCart } from "./components/EmptyCart";
import { GlobalStateContext } from "@/app/context/GlobalStateContext";

export const SideBar = () => {
  const { cartPizzas } = useContext(GlobalStateContext);
  const [itIsMade, setItIsMade] = useState(false);
  const [endItIsMade, setEndItIsMade] = useState(0);
  let interval:  number | NodeJS.Timeout | undefined;
  
  useEffect( () => {
    setItIsMade(!itIsMade);

     interval = setInterval( () => {
      setItIsMade(false);
      setEndItIsMade( endItIsMade + 1)
    }, 2000);

    return () => {
      clearInterval(interval)
    };
    
  }, [cartPizzas]);

  useEffect( () => {
  
    if(endItIsMade >= 2) {
      setItIsMade(false)
      clearInterval(interval)
    }
  }, [endItIsMade]);

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
          <span className="cursor-pointer">
            {
              !itIsMade ?
              <FaRegBell /> : <BiSolidBellPlus className="text-success"/>
            }
          </span>
        </section>
      </header>
      <section className="flex w-[100%] justify-between items-center mb-1">
        <h1 className="font-sans font-bold text-med">Seus pedidos</h1>
        <span>
          <BsCartPlus />
        </span>
      </section>
      <hr className="text-info" />
      <section>
        {cartPizzas.length > 0 &&
          cartPizzas.map((item) => <Cart key={item.id} {...item}/>)}
      </section>
      <React.Fragment>{cartPizzas.length > 0 && <TotalPreco />}</React.Fragment>
      {cartPizzas.length > 0 ? (
        <section>
          <hr className="text-info mt-2" />
          <MenuPay />
        </section>
      ) : (
        <EmptyCart />
      )}
    </main>
  );
};
