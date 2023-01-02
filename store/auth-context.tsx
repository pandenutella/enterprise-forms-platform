import { message } from "antd";
import {
  signInWithEmailAndPassword,
  updatePassword,
  User,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase";
import { getErrorMessage } from "../utilities/service-utility";

type AuthUser = {
  idToken: string;
  email: string;
  id: string;
};

type ContextType = {
  user: AuthUser | null;
  authenticated: boolean;
  processing: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  changePassword: (password: string) => void;
};

type ProviderProps = {
  children: ReactNode;
};

const initialValue: ContextType = {
  user: null,
  authenticated: false,
  processing: false,
  signIn: (email, password) => {},
  signOut: () => {},
  changePassword: (password) => {},
};

const mapFirebaseUserToUser = (user: User | null) => {
  if (!user) return null;

  return {
    id: user.uid,
    email: user.email,
    idToken: user.accessToken,
  };
};

export const AuthContext = createContext<ContextType>(initialValue);

export const AuthContextProvider: FC<ProviderProps> = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const authUser = mapFirebaseUserToUser(user);

      setUser(authUser);
      setAuthenticated(!!authUser);
    });
  }, []);

  const signIn = (email: string, password: string) => {
    setProcessing(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;

        localStorage.setItem("idToken", user.accessToken);
        message.success(`Welcome, ${user.email}!`);
        router.push("/");
      })
      .catch((error) => {
        message.error(getErrorMessage(error));
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("idToken");
      message.success("You have signed out successfully!");
      router.push("/sign-in");
    });
  };

  const changePassword = (password: string) => {
    setProcessing(true);

    updatePassword(auth.currentUser, password)
      .then(() => {
        message.success("You have changed your password successfully!");
        router.push("/");
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        processing,
        signIn,
        signOut,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
