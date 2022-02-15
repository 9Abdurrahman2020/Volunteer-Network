import { useEffect, useState } from "react";
import { initializeFirebase } from "../Firebase/firebaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [ user, setUser ] = useState(null);
    const [ modal, setModal ] = useState(false);
    const [ authError, setAuthError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isVolunteer, setIsVolunteer ] = useState(false)
    const [ volunteerLoading, setVolunteerLoading ] = useState(true)


    useEffect( ()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
                setIsLoading(false)
            }else{
                setUser(null)
                setIsLoading(false)
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

    const postVolunteerData = (data) =>{
        fetch('http://localhost:5000/volunteer',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then( res=> res.json())
        .then( response=>{
            console.log(response);
            if(response.acknowledged){
                setModal(true)
            }
        })
    }
    const getSingleVolunteer =(email)=>{
        fetch(`http://localhost:5000/volunteer/${email}`)
        .then(res=> res.json())
        .then( response => {
            if(response?.volunteer){
                setIsVolunteer(true)
                setVolunteerLoading(false)
            }
            // setVolunteerLoading(false)
        })
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
        setAuthError,
        isLoading,
        postVolunteerData,
        getSingleVolunteer,
        isVolunteer,
        volunteerLoading
    }
}
export default useFirebase;