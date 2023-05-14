import { useState, FunctionComponent } from "react";
import { Box } from "./components/Layout/Center";
import { Step} from "./components/Elements/Step";

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

const Instrument: FunctionComponent<InstrumentProps> = (props) => {
    const [steps, setSteps] = useState(initialSteps);

    function toggleStep(index: number) {
        const updatedSteps = steps.map((step, i) => (index === i ? !step : step));
        setSteps(updatedSteps);
    }

    return (
        <div id={props.name} className="flex justify-around">
            <button
                className={`flex-basis-12 ${props.mute ? "bg-red-900" : "bg-green-500"
                    } text-slate-900`}
                onClick={() => props.setMute(!props.mute)}
            >
                {props.name}
            </button>
            {steps.map((active, index) => (
                <Step active={active} index={index} handleClick={toggleStep} />
            ))}
        </div>
    );
};

interface InstrumentProps {
    name: string;
    mute: boolean;
    setMute: (mute: boolean) => void;
}

function App() {
    const instrumentList = ["SD", "OH", "CH", "BD"];
    const instruments: Array<InstrumentProps> = instrumentList.map(
        (name: string) => {
            const [mute, setMute] = useState(false);
            return {
                name: name,
                mute: mute,
                setMute: setMute,
            };
        }
    );

    return (
        <Box title="Boots and Cats" children={instruments.map((instrument) => <Instrument {...instrument} />)} />
    );
}

export default App;
