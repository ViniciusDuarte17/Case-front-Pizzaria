import React from "react";
import { NavBar } from "@/app/components/NavBar";

export default function Home() {
  return (
    <main className="w-[100%] h-[100vh] flex">
      <section className="flex flex-col w-[8%]">
        <NavBar />
      </section>
      <section className="flex flex-col w-[68%] h-[100vh] bg-primary shadow">
        <div>
          coluna 2
        </div>
      </section>
      <section className="flex flex-col w-[24%]">
        <div>
          coluna 3
        </div>
      </section>
    </main>
  );
}
