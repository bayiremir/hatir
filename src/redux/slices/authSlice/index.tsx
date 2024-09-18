import {createSlice} from '@reduxjs/toolkit';
import {storage} from '../../../utils/MMKV'; // MMKV ile durumu kalıcı yapıyoruz
import auth from '@react-native-firebase/auth';

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  successMessage: null, // Başarılı işlemler için bir alan ekliyoruz
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: state => {
      state.isLoggedIn = true;
      state.loading = false;
      storage.set('loginstatus', 'true'); // Durumu kalıcı hale getirmek için MMKV kullanıyoruz
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      storage.set('loginstatus', 'false'); // Oturumu kapatırken durumu sıfırlıyoruz
    },
    registerStart: state => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: state => {
      state.isLoggedIn = true;
      state.loading = false;
      storage.set('loginstatus', 'true'); // Durumu kalıcı hale getirmek için MMKV kullanıyoruz
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    passwordResetStart: state => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    passwordResetSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload; // Başarı mesajı
    },
    passwordResetFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
  passwordResetStart,
  passwordResetSuccess,
  passwordResetFailure,
} = authSlice.actions;

// Login Fonksiyonu
export const login = (email: any, password: any) => async (dispatch: any) => {
  dispatch(loginStart());
  try {
    await auth().signInWithEmailAndPassword(email, password);
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// Register Fonksiyonu
export const register =
  (email: any, password: any) => async (dispatch: any) => {
    dispatch(registerStart());
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      dispatch(registerSuccess());
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };

// Şifre Sıfırlama Fonksiyonu
export const sendPasswordResetEmail = (email: any) => async (dispatch: any) => {
  dispatch(passwordResetStart());
  try {
    await auth().sendPasswordResetEmail(email);
    dispatch(passwordResetSuccess('Password reset email sent successfully'));
  } catch (error) {
    dispatch(passwordResetFailure(error.message));
  }
};

export default authSlice.reducer;
