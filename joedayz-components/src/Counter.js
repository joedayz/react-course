import React, { useState} from 'react';
import InteractiveView from "./Interactive";



const Counter = () => {
    const [counter, setCounter] = useState(0);

    const onClickHandler = () => {
        setCounter(counter + 1);
    };
    return (<InteractiveView value={counter}
                         onAction={onClickHandler} actionText="Increment"/>);
};

export default Counter;
