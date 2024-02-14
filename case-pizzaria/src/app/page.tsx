"use client";
import React, { useEffect, useState } from "react";
import { NavBar } from "@/app/components/NavBar";
import { Header } from "@/app/components/Header";
import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";
import { GlobalState } from "./context/GlobalState";


export default function Home() {
 
  return (
    <GlobalState>
      <main className="w-[100%] h-[100vh] flex">
        <section className="flex flex-col w-[8%]">
          <NavBar />
        </section>
        <section className="flex flex-col w-[68%] h-[100vh] bg-primary shadow">
          <Header />
          <Main />
        </section>
        <section className="flex flex-col w-[24%]">
          <div>
            <SideBar />
          </div>
        </section>
      </main>
    </GlobalState>
  );
}
