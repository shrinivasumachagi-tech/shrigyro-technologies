import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Placeholder Firebase config - User should replace with actual project credentials
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "shrigyro-tech.firebaseapp.com",
  projectId: "shrigyro-tech",
  storageBucket: "shrigyro-tech.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Submit a lead inquiry to Firestore
 */
export const submitInquiry = async (data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  projectType?: string;
  formName?: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...data,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting inquiry: ", error);
    return { success: false, error };
  }
};

export { db };
