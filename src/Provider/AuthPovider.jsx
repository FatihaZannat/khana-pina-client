import { createContext,  useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import AxiosPublic from "../hooks/AxiosPublic";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const authContext = createContext()

const AuthPovider = ({ children }) => {
    const axiosPublic = AxiosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email , password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const signInUser = (email, password) => {
        setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
       return signOut(auth)
    }
    const updateUser = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
      const subscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            // console.log('authProvider currentUser', currentUser);
            if(currentUser){
                axiosPublic.post('/jwt', {email: currentUser.email})
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
                .catch(err => console.log(err))
            }else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
           
        })

        return () => {
            subscribe()
        }
    },[axiosPublic])
// console.log(user);
    const authInfo = {
        user,
        createNewUser,
        signInUser,
        googleSignIn,
        loading,
        logOut,
        updateUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthPovider;