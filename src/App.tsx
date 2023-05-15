import { useState } from "react";
import { Box } from "./components/Layout/Box";
import { Instrument, InstrumentProps } from "./components/Elements/Instrument";
import { Heading } from "./components/Layout/Heading";

function App() {
    const instruments: Array<InstrumentProps> = ["SD", "OH", "CH", "BD"].map(
        (name: string) => {
            const [mute, setMute] = useState(false);
            return {
                name: name,
                path: `../../../${name}.wav`,
                mute: mute,
                setMute: setMute,
            };
        }
    );

    return (
        <>
            <Heading title="Boots and Cats" />
            <Box children={instruments.map((instrument) => <Instrument {...instrument} />)} />
        </>
    );
}

export default App;
