import { FunctionComponent } from "react";
import { Step } from "./Step";
import { stepToggled, instrumentMuted } from "../../features/instruments/instrumentsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export interface InstrumentProps {
  name: string;
  path: string;
  mute: boolean;
  sequence: Array<boolean>
}

export const Instrument: FunctionComponent<InstrumentProps> = ({
  name,
  path,
  mute,
}) => {
  const steps = useAppSelector((state) => state.instruments[name].sequence)
  const audio = new Audio(path)
  const dispatch = useAppDispatch()

  function handleStepToggled(index: number) {
    dispatch(stepToggled({instrument: name, step: index}))
  }

  function muteInstrument() {
    dispatch(instrumentMuted(name))
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row justify-end w-full">
        <p className="p-3"> {name} </p>
        <button
          className={`py-0 p-1 flex-basis-1 flex-basis-12 ${mute ? "bg-red-900" : "bg-green-500"} text-slate-900`}
          onClick={muteInstrument}
        >
          mute
        </button>
      </div>
      <div id={name} className="flex flex-row">
        {steps.map((active, index) => (
          <Step active={active} index={index} key={index} handleClick={handleStepToggled} />
        ))}
      </div>
      <div className="flex flex-row justify-start w-full">
        <button className="py-2 p-1" onClick={() => { audio.play() }}>
          Play
        </button>
      </div>
    </div>
  );
};
