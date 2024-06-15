import React, { createContext, useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import { auth } from "../../firebase_config";
import { getCollectionDB, getDB } from "../../utils/firebase/database";

const GlobalContext = createContext();

export function useApp() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [pending, setPending] = useState(true);
  const [posts, setPosts] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function logout() {
    const { signOut } = await import("firebase/auth");
    signOut(auth);
    setIsLoggedIn(false);
    router.push("/sign-in")
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setPending(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { auth } = await import("../../firebase_config");

      if (pending) return;
      if (auth.currentUser) {
        setLoadingPost(true);

        const { Data } = await getCollectionDB("posts");

        if (Data) {
          setPosts(Data);
        }
      }
    };

    fetchData();
  }, [auth.currentUser, pending]);

  const value = {
    logout,
    router,
    pending,
    posts,
    isLoggedIn,
    setPosts,
    setIsLoggedIn,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
