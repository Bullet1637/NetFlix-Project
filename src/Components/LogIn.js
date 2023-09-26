import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorState, setErrorState] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
     const dispatch = useDispatch();
  // console.log(email.current.value);
  // console.log(password.current.value);
  const handleFormSubmit = () => {
    // validation part

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorState(message);

    if (message) return;
    if (!isSignInForm) {
      // sign in form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value, 
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media-bom1-1.cdn.whatsapp.net/v/t61.24694-24/347530193_1004855944218458_5963343001693566115_n.jpg?ccb=11-4&oh=01_AdQjIQHgg_7bvi9NS1H1U3I7SgTXOYjQXAHZO-bwfEBtYw&oe=65204568&_nc_sid=000000&_nc_cat=102",
          })
            .then(() => {
                 const { uid, email, displayName, photoURL } = auth.currentUser;
                 dispatch(
                   addUser({
                     uid: uid,
                     email: email,
                     displayName: displayName,
                     photoURL: photoURL,
                   })
                 );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorState(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorState(errorCode + "-" + errorMessage);
        });
    } else {
      // sign up form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorState(errorCode + "-" + errorMessage);
        });
    }

    //    sign in sign Up logic
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />

        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-600 font-bold py-2">{errorState}</p>
          <button
            onClick={handleFormSubmit}
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Register Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default LogIn;
