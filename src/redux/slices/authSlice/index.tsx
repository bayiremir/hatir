import {createSlice} from '@reduxjs/toolkit';
import {storage} from '../../../utils/MMKV'; // MMKV ile durumu kalıcı yapıyoruz
import auth from '@react-native-firebase/auth';

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  successMessage: null, // Başarılı işlemler için bir alan ekliyoruz
  rememberMe: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
      state.rememberMe = action.payload.rememberMe;
      storage.set('loginstatus', 'true');

      if (action.payload.rememberMe) {
        storage.set('userEmail', action.payload.email); // Eğer Remember Me işaretli ise email'i sakla
      }
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      storage.set('loginstatus', 'false');
      storage.delete('userEmail'); // Oturum kapatılırken email'i sil
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
    resetError: state => {
      state.error = null;
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
export const login =
  (email: any, password: any, rememberMe: boolean) => async (dispatch: any) => {
    dispatch(loginStart());
    try {
      await auth().signInWithEmailAndPassword(email, password);
      dispatch(loginSuccess({email, rememberMe}));
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

// Hata Sıfırlama Fonksiyonu
export const resetError = () => (dispatch: any) => {
  dispatch(authSlice.actions.resetError());
};

export default authSlice.reducer;
