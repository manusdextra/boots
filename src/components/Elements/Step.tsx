import { FunctionComponent } from "react";


interface StepProps {
  active: boolean;
  index: number;
  handleClick: (index: number) => void;
}

export const Step: FunctionComponent<StepProps> = (props) => {
  const baseColour = props.index % 4 == 0 ? "bg-zinc-600" : "bg-zinc-700";
  const colour = props.active ? "bg-zinc-100 ring-zinc-900 ring-2 ring-inset" : baseColour;
  return (
    <button
      className={`rounded-sm px-2 mx-[1px] ${colour}`}
      onClick={() => {
        props.handleClick(props.index);
      }}
      key={props.index}
    ></button>
  );
};

