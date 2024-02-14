import React, { ChangeEvent, useState } from "react";
import { MethodPix } from "./pix";
import { MethodCard } from "./card";
import { MethodMoney } from "./money";


export const MenuPay = () => {
  const [selectMethod, setSelectMethod] = useState<string>('');

  let componentSelected;

  switch (selectMethod) {
    case 'PIX': componentSelected = <MethodPix />;
      break;
    case 'CARTAO': componentSelected = <MethodCard />;
      break;
    case "MONEY": componentSelected = <MethodMoney />;
      break;
    default: null;
  }

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedionOption = e.target.value;
    setSelectMethod(selectedionOption);
  }

  return (
    <section className="mt-4">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-green-500 dark:text-white"
      >
        <h3 className="font-sans text-sm ">Método de pagamento</h3>
      </label>
      <select
        id="countries"
        className="bg-warning hover:bg-warning bg-opacity-70 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectMethod}
        onChange={handleSelectChange}
      >
        <option selected value={''}>Escolha seu método</option>
        <option value="PIX">Pix</option>
        <option value="CARTAO">Cartão de crédito</option>
        <option value="MONEY">Dinheiro</option>
      </select>
      <section>{componentSelected}</section>
      {selectMethod !== "" && (
        <section className="flex justify-center mt-4">
          <button className="bg-success p-2 rounded-md w-[100%] hover:bg-opacity-80 cursor-pointer">
            <span className="font-sans font-bold text-sm text-primary">
              Confrimar
            </span>
          </button>
        </section>
      )}
    </section>
  );
}