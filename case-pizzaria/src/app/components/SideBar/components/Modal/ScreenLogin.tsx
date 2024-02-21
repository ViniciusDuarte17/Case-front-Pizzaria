import React from "react";
import { Input } from '@/app/components/Input';
import { Button } from "@mui/material";

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<string>>
}

export const ScreenLogin = ({setScreen}: Props) => {

    function onSubmit (e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        // puxar os dados salvo no localStorage
    
        console.log("clicou");
      }

    return (
        <div className='w-[100%] h-full flex flex-col justify-center gap-4'>
            <form onSubmit={onSubmit}>
                <h1 className='flex justify-center text-lg text-secondary font-bold mb-5'>Login</h1>
                <div className='w-[100%] flex flex-col gap-2'>
                    <Input placeholder='E-mail' type='email' />
                    <Input placeholder='Senha' type='password' />
                    <Button variant='contained' color='warning' type='submit'>Login</Button>
                </div>
            </form>
            <div className='w-[100%]  flex flex-col justify-center'>
                <Button variant='outlined' color='warning' onClick={() => setScreen('cadastro')}>Cadastrar</Button>
            </div>
        </div>
    )
}