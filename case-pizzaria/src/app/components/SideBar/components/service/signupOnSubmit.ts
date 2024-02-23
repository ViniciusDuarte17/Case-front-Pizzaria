import React from "react";

interface Props {
    event: React.ChangeEvent<HTMLFormElement> 
    setScreen: React.Dispatch<React.SetStateAction<string>>;
    data: any;
}

export function signupOnSubmit({event, data, setScreen}: Props) {
    event.preventDefault();
    // puxar os dados salvo no localStorage
    setScreen('endereco');
    console.log("cadastro", data);
}