import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import application from "./app/app";

export const AuthContext = createContext(null);

const auth = getAuth(application);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedUser, setloggedUser] = useState(false);


 // Sign Up new Users
 const SignUp = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 }

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
      setloggedUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {user, loggedUser, loading, SignUp, SignIn, LogOut, Google};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
