import React from 'react'
import { auth } from '../utils/Firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    const navigate = useNavigate()
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
console.log(user?.photoURL);
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

       {user && <div className="flex p-2">
          <img
            className="w-12 h-12 cursor-pointer"
            src={user?.photoURL}
            alt="signout"
          />
          <button onClick={handleSignOut} className="font-bold text-white m-4">
            Sign out
          </button>
        </div>}
      </div>
    </>
  );
}

export default Header
