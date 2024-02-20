import { GlobalStateContext } from "@/app/context/GlobalStateContext";
import React, { useContext, useState } from "react";
import PIX from "react-qrcode-pix";

const now = new Date().getTime().toString();

export const MethodPix = () => {
  const { totalPrice } = useContext(GlobalStateContext);

  const [fullPIX, setFullPIX] = useState("");

  return (
    <div className="flex flex-col items-center">
      
      <div className="mt-3 mb-3">
        <PIX
          pixkey="11848823983"
          merchant="Vinicius Duarte"
          city="Campo Alegre de Loudes"
          cep="47.220-000"
          code={"RQP" + now}
          amount={totalPrice}
          onLoad={setFullPIX}
          resize={150}
          variant="fluid"
          padding={30}
          color="#37c26f"
          bgColor="#def"
          bgRounded
          divider
        />
      </div>


    </div>
  );
};
