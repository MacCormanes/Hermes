import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuqmt919C3kJyQSYaPJN-CiCxxarLnqpk",
  authDomain: "hermes-393702.firebaseapp.com",
  projectId: "hermes-393702",
  storageBucket: "hermes-393702.appspot.com",
  messagingSenderId: "90137463934",
  appId: "1:90137463934:web:b1e1f03afc016949945c2f",
  measurementId: "G-TCJHMDCRS5",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();

// Add Documents to firestore db
export const addCollectionAndDocuments =  async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title);
    batch.set(docRef, object)
  });

  await batch.commit();
  console.log('done');
}

// Create a categories map by fetching to firestore
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data()
    acc[title] = items;
    return acc;
  }, {})

  return categoryMap;
}

// Google Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogleRedirect = () =>{
  signInWithRedirect(auth, googleProvider).then();
}

// Yahoo Provider
const yahooProvider = new OAuthProvider('yahoo.com');
export const signInWithYahooRedirect = () => signInWithRedirect(auth, yahooProvider);

// Email And Password Provider
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  
  return await signInWithEmailAndPassword(auth, email, password);
}

// SignOut Method
export const signOutUser = async () => {
  await signOut(auth);
}

// AuthStateListener
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}


// Add new user to firestore and firebase auth users
export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  
  const userDocRef = doc(db, "users", userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
      if (displayName === null){
        await setDoc(userDocRef, {
          displayName: additionalInformation,
          email,
          createdAt,
      })
      }

    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
