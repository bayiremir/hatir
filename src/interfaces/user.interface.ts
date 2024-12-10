// userSlice.interface.ts
export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
  emailVerified: boolean;
}

export interface userSliceInitialStateType {
  firebaseUser: FirebaseUser | null;
  theme: 'dark' | 'light';
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  selectedDate: string;
  selectedNews: string;
}
