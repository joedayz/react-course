import React, {useState} from 'react';
import InteractiveView from "./Interactive";

const Random = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const onRandomisedHandler = () => {
        setRandomNumber(Math.floor(Math.random() * 1000));
    }

    return <InteractiveView value={randomNumber} actionText="Randomise"
    onAction={onRandomisedHandler} />;
}

export default Random;
