import { auth } from "./_firebase.jsx";

export function signin(pers_cor_ele, pers_cla) {
  return auth().signInWithEmailAndPassword(pers_cor_ele, pers_cla);
}

export function signup(pers_cor_ele, pers_cla) {
  return auth().createUserWithEmailAndPassword(pers_cor_ele, pers_cla);
}

export function logout() {
  return auth().signOut();
}
