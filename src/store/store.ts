import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from './slices/darkModeSlice';

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice,
    },
});