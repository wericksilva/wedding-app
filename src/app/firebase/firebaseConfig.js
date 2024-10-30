// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDQ38MAKg_tjxCDJSyiqOX__p-dF_Tck8k",
  authDomain: "wedding-app-498a5.firebaseapp.com",
  databaseURL: "https://wedding-app-498a5-default-rtdb.firebaseio.com",
  projectId: "wedding-app-498a5",
  storageBucket: "wedding-app-498a5.appspot.com",
  messagingSenderId: "803169892033",
  appId: "1:803169892033:web:1c7906af3fed6f392e4640"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Realtime Database
const db = getDatabase(app);
const storage = getStorage(app);

export { db, storage };
