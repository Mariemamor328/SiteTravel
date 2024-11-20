import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import tripSlice from "./tripSlice";




export const store = configureStore({
  reducer: {
    trip: tripSlice,
    user: userSlice,
  
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
 
});
