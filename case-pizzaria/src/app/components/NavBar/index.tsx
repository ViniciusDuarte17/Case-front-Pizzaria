import React from "react";
import Image from "next/image";
import book from "@/app/icons/Menu-book.svg";
import balance from "@/app/icons/balance.svg";
import settings from "@/app/icons/Settings.svg";
import email from "@/app/icons/Email.svg";
import pieChart from "@/app/icons/Pie-chart.svg";
import chat from "@/app/icons/Chat.svg";
import person from "@/app/icons/Person.svg";


export const NavBar = () => {

    return (
      <ul className="w-[100%] h-[78vh] pr-4 pl-4 pt-14 flex flex-col justify-between items-center">
        <li>
          <Image
            src={book}
            alt="livro"
            className="w-50 h-50 p-1 border rounded-md hover:bg-warning cursor-pointer"
          />
        </li>
        <li>
          <Image
            src={person}
            alt="icon de usuário"
            className="w-50 h-50 p-1 border rounded-md hover:bg-warning cursor-pointer"
          />
        </li>
        <li>
          <Image
            src={balance}
            alt="icon carteira"
            className="w-50 h-50 p-1 border rounded-md hover:bg-warning cursor-pointer"
          />
        </li>
        <li>
        <Image
            src={settings}
            alt="icon configuração"
            className="w-50 h-50 p-1 border rounded-md hover:bg-warning cursor-pointer"
          />
        </li>
        <li>
        <Image
            src={chat}
            alt="icon chat"
            className="w-50 h-50 p-1 border rounded-md hover:bg-warning cursor-pointer"
          />
        </li>
        <li>
        <Image
            src={pieChart}
            alt="icon gráfico"
            className="w-50 h-50 p-1 border rounded-md hover:bg-warning cursor-pointer"
          />
        </li>
        <li>
        <Image
            src={email}
            alt="icon imail"
            className="w-50 h-50 p-1 border rounded-md hover:bg-warning cursor-pointer"
          />
        </li>
      </ul>
    );
}