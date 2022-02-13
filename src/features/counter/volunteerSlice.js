import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserDonationData = createAsyncThunk(
  'data/fetchDonationData',
  async () => {
    const response = await fetch('http://localhost:5000/causes')
    .then( res=> res.json())
    return response
  }
)
export const fetchEventData = createAsyncThunk(
  'data/fetchEventData',
  async () => {
    const response = await fetch('http://localhost:5000/events')
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
    exactEventData: [],
    paymentMethod:'online',
    donationAmount: '$10',
    paymentInfo:[]
  },
  reducers: {
    setExactDonateData:(state,action)=>{
      state.exactDonateData = action.payload;
    },
    setExactEventData:(state,action)=>{
      state.exactEventData = action.payload;
    },
    setPaymentMethod:(state,action)=>{
      state.paymentMethod = action.payload;
    },
    setDonationAmount:(state,action)=>{
      state.donationAmount = action.payload;
    },
    setPaymentInfo:(state,action)=>{
      state.paymentInfo = action.payload;
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
export const { setExactDonateData, setPaymentMethod, setDonationAmount, setPaymentInfo, setExactEventData } = volunteerSlice.actions

export default volunteerSlice.reducer;