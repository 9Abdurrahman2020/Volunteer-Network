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
    eventData: [],
    exactDonateData: [],
    paymentMethod:'online',
    donationAmount: '$100'
  },
  reducers: {
    setExactDonateData:(state,action)=>{
      state.exactDonateData = action.payload;
    },
    setPaymentMethod:(state,action)=>{
      state.paymentMethod = action.payload;
    },
    setDonationAmount:(state,action)=>{
      state.donationAmount = action.payload;
    }
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
export const { setExactDonateData, setPaymentMethod, setDonationAmount } = volunteerSlice.actions

export default volunteerSlice.reducer;