import React from "react";
import { Cart } from "../Cart";


export const SideBar = () => {
    return(
        <div>
            <header>
                <section>
                    <p>img</p>
                    <h4>nome</h4>
                </section>
                <section>
                    <p>icon</p>
                </section>
            </header>
            <section>
                <h1>carrinho</h1>
                <span>Ver tudo</span>
            </section>
            {
                <Cart />
            }
        </div>
    )
}