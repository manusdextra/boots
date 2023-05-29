import { Box } from "./components/Layout/Box";
import { Instrument } from "./components/Elements/Instrument";
import { useAppDispatch } from "./hooks";
import { sequenceReset } from "./features/instruments/instrumentsSlice";
import { Heading } from "./components/Layout/Heading";
import { useAppSelector } from "./hooks";
import { Footer } from "./components/Layout/Footer";
import { ThreeColumns } from "./components/Layout/ThreeColumns";
import { Playhead } from "./components/Elements/Playhead";
import { playStarted, bpmChanged } from "./features/playhead/playheadSlice";

function App() {
  const instruments = useAppSelector(state => Object.values(state.instruments))
  const bpm = useAppSelector(state => state.playhead.bpm)

  const dispatch = useAppDispatch()

  function handleInstrumentsReset() {
    dispatch(sequenceReset())
  }

  function handlePlayStarted() {
    dispatch(playStarted())
  }

  function handleBpmChange(newBpm: string) {
    const integer = Number(newBpm)
    dispatch(bpmChanged(integer))
  }

  return (
    <>
      <Box>
        <Heading title="Boots and Cats" />
        <div className="p-4">

          {instruments.map((instrument) => <Instrument {...instrument} key={instrument.name} />)}
          <ThreeColumns centre={
            <Playhead />
          } />
          <ThreeColumns centre={
            <>
              <button className="bg-zinc-300 p-2 m-2" onClick={handlePlayStarted}>Play/Pause</button>
              <button className="bg-zinc-300 p-2 m-2" onClick={handleInstrumentsReset}>Reset</button>
              <input name="BPM" type="range" min="60" max="180" step="1" value={bpm} onChange={e => handleBpmChange(e.target.value)} />
            </>
          } />
        </div>
        <Footer>
        </Footer>
      </Box>
    </>
  );
}

export default App;
