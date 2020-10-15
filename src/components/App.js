/* React Imports */
import React, { useState } from "react";
import "./App.css";
/* Firebase Imports */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
/* Firebase Hooks Imports */
import { useAuthState } from "react-firebase-hooks/auth";
/* Icons Imports */
import googleIcon from "../icons/googleIcon.svg";
/* Components Import */
import ChatRoom from "./ChatRoom";

require("dotenv").config();

firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));
const auth = firebase.auth();

// const bcrypt = require("bcryptjs");

function App() {
  const [user] = useAuthState(auth);
  const [key, setKey] = useState("");

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand">
          <h1>
            <span role="img" aria-label="msg">
              💬
            </span>
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          id="navbar-btn"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            {key !== "" && (
              <li className="nav-item">
                <a className="nav-link">
                  <ClearChat />
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link">
                <SignOut className="mb-3" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section>
        {user ? (
          key === "" ? (
            <CryptoKey setKey={(key) => setKey(key)} />
          ) : (
            <ChatRoom cryptoKey={key} auth={auth} firebase={firebase} />
          )
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

function CryptoKey(props) {
  setTimeout(() => {
    document.getElementById("key-input").focus();
  }, 100);

  // const db = firebase.firestore();

  const verifyKey = (e) => {
    e.preventDefault();
    props.setKey(document.getElementById("key-input").value);
    // const inputKey = document.getElementById("key-input").value;
    // var docRef = db.collection("cryptoKey").doc("details");
    // docRef
    //   .get()
    //   .then(function (doc) {
    //     if (doc.exists) {
    //       //Checking account status.
    //       if (!doc.data().status) {
    //         alert("Account Blocked! Contact Admin!");
    //         return;
    //       }
    //       // Validating the crypto Key.
    //       if (bcrypt.compareSync(inputKey, doc.data().key)) {
    //         props.setKey(inputKey);
    //       } else {
    //         alert("Wrong Crypto Key!");
    //         document.getElementById("key-input").value = "";
    //         document.getElementById("key-input").focus();
    //         //Limiting wrong attempts.
    //         if (doc.data().wrongAttempts >= 10000) {
    //           db.collection("cryptoKey")
    //             .doc("details")
    //             .update({
    //               wrongAttempts: firebase.firestore.FieldValue.increment(1),
    //               status: false,
    //             });
    //         } else {
    //           db.collection("cryptoKey")
    //             .doc("details")
    //             .update({
    //               wrongAttempts: firebase.firestore.FieldValue.increment(1),
    //             });
    //         }
    //       }
    //     } else {
    //       alert("Please check your network connection!");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log("Error getting document:", error);
    //   });
  };

  return (
    <>
      <form className="crypto-from">
        <div className="form-group">
          <label>
            <h3>Enter Crypto Key</h3>
          </label>
          <input type="password" className="form-control" id="key-input" />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="key-btn"
          onClick={verifyKey}
        >
          Submit
        </button>
        <small className="form-text text-muted mt-5">
          • (For Demo) Crypto key is "demo".
        </small>
        <small className="form-text text-muted">
          • Once try entering any wrong key also{" "}
          <span role="img" aria-label="blink">
            😉.
          </span>
        </small>
        <small className="form-text text-muted">
          • We can also block account if user enters wrong key many times.
        </small>
      </form>
    </>
  );
}

function SignIn() {
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const signInAnonymously = () => {
    setLoading(true);
    firebase
      .auth()
      .signInAnonymously()
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <button
        className="btn btn-info btn-lg sign-in "
        onClick={signInAnonymously}
      >
        {loading ? (
          <>
            <span
              class="spinner-border spinner-border mr-2"
              role="status"
              aria-hidden="true"
            ></span>
            Logging in...
          </>
        ) : (
          <>
            <img
              alt="Anonymous Mask icon"
              src="https://img.icons8.com/ios/344/anonymous-mask.png"
            ></img>
            <span style={{ color: "black" }}>Log in Anonymously</span>
          </>
        )}
      </button>
      <button
        className="btn btn-light btn-lg sign-in mt-4"
        onClick={signInWithGoogle}
      >
        <img src={googleIcon} alt="Google Icon" />
        <span className="ml-3">Log in with Google</span>
      </button>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="btn btn-danger sign-out"
        onClick={() => {
          auth.signOut();
          document.getElementById("navbar-btn").click();
        }}
      >
        Sign Out
      </button>
    )
  );
}

function ClearChat() {
  const db = firebase.firestore();

  var devNote = [
    "2FzVSgbCMZYQXfJendY2",
    "H5PcCZb5mziybihyO6de",
    "ImzRj5F8FLs9hUsr8k79",
    "LJC4Fa3Sg1AEVv6ou0K3",
    "xq4rwYo5KyYPQfmuSQP2xq4rwYo5KyYPQfmuSQP2",
  ];

  const handleClear = () => {
    if (window.confirm("Are you sure to delete all chat?")) {
      db.collection("messages")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            if (!devNote.includes(doc.id)) {
              db.collection("messages").doc(doc.id).delete();
            }
          });
          document.getElementById("navbar-btn").click();
        });
    }
  };

  return (
    auth.currentUser && (
      <button className="btn btn-outline-info sign-out" onClick={handleClear}>
        Clear Chat
      </button>
    )
  );
}

export default App;
