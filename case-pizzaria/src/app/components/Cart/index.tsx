import React from "react";


export const Cart = () => {
    return(
        <React.Fragment className="border border-spacing-0">
            <section>
                <p>img-pizza</p>
            </section>
            <section>
                <h4>Nome da pizza</h4>
                <span>extra tomate</span>
                <span>R$ 40,00</span>
            </section>
            <section>
                <button>
                    -
                </button>
                <h4>01</h4>
                <button>
                    +
                </button>
            </section>
        </React.Fragment>
    )
}