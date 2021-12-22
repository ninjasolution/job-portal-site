import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
import { FIREBASE_CONFIG } from '../containers';

const firebaseApp = initializeApp(FIREBASE_CONFIG);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
export const storageRef = ref(storage, 'job-site-files');

