import { GlobalStateContext } from "@/app/context/GlobalStateContext";
import { useContext, useEffect, useState } from "react";

export const useHooksIndexBar = () => {
    const { cartPizzas, itIsMade, setItIsMade } = useContext(GlobalStateContext);
    const [endItIsMade, setEndItIsMade] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setItIsMade(false);
            setEndItIsMade(endItIsMade + 1)
        }, 3000);
        return () => { clearInterval(interval) };

    }, [cartPizzas]);

    return {
        cartPizzas, itIsMade
    }
}