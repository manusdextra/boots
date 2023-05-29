import { Box } from "./components/Layout/Box";
import { Instrument } from "./components/Elements/Instrument";
import { useAppDispatch } from "./hooks";
import { sequenceReset } from "./features/instruments/instrumentsSlice";
import { Heading } from "./components/Layout/Heading";
import { useAppSelector } from "./hooks";
import { Footer } from "./components/Layout/Footer";
import { ThreeColumns } from "./components/Layout/ThreeColumns";

function App() {
  const instruments = useAppSelector(state => Object.values(state.instruments))
  const dispatch = useAppDispatch()

  function handleInstrumentsReset() {
    dispatch(sequenceReset())
  }

  return (
    <>
      <Box>
        <Heading title="Boots and Cats" />
        <div className="p-4">

          {instruments.map((instrument) => <Instrument {...instrument} key={instrument.name} />)}
          <ThreeColumns centre={
            <button className="bg-zinc-300 p-4" onClick={handleInstrumentsReset}>Reset Sequencer</button>
          } />
        </div>
        <Footer>
        </Footer>
      </Box>
    </>
  );
}

export default App;
