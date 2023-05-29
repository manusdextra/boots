import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface PlayheadState {
  step: number,
  isPlaying: boolean,
  bpm: number,
}

const initialState = {
  step: 0,
  isPlaying: false,
  bpm: 120,
}

const playheadSlice = createSlice({
  name: "playhead",
  initialState: initialState,
  reducers: {
    playStarted(state: PlayheadState) {
      state.isPlaying = !state.isPlaying
    },
    bpmChanged(state: PlayheadState, action: PayloadAction<number>) {
      const newBpm = action.payload
      state.bpm = newBpm
    },
  },
})

export const { playStarted, bpmChanged } = playheadSlice.actions

export default playheadSlice.reducer
