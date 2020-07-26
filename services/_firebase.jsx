import firebase from "firebase";

const config = {
  apiKey: process.env.NEXT_PUBLIC_apikey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.database();
