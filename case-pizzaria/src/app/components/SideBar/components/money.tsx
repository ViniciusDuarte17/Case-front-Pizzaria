import React, { ChangeEvent, useState } from "react";
import { Input } from "../../Input";


export const MethodMoney = () => {
    const [change, setChange] = useState<string>('');

    function handleChange (e: ChangeEvent<HTMLInputElement>) {
        const selectedChange = e.target.value;
        setChange(selectedChange);
    }

    return (
      <main className="flex flex-col">
        <section className="flex gap-2 items-center mt-3">
          <h1>Vai precisar de troco?</h1>

          <section className="flex gap-2 items-center">
            <label>Sim</label>
            <input value={"yes"} type="checkbox" onChange={handleChange} />
            <label>Não</label>
            <input value={"no"} type="checkbox" onChange={handleChange} />
          </section>
        </section>
        <section>
          {change === "yes" && (
            <section className=" mt-4">
              <Input placeholder="Troco para quanto?" type="number" />
            </section>
          )}
        </section>
      </main>
    );
}