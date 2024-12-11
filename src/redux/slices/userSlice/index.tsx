// userSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  userSliceInitialStateType,
  FirebaseUser,
} from '../../../interfaces/user.interface';
import {storage} from '../../../utils/MMKV';
import auth from '@react-native-firebase/auth';

const getDefaultDate = () => {
  // Eğer selectedDate depoda varsa, onu al. Yoksa bugünün tarihini döndür.
  const storedDate = storage.getString('selectedDate');
  const today = new Date().toISOString().split('T')[0];
  return storedDate || today;
};
// Başlangıç durumu
const initialState: userSliceInitialStateType = {
  firebaseUser: null,
  theme: 'light',
  isLoggedIn: false,
  loading: false,
  error: null,
  selectedDate: getDefaultDate(),
  selectedNews: '',
};

// userSlice yapısı
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<FirebaseUser>) => {
      state.firebaseUser = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      storage.set('loginstatus', 'true');
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.firebaseUser = null;
      state.isLoggedIn = false;
      storage.set('loginstatus', 'false');
    },
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
      // Tarihi MMKV'ye kaydet
      storage.set('selectedDate', action.payload);
    },
    setSelectedNews: (state, action: PayloadAction<string>) => {
      state.selectedNews = action.payload;
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
export const {setSelectedDate, setSelectedNews} = userSlice.actions;

export default userSlice.reducer;
