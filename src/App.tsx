import { useState, FunctionComponent } from "react";

interface StepProps {
  active: boolean;
  index: number;
  handleClick: (id: number) => void;
}

const Step: FunctionComponent<StepProps> = (props) => {
  return (
    <button
      className={props.active ? "bg-zinc-100" : "bg-zinc-700"}
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

const Row: FunctionComponent = () => {
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
    <div className="flex">
      {steps.map((active, index) => (
        <Step active={active} index={index} handleClick={toggleStep} />
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
        <h1 className="col-start-2 row-start-1 text-center">Boots and Cats</h1>
        <div className="row-start-2 row-span-full col-start-1 col-span-full">
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    </>
  );
}

export default App;
