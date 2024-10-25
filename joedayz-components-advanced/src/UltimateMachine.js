import {useState} from "react";


const OnMessage = () => <span>The machine is ON!</span>;
const OffMessage = () => <span>The machine is OFF!</span>;

const ErrorMessage = ({showError}) => showError? <span>Oh something is wrong!</span>: null;

const UltimateMachine = () => {

    const [showError, setShowError] = useState(false);

    const onClickHandler = () => {
        setShowError(i => !i);
    }

    return (
        <section>
            <h1>The Ultimate Machine</h1>
            <ErrorMessage showError={showError}/>
            <button type="button" onClick={onClickHandler} aria-pressed={showError}>Toogle Error</button>
        </section>
    );
};

export default UltimateMachine;
