import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user,setUser]= useState(null);
  const [loading,setLoading]= useState(true);
  const googleProvider = new GoogleAuthProvider();


//   create user
   const createUser = (email,password) => {
     setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password);
   }

//    google 
   const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }

//    sign in user

const signInUser = (email,password)=> {
     setLoading(true);
     return signInWithEmailAndPassword(auth,email,password);
}

const logOut= () => {
     setLoading(true);
     signOut(auth)
     .then(result => {
          console.log(result.user);
     })
     .catch(err => {
          console.log(err);
     })
     
}


    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
          setLoading(false)
          console.log('Current user', currentUser);
          setUser(currentUser);
    })

       return () => unSubscribe();
    },[])

    const authInfo ={
         user,
         loading,
         createUser,
         signInUser,
         logOut,
         signInWithGoogle

    } 
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;