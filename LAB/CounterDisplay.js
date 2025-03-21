import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterDisplay = () => {
    const {count} = useContext(CounterContext);

    return <h1>Current Count: {count}</h1>
}

export default CounterDisplay;