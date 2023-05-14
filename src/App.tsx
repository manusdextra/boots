import { useState } from "react";
import { Box } from "./components/Layout/Center";
import { Instrument, InstrumentProps } from "./components/Elements/Instrument";

function App() {
    const instrumentList = ["SD", "OH", "CH", "BD"];
    const instruments: Array<InstrumentProps> = instrumentList.map(
        (name: string) => {
            const [mute, setMute] = useState(false);
            return {
                name: name,
                mute: mute,
                setMute: setMute,
            };
        }
    );

    return (
        <Box title="Boots and Cats" children={instruments.map((instrument) => <Instrument {...instrument} />)} />
    );
}

export default App;
