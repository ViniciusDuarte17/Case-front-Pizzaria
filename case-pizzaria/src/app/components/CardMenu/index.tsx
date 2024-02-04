import { PropsMenu } from "@/app/@types/menu";
import Image from "next/image";
import React from "react";

export const CardMenu = ({ ...menu }: PropsMenu) => {
  return (
    <section className="w-[99px] h-[30px] p-1 bg-[#fff] shadow flex items-center justify-between rounded-lg">
      <section>
        <Image className="w-[30px] h-[30px] bg-info rounded-[30px]" src={menu.icon} alt="icon pizza" />
      </section>
      <section>
        <span>{menu.name}</span>
      </section>
    </section>
  );
};
