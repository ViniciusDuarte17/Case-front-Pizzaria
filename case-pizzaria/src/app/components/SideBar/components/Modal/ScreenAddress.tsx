import React from "react";
import { Input } from '@/app/components/Input';
import { Button } from "@mui/material";
import { section } from "../Utils/section";
import { useFormDate } from "@/app/hooks/useFormDate";
import { addressOnSubmit } from "../service/addressOnSubmit";

interface Props {
    setScreen:React.Dispatch<React.SetStateAction<string>>;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScreenAddress = ({ setScreen, setOpen }: Props) => {
    const {data, updateData } = useFormDate();

    return (
        <div className='w-[100%] h-full flex flex-col gap-4 p-0'>
            <form onSubmit={(event:React.ChangeEvent<HTMLFormElement>) => addressOnSubmit({event, data, setOpen})}>
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