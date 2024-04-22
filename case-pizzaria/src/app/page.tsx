"use client";
import React from "react";
import { NavBar } from "@/app/components/NavBar";
import { Header } from "@/app/components/Header";
import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";
import { GlobalState } from "./context/GlobalState";
import { useHomePage } from "./hooks/useHomePage";
import { useFormDate } from "./hooks/useFormDate";


export default function Home() {
  const {screen} = useHomePage();
  const {data, updateData } = useFormDate();
 
  return (
    <GlobalState>
      <main className="w-[100%] h-[100vh] flex max-sm:flex-col">
       { screen > 800 && <section className="flex flex-col w-[8%] max-md:bg-success">
          <NavBar />
        </section>}
        <section className="flex flex-col w-[68%] h-[100vh] bg-primary shadow max-md:w-[95%] mb-10">
          <Header data={data} updateData={updateData}/>
          <Main data={data}/>
        </section>
        <section className="flex flex-col w-[26%]">
          <div>
            <SideBar />
          </div>
        </section>
      </main>
    </GlobalState>
  );
}
