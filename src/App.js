import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDsmq1z-RKRaQNXEtJKnlzgPydeu2ujVkI",
  authDomain: "superchat-a181a.firebaseapp.com",
  databaseURL: "https://superchat-a181a.firebaseio.com",
  projectId: "superchat-a181a",
  storageBucket: "superchat-a181a.appspot.com",
  messagingSenderId: "164910595920",
  appId: "1:164910595920:web:1fb9515c64f0283fc07655",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
