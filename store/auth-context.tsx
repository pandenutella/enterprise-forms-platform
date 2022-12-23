import { message } from "antd";
import { useRouter } from "next/router";
import { createContext, FC, ReactNode, useState } from "react";
import { signInWithPassword, update } from "../services/accounts-service";
import { getErrorMessage } from "../utilities/service-utility";

type User = {
  idToken: string | undefined;
  email: string | undefined;
};

type ContextType = {
  user: User | null;
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

export const AuthContext = createContext<ContextType>(initialValue);

export const AuthContextProvider: FC<ProviderProps> = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);

  const signIn = (email: string, password: string) => {
    setProcessing(true);

    signInWithPassword(email, password)
      .then((response) => {
        const user = {
          idToken: response.data.idToken,
          email: response.data.email,
        };

        localStorage.setItem("idToken", user.idToken);

        setUser({ idToken: user.idToken, email: user.email });
        setAuthenticated(true);

        message.success(`Welcome, ${user.email}!`);
        setProcessing(false);

        router.push("/");
      })
      .catch((e) => {
        const { error } = e.response.data;
        if (error.code !== 400) return;

        message.error(getErrorMessage(error));
        setProcessing(false);
      });
  };

  const signOut = () => {
    setUser(null);
    setAuthenticated(false);

    message.success("You have logged out successfully!");

    router.push("/sign-in");
  };

  const changePassword = (password: string) => {
    if (!user?.idToken) return;

    setProcessing(true);

    update(user.idToken, password)
      .then((response) => {
        const user = {
          idToken: response.data.idToken,
          email: response.data.email,
        };

        localStorage.setItem("idToken", user.idToken);
        setUser({ idToken: user.idToken, email: user.email });

        message.success("Your password has been changed successfully!");
        setProcessing(false);

        router.push("/");
      })
      .catch(() => {
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
