import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/Constants";
import { toggleGPTAction } from "../utils/gptSlice";
import { changeLanguage } from "../utils/ConfigSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector(
    (store) => store?.gptSearch?.toggleGPTSearch
  );
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error-page");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
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
        navigate("/");
      }
    });

    // unsubscribe the component with unmount
    return () => unSubscribe();
  }, []);

  const handleGPTSearch = () => {
    // toggle gpt
    dispatch(toggleGPTAction());
  };

  const handleLangChange = (e) =>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-44" src={LOGO} alt="logo" />

        {user && (
          <div className="flex p-2">
            {showGPTSearch && (
              <select
                className="m-2 p-2 bg-gray-900 text-white"
                onChange={handleLangChange}
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="rounded-lg  px-2 mx-4 text-xl font-bold text-black bg-purple-500"
              onClick={handleGPTSearch}
            >
              {showGPTSearch ? "Home Page" : " GPT Search"}
            </button>
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
};

export default Header;
