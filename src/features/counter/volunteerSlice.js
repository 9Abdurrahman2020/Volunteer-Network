import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserDonationData = createAsyncThunk(
  'data/fetchDonationData',
  async () => {
    const response = await fetch('./FakeData/FakeData.json')
    .then( res=> res.json())
    return response
  }
)
export const fetchEventData = createAsyncThunk(
  'data/fetchEventData',
  async () => {
    const response = await fetch('./FakeData/eventData.json')
    .then( res=> res.json())
    return response
  }
)


export const volunteerSlice = createSlice({
  name: 'counter',
  initialState: {
    donationData: [],
    eventData: []
  },
  reducers: {

  },
  extraReducers: (builder)=>{
    builder.addCase(fetchUserDonationData.fulfilled,(state, action)=>{
      state.donationData = action.payload;

    })
    builder.addCase(fetchEventData.fulfilled,(state, action)=>{
      state.eventData = action.payload;

    })
  }
})

// Action creators are generated for each case reducer function
export const { } = volunteerSlice.actions

export default volunteerSlice.reducer