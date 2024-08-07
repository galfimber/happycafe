import { useEffect, useState } from "react";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function useAuth(auth) {
  const [authentication, setAuthentication] = useState(null);

  const provider = new GoogleAuthProvider();

  const logIn = () => signInWithPopup(auth, provider);

  const logOut = () =>
    signOut(auth)
      .then(() => {})
      .catch((err) => console.error(err));

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthentication(user);
      } else {
        setAuthentication(null);
      }
    });
  }, [authentication]);

  return { authentication, logIn, logOut };
}
