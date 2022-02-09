import { configureStore } from '@reduxjs/toolkit';
import volunteerSlice from '../features/counter/volunteerSlice';

export const store = configureStore({
  reducer: {
    volunteerData: volunteerSlice
  },
});
