import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { auth } from "../../firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { createDB, getDB } from "@/utils/firebase/database";

// Define the user type based on your Firebase user object
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  city: string | null;
  state: string | null;
  showAddressLine: string | null;
  address: string | null;
  email_isVerified: string | null | boolean;
  zipcode: string | null;
  joinAt: string | null;
}

interface AuthContextType {
  user: User | null;
  signup: (
    email: string,
    password: string,
    username: string,
    profileUrl: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userdata = await getDB("users", firebaseUser.uid);
        if (userdata) {
          setUser(userdata?.data?? null);
          setIsAuthenticated(true);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const login = async (email: string, password: string): Promise<void> => {
    try {
    } catch (error) {
      console.error("Login error", error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const signup = async (
    email: string,
    password: string,
    username: string,
    profileUrl: string
  ): Promise<any> => {
    try {
      return { success: true, data: {} };
    } catch (error) {
      return { success: false, error };
    }
  };

  const value = {
    user,
    signup,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
