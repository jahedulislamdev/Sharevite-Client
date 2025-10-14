import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../services/firebase.config";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useAxiosPublic from "../hooks/useAxiosPublic";
import usePatchData from '../hooks/usePatchData';
import { AuthContext } from "./create_auth_context";
``
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const auth = getAuth(app);
   const axiosPublic = useAxiosPublic();

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
   const { mutate: updateUserData } = usePatchData("users/:email", "", "updatedUser", true);
   const loginWithGoogle = async (navigate) => {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
         .then(res => {
            const userData = {
               name: res.user.displayName,
               email: res.user.email,
               photoUrl: res.user.photoURL,
               lastLogin: new Date(),
               provider: res.user.providerData[0]?.providerId,
               uId: res.user.uid,
            }
            // console.log(userData);
            updateUserData(userData)

            setUser(res.user)
            toast.success("Login Successfull!", { duration: 1000 });
            navigate('/')
         })
         .catch((err) => {
            console.log("Error Logging In:", err);
            toast.error("Faild Logging In! Try Again.");
         })
         .finally(() => setLoading(false));
   }
   // logout user
   const logoutUser = (navigate) => {
      setLoading(true);
      signOut(auth)
         .then(() => {
            setUser(null)
            // remove jwt token
            axiosPublic.post('logout')
            toast.success("Logout successfull!", { duration: 1000 })
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
         // setuser to state 
         // JWT set when user logs in
         if (currentUser) {
            const userCredential = { email: currentUser?.email };
            axiosPublic.post("jwt", userCredential).catch(err => console.error("Error setting token", err));
         } else {
            console.log("Currently No user logged in");
         }
         setUser(currentUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   // provider data
   const data = { user, loading, setLoading, registerUser, loginUser, loginWithGoogle, logoutUser };

   return (
      <AuthContext.Provider value={data}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
