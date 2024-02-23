import React from "react";
import { Input } from '@/app/components/Input';
import { Button } from "@mui/material";
import { section } from "../Utils/section";
import { useFormDate } from "@/app/hooks/useFormDate";
import { loginOnSubmit } from "../service/loginOnSubmit";

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<string>>;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export const ScreenLogin = ({setScreen, setOpen}: Props) => {
    const {data, updateData } = useFormDate();

    return (
        <div className='w-[100%] h-full flex flex-col justify-center gap-4'>
            <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => loginOnSubmit({event, data, setOpen})}>
                <h1 className='flex justify-center text-lg text-secondary font-bold mb-5'>Login</h1>
                <div className='w-[100%] flex flex-col gap-2'>
                    {
                        section.login.map( (item) => (
                            <Input 
                                key={item.id}
                                placeholder={item.placeholder}
                                type={item.type}
                                value={data[item.name]}
                                onChangeText={(text) => updateData(item.name, text.target.value)}
                            />
                        ))
                    }
                    <Button variant='contained' color='warning' type='submit'>Login</Button>
                </div>
            </form>
            <div className='w-[100%]  flex flex-col justify-center'>
                <Button variant='outlined' color='warning' onClick={() => setScreen('cadastro')}>Cadastrar</Button>
            </div>
        </div>
    )
}