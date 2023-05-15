import { FunctionComponent, useState } from "react";
import { Step } from "./Step";

const initialSteps = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];

export interface InstrumentProps {
    name: string;
    path: string;
    mute: boolean;
    setMute: (mute: boolean) => void;
}

export const Instrument: FunctionComponent<InstrumentProps> = (props) => {
    const [steps, setSteps] = useState(initialSteps);
    const audio = new Audio(props.path)
    function toggleStep(index: number) {
        const updatedSteps = steps.map((step, i) => (index === i ? !step : step));
        setSteps(updatedSteps);
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-row justify-end">
                <p className="p-3"> {props.name} </p>
                <button
                    className={`flex-basis-1 flex-basis-12 ${props.mute ? "bg-red-900" : "bg-green-500"} text-slate-900`}
                    onClick={() => props.setMute(!props.mute)}
                >
                    mute
                </button>
            </div>
                <div id={props.name} className="flex self-center flex-row">
                    {steps.map((active, index) => (
                        <Step active={active} index={index} handleClick={toggleStep} />
                    ))}
                </div>
            <div className="flex flex-row justify-start">
                <button onClick={() => { audio.play() }}>
                    Play
                </button>
            </div>
        </div>
    );
};
