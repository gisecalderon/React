
import { useState } from "react"
const CustomButtom = ( {texto})=>{

    const [counter , setCounter] = useState (0)

    const sumar = () => {
        setCounter( counter + 1)
    };

    const restar = () => {
        setCounter( counter - 1 )
    };

    return (
        <>
            <button onClick={sumar}>{texto}</button>
            <h2>{counter}</h2>
        </>
    );
};

export default CustomButtom;