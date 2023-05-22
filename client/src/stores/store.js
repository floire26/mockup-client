import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "../features/contactsSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsSlice
    }
})
