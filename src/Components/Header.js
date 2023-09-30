import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { LOGO } from '../utils/Constants';
const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const handleSignOut=()=>{
        signOut(auth)
          .then(() => {
            navigate("/")
          })
          .catch((error) => {
           navigate("/error-page")
          });
    }

      useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName,photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });
         
        // unsubscribe the component with unmount 
        return () => unSubscribe()
      },[]);

  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-44" src={LOGO} alt="logo" />

        {user && (
          <div className="flex p-2">
            <img
              className="w-12 h-12 cursor-pointer"
              src={user?.photoURL}
              alt="signout"
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-white m-4"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header
