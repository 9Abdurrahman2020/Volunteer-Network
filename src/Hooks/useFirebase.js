import { useEffect, useState } from "react";
import { initializeFirebase } from "../Firebase/firebaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [ user, setUser ] = useState(null);
    const [ modal, setModal ] = useState(false);
    const [ authError, setAuthError ] = useState('')


    useEffect( ()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
    },[])

    const googleSignIn = () =>{
        setAuthError('')
        signInWithPopup(auth,provider)
        .then( result =>{
            setUser(result.user)
        })
        .catch( error =>{ 
            setAuthError(error.message)
        })
    }

    const registerUser = ( user ) =>{
        setAuthError('')
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then( result => {
            setUser(result.user)
            updateProfile(auth.currentUser, {
                displayName: user.name})
                .then(() => {

                    setModal(true)

              }).catch((error) => {
                setAuthError(error.message)
              });
        })
        .catch( error =>{
            setAuthError(error.message)
        })
    }

    const loginUser = ({email,password} ) =>{
        setAuthError('')
        signInWithEmailAndPassword( auth, email, password )
        .then( result => {
            setUser(result.user)
            setModal(true)
        })
        .catch( error =>{
            setAuthError(error.message)
        })
    }

    const logOut = () =>{
        setAuthError('')
        signOut(auth).then(() => {
            setUser(null)
          }).catch((error) => {
            setAuthError(error.message)
          });
    }

    return{
        user,
        googleSignIn,
        registerUser,
        modal,
        setModal,
        loginUser,
        logOut,
        authError,
        setAuthError
    }
}
export default useFirebase;