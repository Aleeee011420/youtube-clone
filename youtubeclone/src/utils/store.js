import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice"

import searchSlice from "./searchSlice";

 export const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat:chatSlice,
   
  },
});

