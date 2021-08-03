import { createSlice } from '@reduxjs/toolkit'

const initialState = '';

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    updateEmail: (state, action) => action.payload
  },
})

// Action creators are generated for each case reducer function
export const { updateEmail } = emailSlice.actions

export default emailSlice.reducer;