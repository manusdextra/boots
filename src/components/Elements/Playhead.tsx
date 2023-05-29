import { FunctionComponent } from "react";
import { useAppSelector } from "../../hooks";
import { ThreeColumns } from "../Layout/ThreeColumns";

export const Playhead: FunctionComponent = () => {

  const steps = [...Array(16).keys()]
  const activeStep = useAppSelector(state => state.playhead.step)

  return (
    <ThreeColumns centre={
      <>
        {steps.map((step) => <button key={`playhead-${step}`} className={`ring-1 ring-zinc-900 rounded-sm px-2 mx-[1px] ${step == activeStep ? "ring-zinc-600" : "ring-zinc-100"}`} ></button>)}
      </>
    } />
  );
};
