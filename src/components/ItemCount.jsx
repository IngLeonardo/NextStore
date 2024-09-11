import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock,onAdd }) => {
    const [count, setCount] = useState(1)

    const handleIncrease = ()=> {
        if (count < stock) setCount((prev) => prev + 1);
    };

    const handleDecrease = ()=> {
        if (count > 1) setCount((prev) => prev - 1);
    };

    const handleAdd = ()=> {
        onAdd(count);
        setCount(1); 
    };


    return (
        <>
            <div className="d-flex flex-row gap-2 w-50 align-items-lg-center">
                <Button className="w-25" variant="primary" onClick={ handleIncrease }> + </Button>
                <p className="counterNumber align-self-center">{ count }</p>
                <Button className="w-25" variant="primary" onClick={ handleDecrease }> - </Button>
                <Button variant="primary" onClick={ handleAdd }> Comprar </Button>
            </div>
        </>
    ) 
}