import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterControl = () => {
    const { increment, decrement} = useContext(CounterContext);

    return(
        <div>
            <button onClick={increment}> + increment</button>
            <button onClick={decrement}> - decrement </button>
        </div>
    )
}

export default CounterControl;