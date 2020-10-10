import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import sendIcon from "../icons/sendIcon.svg";
import { useCollectionData } from "react-firebase-hooks/firestore";
/* Firebase Imports */
import firebase from "firebase/app";

var aes256 = require("aes256");

function ChatRoom(props) {
  const dummy = useRef();
  const firestore = props.firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    document.getElementById("msg-input").focus();

    const { uid, photoURL } = props.auth.currentUser;
    setFormValue("");

    await messagesRef.add({
      text: aes256.encrypt(props.cryptoKey, formValue),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  useEffect(() => {
    dummy && dummy.current.scrollIntoView();
  }, [messages]);

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              cryptoKey={props.cryptoKey}
              auth={props.auth}
            />
          ))}
        <span ref={dummy} id="dummy"></span>
      </main>

      <form onSubmit={sendMessage} className="msg-form">
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          onClick={() => {
            setTimeout(() => {
              dummy.current.scrollIntoView();
            }, 300);
          }}
          placeholder="Type a message"
          id="msg-input"
        />
        <button type="submit" disabled={!formValue}>
          <img src={sendIcon} alt="send icon" />
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === props.auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={` ${messageClass} d-flex align-items-center`}>
        <img
          src={
            photoURL ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="Profile Pic"
          className="profile-img mb-auto"
        />
        {props.cryptoKey !== "" && (
          <p>{aes256.decrypt(props.cryptoKey, text)}</p>
        )}
      </div>
    </>
  );
}

export default ChatRoom;
