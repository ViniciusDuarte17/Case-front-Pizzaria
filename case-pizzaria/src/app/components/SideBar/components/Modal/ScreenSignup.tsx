import React from "react";
import { Input } from '@/app/components/Input';
import { Button } from "@mui/material";
import { section } from "../Utils/section";
import { useFormDate } from "@/app/hooks/useFormDate";
import { signupOnSubmit } from "../service/signupOnSubmit";

interface Props {
    setScreen:React.Dispatch<React.SetStateAction<string>>;
}

export const ScreenSignup = ({ setScreen }: Props) => {
    const {data, updateData } = useFormDate();

    return (
        <div className='w-[100%] h-full flex flex-col gap-4 p-2'>
            <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => signupOnSubmit({event, data, setScreen})}>
                <h1 className='flex justify-center text-lg text-secondary font-bold mb-5'>Cadastro</h1>
                <div className='w-[100%] flex flex-col gap-2'>
                    {
                        section.signup.map( (item) => (
                            <Input 
                                key={item.id}
                                placeholder={item.placeholder}
                                type={item.type}
                                value={data[item.name]}
                                onChangeText={(text) => updateData(item.name, text.target.value)}
                            />
                        ))
                    }
                    <Button variant='contained' color='warning' type='submit'>Avançar</Button>
                </div>
            </form>
            <div>
                <Button fullWidth variant="text" color="warning" onClick={ () => setScreen('login') }>Voltar</Button>
            </div>
        </div>
    )
}