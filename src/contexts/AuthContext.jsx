import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../services/firebase.config";
import AuthProvider from "./create_auth_context";
import { postRequest } from "../utils/apiClent";
import { toast } from "sonner";

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
   const loginWithGoogle = async (navigate, location) => {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
         .then(res => {
            setUser(res.user)
            toast.success("Login Successfull!", { duration: 1000 });
            navigate(location.state ? location.state : '/')
         })
         .catch((err) => {
            console.log("Error Logging In:", err);
            alert("Error Logging In");
         })
         .finally(() => setLoading(false));
   }
   // logout user
   const logoutUser = (navigate) => {
      setLoading(true);
      signOut(auth)
         .then(() => {
            // remove jwt from browser cookies
            postRequest("logout")
            setUser(null)
            toast.success("Logout Successfull!", { duration: 1000 })
            if (navigate) {
               navigate(`/login`)
            }
         })
         .catch(() => {
            toast.error("Logout Failed! please try again.")
         })
         .finally(() => setLoading(false))
   }

   // user observer spy
   useEffect(() => {
      setLoading(true);
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            // console.log("User logged in:", currentUser);
            const userCredential = { email: currentUser?.email };
            // call jwt api and get token
            postRequest("jwt", userCredential);
         } else {
            console.log("Currently No user logged in");
         }
         setUser(currentUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, [auth]);

   // provider data
   const data = { user, loading, setLoading, registerUser, loginUser, loginWithGoogle, logoutUser };

   return (
      <AuthProvider.Provider value={data}>
         {children}
      </AuthProvider.Provider>
   );
};

export default AuthContext;
