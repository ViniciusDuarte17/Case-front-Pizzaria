import React from "react";
import { Input } from '@/app/components/Input';
import { Button } from "@mui/material";

interface Props {
    setScreen:React.Dispatch<React.SetStateAction<string>>;
}

export const ScreenSignup = ({ setScreen }: Props) => {

    function onSubmit (e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setScreen('endereco');

        // puxar os dados salvo no localStorage
    
      }

    return (
        <div className='w-[100%] h-full flex flex-col gap-4 p-2'>
            <form onSubmit={onSubmit}>
                <h1 className='flex justify-center text-lg text-secondary font-bold mb-5'>Cadastro</h1>
                <div className='w-[100%] flex flex-col gap-2'>
                    <Input placeholder='Nome Completo' type='text'/>
                    <Input placeholder='E-mail' type='email' />
                    <Input placeholder='Senha' type='password' />
                    <Input placeholder='Confirmar senha' type='password' />
                    <Button variant='contained' color='warning' type='submit'>Avançar</Button>
                </div>
            </form>
            <div>
                <Button fullWidth variant="text" color="warning" onClick={ () => setScreen('login') }>Voltar</Button>
            </div>
        </div>
    )
}