import { useContext } from "react";
import SignInForm from "../components/authentication/SignInForm";
import UnauthenticatedLayout from "../components/layout/UnauthenticatedLayout";
import useUnauthGuard from "../hooks/useUnauthGuard";
import { AuthContext, AuthContextProvider } from "../store/auth-context";
import { NextPageWithLayout } from "./_app";

const SignInPage: NextPageWithLayout = () => {
  useUnauthGuard();

  const { authenticating, signIn } = useContext(AuthContext);

  return <SignInForm authenticating={authenticating} onSignIn={signIn} />;
};

SignInPage.getLayout = (page) => (
  <AuthContextProvider>
    <UnauthenticatedLayout>{page}</UnauthenticatedLayout>
  </AuthContextProvider>
);

export default SignInPage;
