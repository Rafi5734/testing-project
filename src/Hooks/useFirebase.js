import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { initializeAuthentication } from "../Firebase/firebase.initialize";

initializeAuthentication();
const googleAuthProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const googleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({});
            })
            .catch((error) => {
                // An error happened.
            });
    };
    const [btn, setBtn] = useState([]);

    const handleBtn = () => {
        setBtn(+btn + 1);
    };

    return { user, signInUsingGoogle, googleSignOut, btn, handleBtn };
};
export default useFirebase;
