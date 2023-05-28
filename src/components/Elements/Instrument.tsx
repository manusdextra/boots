import { FunctionComponent } from "react";
import { Step } from "./Step";
import { stepToggled, instrumentMuted } from "../../features/instruments/instrumentsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import * as Tone from 'tone';
import { ThreeColumns } from "../Layout/ThreeColumns";

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
  const sample = new Tone.Player(path).toDestination()
  sample.autostart = false
  const dispatch = useAppDispatch()

  function handleStepToggled(index: number) {
    dispatch(stepToggled({ instrument: name, step: index }))
  }

  function muteInstrument() {
    dispatch(instrumentMuted(name))
  }

  function handlePlaySample() {
    sample.start()
  }

  return (
    <ThreeColumns left={
      <>
        <p className="p-3"> {name} </p>
        <button
          className={`rounded-sm py-0 p-1 flex-basis-1 ${mute ? "bg-red-600 text-slate-50" : "bg-green-500 text-slate-900"} `}
          onClick={muteInstrument}
        >
          mute
        </button>
      </>
    } centre={
        steps.map((active: boolean, index: number) => (
          <Step active={active} index={index} key={index} handleClick={handleStepToggled} />
        ))
    } right={
      <button className="py-2 p-1" onClick={handlePlaySample}>
        Play
      </button>
    } />
  );
};
