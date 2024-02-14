import React from "react";
import { Input } from "../../Input";


export const MethodCard = () => {

    return(
        <main className="flex flex-col gap-2">
            <section className="mt-2 flex flex-col gap-2">
                <Input placeholder="Número do cartão" type="text" />
                <Input placeholder="Nome como está no cartão" type="text" />
            </section>
            <section className="flex justify-between">
                <section className="w-[45%]">
                    <label className="font-sans text-sm" >Validade</label>
                    <Input placeholder="03/27" type="text" />
                </section>
                <section className="w-[45%]">
                    <label className="font-sans text-sm ">CVV</label>
                    <Input placeholder="***" type="text"/>
                </section>
            </section>
        </main>
    )
}