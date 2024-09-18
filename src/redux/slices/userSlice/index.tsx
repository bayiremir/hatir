// userSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  userSliceInitialStateType,
  FirebaseUser,
} from '../../../interfaces/user.interface';
import {storage} from '../../../utils/MMKV'; // MMKV kullanımı için
import auth from '@react-native-firebase/auth';

// Başlangıç durumu
const initialState: userSliceInitialStateType = {
  firebaseUser: null,
  theme: 'light',
  isLoggedIn: false,
  loading: false,
  error: null,
};

// userSlice yapısı
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Firebase kullanıcı oturumu başladığında
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    // Giriş başarılı olduğunda
    loginSuccess: (state, action: PayloadAction<FirebaseUser>) => {
      state.firebaseUser = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      storage.set('loginstatus', 'true'); // Durumu kalıcı hale getir
    },
    // Giriş başarısız olduğunda
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Kullanıcı oturumu kapattığında
    logout: state => {
      state.firebaseUser = null;
      state.isLoggedIn = false;
      storage.set('loginstatus', 'false'); // Oturumu kapat
    },
    // Temayı değiştirme
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
    },
  },
});

// Asenkron Firebase giriş işlemleri için
export const login =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch(userSlice.actions.loginStart());
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const firebaseUser: FirebaseUser = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
        phoneNumber: userCredential.user.phoneNumber,
        emailVerified: userCredential.user.emailVerified,
      };
      dispatch(userSlice.actions.loginSuccess(firebaseUser));
    } catch (error: any) {
      dispatch(userSlice.actions.loginFailure(error.message));
    }
  };

// Oturum kapatma işlemi
export const logout = () => (dispatch: any) => {
  auth().signOut();
  dispatch(userSlice.actions.logout());
};

// Temayı değiştirme
export const setTheme = (theme: 'dark' | 'light') => (dispatch: any) => {
  dispatch(userSlice.actions.setTheme(theme));
};

export default userSlice.reducer;
