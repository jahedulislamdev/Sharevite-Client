import { useEffect, useState } from "react";
import GlobalContext from "./create_context";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import app from "../services/firebase.config";

const AuthContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const auth = getAuth(app);

   // register with email and password =
   const registerUser = async (email, password) => {
      setLoading(true);
      return await createUserWithEmailAndPassword(auth, email, password)
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
   const data = { user, loading, registerUser, loginUser, loginWithGoogle };

   return (
      <GlobalContext.Provider value={data}>
         {children}
      </GlobalContext.Provider>
   );
};

export default AuthContext;
