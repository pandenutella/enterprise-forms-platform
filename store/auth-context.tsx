import { message } from "antd";
import { createContext, FC, ReactNode, useState } from "react";
import { signInWithPassword } from "../services/accounts-service";
import { getErrorMessage } from "../utilities/service-utility";

type User = {
  email: string;
};

type ContextType = {
  user: User | null;
  authenticated: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

type ProviderProps = {
  children: ReactNode;
};

const initialValue: ContextType = {
  user: null,
  authenticated: false,
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = createContext<ContextType>(initialValue);

export const AuthContextProvider: FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const signIn = (email: string, password: string) => {
    signInWithPassword(email, password)
      .then((response) => {
        setUser({ email: response.data.email });
        setAuthenticated(true);
      })
      .catch((e) => {
        const { error } = e.response.data;
        if (error.code !== 400) return;

        message.error(getErrorMessage(error));
      });
  };

  const signOut = () => {
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        signIn: signIn,
        signOut: signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
