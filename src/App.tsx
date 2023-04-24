import { useState } from "react";

interface StepProps {
  active: boolean;
  index: number;
  handleClick: any;
}

function Step({ active, index, handleClick }: StepProps) {
  return (
    <li key={index}>
      <button
        className={active ? "bg-zinc-700" : "bg-zinc-100"}
        onClick={() => {
          handleClick(index);
        }}
      ></button>
    </li>
  );
}

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

function Row() {
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
    <>
      {steps.map((active, index) => (
        <span>
          <Step active={active} index={index} handleClick={toggleStep} />
        </span>
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
        <h1 className="col-start-2 row-start-1 text-center">Boots and Cats</h1>
        <div className="col-span-full text-center">
          <Row />
        </div>
      </div>
    </>
  );
}

export default App;
