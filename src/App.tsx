import { Box } from "./components/Layout/Box";
import { Instrument } from "./components/Elements/Instrument";
import { Heading } from "./components/Layout/Heading";
import { useAppSelector } from "./hooks";

function App() {
  const instruments = useAppSelector(state => Object.values(state.instruments))
  console.log(instruments)

  return (
    <>
      <Heading title="Boots and Cats" />
      <Box children={instruments.map((instrument) => <Instrument {...instrument} />)} />
    </>
  );
}

export default App;
