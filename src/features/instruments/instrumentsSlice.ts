import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InstrumentProps } from '../../components/Elements/Instrument';

interface InstrumentsState {
  [name: string]: InstrumentProps
}

interface StepChangePayload {
  instrument: string,
  step: number,
}

const initialSequence: Array<boolean> = [
  false, false, false, false,
  false, false, false, false,
  false, false, false, false,
  false, false, false, false,
]

const instruments: InstrumentsState = ["SD", "OH", "CH", "BD"].reduce(
  (acc, cur) => {
    const instrument = {
      name: cur,
      path: `../../../${cur}.wav`,
      mute: false,
      sequence: initialSequence,
    }
    return { ...acc, [cur]: instrument }
  }, {}
);

const instrumentsSlice = createSlice({
  name: "instruments",
  initialState: instruments,
  reducers: {
    stepToggled: (state: InstrumentsState, action: PayloadAction<StepChangePayload>) => {
      const instrument = action.payload.instrument
      const step = action.payload.step
      state[instrument].sequence[step] = !state[instrument].sequence[step]
    },
    instrumentMuted(state: InstrumentsState, action: PayloadAction<string>) {
      const instrument = action.payload
      state[instrument].mute = !state[instrument].mute
    }
  },
})

export const { stepToggled, instrumentMuted } = instrumentsSlice.actions

export default instrumentsSlice.reducer
