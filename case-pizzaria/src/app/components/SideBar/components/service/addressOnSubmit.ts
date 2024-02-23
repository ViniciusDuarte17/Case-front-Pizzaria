import React from "react";

interface Props {
    event: React.ChangeEvent<HTMLFormElement> 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: any;
}

export function addressOnSubmit({event, data, setOpen}: Props) {
    event.preventDefault();
    // puxar os dados salvo no localStorage
    setOpen(false);
    console.log("endeço", data);
}