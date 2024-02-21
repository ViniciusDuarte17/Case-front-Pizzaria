import React from "react";
import { Input } from '@/app/components/Input';
import { Button } from "@mui/material";

interface Props {
    setScreen:React.Dispatch<React.SetStateAction<string>>;
}

export const ScreenAddress = ({ setScreen }: Props) => {

    function onSubmit (e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        // puxar os dados salvo no localStorage
    
        console.log("clicou tela de endereço");
      }

    return (
        <div className='w-[100%] h-full flex flex-col gap-4 p-0'>
            <form onSubmit={onSubmit}>
                <h1 className='flex justify-center text-lg text-secondary font-bold mb-3'>Endereço</h1>
                <div className='w-[100%] flex flex-col gap-2'>
                    <Input placeholder='Cep' type='text'/>
                    <Input placeholder='Cidade' type='text' />
                    <Input placeholder='UF' type='text' />
                    <Input placeholder='Telefone' type='text'/>
                    <Input placeholder='Número' type='text' />
                    <Input placeholder='Complemento' type='text' />
                    <Input placeholder='País' type='text'/>
                    <Button variant='contained' color='warning' type='submit'>Finalizar</Button>
                </div>
            </form>
            <div>
                <Button fullWidth variant="text" color="warning" onClick={ () => setScreen('cadastro') }>Voltar</Button>
            </div>
        </div>
    )
}