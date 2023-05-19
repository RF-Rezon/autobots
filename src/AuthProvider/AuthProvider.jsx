import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import application from "./app/app";

export const AuthContext = createContext(null);

const auth = getAuth(application);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const SignUp =(email, password)=>{
  return createUserWithEmailAndPassword(auth,email, password);
}
 // Sign In new Users

 const SignIn =(email, password)=>{
    setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
 }

 // Sign In with google 
 const provider = new GoogleAuthProvider();

 const Google = ()=> {
    setLoading(true)
   return signInWithPopup(auth, provider)
 }

 const LogOut =()=> {
    setLoading(true)
    signOut(auth)
 }



  // Check user exist or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {user, loading, SignUp, SignIn, LogOut, Google};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
