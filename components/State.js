import { useState } from "react";
import Button from "./Button";

function State(){
    let [count, setCount] = useState(0);

    function increment(){
        setCount(() => 
            count = count + 1);
        setCount(() => 
            count + 1
        );
    }


    function decrement(){
        setCount(count - 1);
    }

    return (
        <>
            <h3>Count : {count}</h3>
            <Button onClick={increment} text='Add'>Incremented Count : {count}</Button>
            <Button onClick={decrement} text='Sub'>Decrement Count : {count}</Button>
        </>
    );

}

export default State