import { useState, FunctionComponent } from "react";

interface StepProps {
  active: boolean;
  index: number;
  handleClick: (index: number) => void;
}

const Step: FunctionComponent<StepProps> = (props) => {
  const baseColour = props.index % 4 == 0 ? "bg-zinc-600" : "bg-zinc-700";
  const colour = props.active ? "bg-zinc-100" : baseColour;
  return (
    <button
      className={colour}
      onClick={() => {
        props.handleClick(props.index);
      }}
      key={props.index}
    ></button>
  );
};

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
    const updatedSteps = steps.map((step, i) => {
      if (index === i) {
        return !step;
      } else {
        return step;
      }
    });
    setSteps(updatedSteps);
  }

  return (
    <div id={props.name} className="flex justify-around">
      <button
        className={props.mute ? "bg-red-500" : "bg-red-50"}
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
  const instrumentList = ["BD", "CH", "OH", "SD"];
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
    <>
      <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
        <h1 className="col-start-2 row-start-1 text-center">Boots and Cats</h1>
        <div className="row-start-2 row-span-full col-start-1 col-span-full">
          {instruments.map((instrument) => (
            <Instrument {...instrument} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
