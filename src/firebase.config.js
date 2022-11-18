import firebase from "firebase/app";
import "firebase/auth";

const app = initializeApp({ 
REACT_APP_FIREBASE_API_KEY=AIzaSyCfcNoOkUsC4MMUahmBtrvii4mJSBoqL4I
REACT_APP_FIREBASE_AUTH_DOMAIN=homefinder-14d57.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=homefinder-14d57
REACT_APP_FIREBASE_STORAGE_BUCKET=homefinder-14d57.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1020934802885
REACT_APP_FIREBASE_APP_ID=1:1020934802885:web:8712be71a79969b8fc8fac
});

export default app;
export const auth = app.auth();