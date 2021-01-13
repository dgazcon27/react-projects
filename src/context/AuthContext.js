import React, { useEffect, useState } from "react";
import Firebase from "../utils/firebase";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    Firebase.auth()
      .signInAnonymously()
      .then((response) => {
        const { additionalUserInfo, user } = response;
        const payload = {
          userNew: additionalUserInfo.isNewUser,
          uid: user.uid,
        };
        setUser(payload);
        setShowChild(true);
      })
      .catch((error) => console.log(error));
    // setShowChild(true);
    // setUser({});
  }, []);

  if (!showChild) {
    return <div></div>;
  } else {
    return <Auth.Provider value={{ user }}>{children}</Auth.Provider>;
  }
};
