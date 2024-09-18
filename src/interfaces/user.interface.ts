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
  firebaseUser: FirebaseUser | null; // Firebase kullanıcı bilgileri
  theme: 'dark' | 'light'; // Tema bilgisi
  isLoggedIn: boolean; // Kullanıcının giriş durumu
  loading: boolean; // Yüklenme durumu
  error: string | null; // Hata mesajı
}
