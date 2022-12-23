import { FC, useContext } from "react";
import SignInForm from "../components/authentication/SignInForm";
import useUnauthGuard from "../hooks/useUnauthGuard";
import { AuthContext } from "../store/auth-context";

const SignInPage: FC = () => {
  useUnauthGuard();

  const { signIn } = useContext(AuthContext);

  return <SignInForm onSignIn={signIn} />;
};

export default SignInPage;
