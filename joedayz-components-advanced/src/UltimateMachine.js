import {useState} from "react";

const OnMessage = () => <span>The machine is ON!</span>;
const OffMessage = () => <span>The machine is OFF!</span>;
const ErrorMessage = ({ showError }) => (showError ? <span>Oh, something is wrong!</span> : null);


const UltimateMachine = () => {

    const [showError, setShowError] = useState(false);
    const [isOn, setIsOn] = useState(false);

    const toggleError = () => setShowError((prev) => !prev);
    const togglePower = () => setIsOn((prev) => !prev);

    return (
        <section>
            <h1>The Ultimate Machine</h1>
            {isOn ? <OnMessage /> : <OffMessage />}
            <ErrorMessage showError={showError}/>
            <button type="button" onClick={togglePower} aria-pressed={isOn}>
                {isOn ? "Turn Off" : "Turn On"}
            </button>
            <button type="button" onClick={toggleError} aria-pressed={showError}>
                {showError ? "Hide Error" : "Show Error"}
            </button>

        </section>
    );
};

export default UltimateMachine;
