import React, { useState } from "react";
import { Input } from '@/app/components/Input';
import { Button } from "@mui/material";
import { user } from "@/app/@types/user";
import { section } from "../Utils/section";

interface Props {
    setScreen:React.Dispatch<React.SetStateAction<string>>;
}

export const ScreenAddress = ({ setScreen }: Props) => {
    const [data, setData] = useState({} as any);

    function onSubmit (e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        // puxar os dados salvo no localStorage
      }

      function updateData (id: string, value: any) {
        setData({...data, [id]: value})
      }

    return (
        <div className='w-[100%] h-full flex flex-col gap-4 p-0'>
            <form onSubmit={onSubmit}>
                <h1 className='flex justify-center text-lg text-secondary font-bold mb-3'>Endereço</h1>
                <div className='w-[100%] flex flex-col gap-2'>
                    {
                        section.address.map((item) => (
                            <Input
                                key={item.id}
                                placeholder={item.placeholder}
                                type={item.type}
                                value={ data[item.name] }
                                onChangeText={ (text) => updateData(item.name, text.target.value)}
                                 />
                        ))
                    }
                    <Button variant='contained' color='warning' type='submit'>Finalizar</Button>
                </div>
            </form>
            <div>
                <Button fullWidth variant="text" color="warning" onClick={ () => setScreen('cadastro') }>Voltar</Button>
            </div>
        </div>
    )
}