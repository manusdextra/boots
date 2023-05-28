import { Box } from "./components/Layout/Box";
import { Instrument } from "./components/Elements/Instrument";
import { useAppDispatch } from "./hooks";
import { sequenceReset } from "./features/instruments/instrumentsSlice";
import { Heading } from "./components/Layout/Heading";
import { useAppSelector } from "./hooks";
import { Footer } from "./components/Layout/Footer";

function App() {
  const instruments = useAppSelector(state => Object.values(state.instruments))
  const dispatch = useAppDispatch()

  function handleInstrumentsReset() {
    dispatch(sequenceReset())
  }

  return (
    <>
      <Heading title="Boots and Cats" />
      <Box children={instruments.map((instrument, index) => <Instrument {...instrument} key={index} />)} />
      <Footer>
      <button onClick={handleInstrumentsReset}>Reset Sequencer</button>
    </Footer>
    </>
  );
}

export default App;
