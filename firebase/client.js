import * as firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtJ4XOo4LVbgPsM9tq_E9sdeiYcRvgVw0",
  authDomain: "devter-71e62.firebaseapp.com",
  projectId: "devter-71e62",
  storageBucket: "devter-71e62.appspot.com",
  messagingSenderId: "320170789419",
  appId: "1:320170789419:web:43b9384e2e589461b5f86e",
  measurementId: "G-Z3TJGLFJMQ",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : user

    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
