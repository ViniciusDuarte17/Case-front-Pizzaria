import React from "react";
import { Input } from "../Input";


export const Header = () => {
    const user = {
        name: 'vinicius',
        welcome: 'Welcome Back'
    }
    return (
        <header className='flex justify-between items-center self-center w-[90%] mt-6 font-sans'>
            <section className='flex flex-col'>
                <span className="text-info text-med-lg">{user.name}</span>
                <span className="text-secondary font-bold text-lg font-sans">{user.welcome}</span>
            </section>
            <React.Fragment>
                <Input type={'search'} placeholder={'Search'}/> 
            </React.Fragment>

        </header>
    )
}