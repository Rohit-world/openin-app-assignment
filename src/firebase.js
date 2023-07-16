
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
 //.env
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider= new GoogleAuthProvider()
export{auth,provider}