import { useState } from "react";

function Step() {
  const [step, setStep] = useState(false);

  return (
    <button
      onClick={() => setStep((toggle) => !toggle)}
      className={step ? "bg-zinc-100" : "bg-zinc-700"}
    ></button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
        <h1 className="col-start-2 row-start-1 text-center">Boots and Cats</h1>
        <div className="col-span-full text-center">
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
        </div>
      </div>
    </>
  );
}

export default App;
