import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../services/firebase.config";
import AuthProvider from "./create_auth_context";
import { postRequest } from "../utils/apiClent";

const AuthContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const auth = getAuth(app);

   // register with email and password =
   const registerUser = async (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
         .finally(() => setLoading(false));
   }

   // login with email and password
   const loginUser = async (email, password) => {
      setLoading(true);
      return await signInWithEmailAndPassword(auth, email, password)
         .finally(() => setLoading(false));
   }

   // login with google
   const loginWithGoogle = async () => {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
         .then(res => {
            setUser(res.user)
            console.log("User Logged In:", res.user);
            alert("User Logged In Successfully");
         })
         .catch((err) => {
            console.log("Error Logging In:", err);
            alert("Error Logging In");
         })
         .finally(() => setLoading(false));
   }
   // logout user
   const logoutUser = () => {
      setLoading(true);
      signOut(auth)
         .then(() => {
            postRequest("logout")
            setUser(null)
         })
         .catch(err => console.error(err))
         .finally(() => setLoading(false))
   }

   // user observer spy
   useEffect(() => {
      setLoading(true);
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user);
         setLoading(false);
      });
      return () => unsubscribe();
   }, [auth]);

   // provider data
   const data = { user, loading, registerUser, loginUser, loginWithGoogle, logoutUser };

   return (
      <AuthProvider.Provider value={data}>
         {children}
      </AuthProvider.Provider>
   );
};

export default AuthContext;
