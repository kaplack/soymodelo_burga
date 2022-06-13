import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  //const [checkingStatus, setCheckingStatus] = useState(true);
  //const isMounted = useRef(true);

  useEffect(() => {
    //if (isMounted) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      //setCheckingStatus(false);
    });
    // }
    //     return () => {
    //       isMounted.current = false;
    //     };
    //   }, [isMounted]);
  }, []);

  //console.log(loggedIn);

  return { loggedIn };
};

//https://firebase.google.com/docs/auth/web/manage-users?hl=es
//https://stackoverflow.com/questions/65505665/protected-route-with-firebase
//https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
