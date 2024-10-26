import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import {mobileApi} from './services/mobileApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [mobileApi.reducerPath]: mobileApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(mobileApi.middleware),
});

export default store;
