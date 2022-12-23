import { useContext } from "react";
import ChangePasswordForm from "../components/authentication/ChangePasswordForm";
import UnauthenticatedLayout from "../components/layout/UnauthenticatedLayout";
import useAuthGuard from "../hooks/useAuthGuard";
import { AuthContext, AuthContextProvider } from "../store/auth-context";
import { NextPageWithLayout } from "./_app";

const ChangePasswordPage: NextPageWithLayout = () => {
  useAuthGuard();

  const { processing, changePassword } = useContext(AuthContext);

  return (
    <ChangePasswordForm
      processing={processing}
      onChangePassword={changePassword}
    />
  );
};

ChangePasswordPage.getLayout = (page) => (
  <AuthContextProvider>
    <UnauthenticatedLayout>{page}</UnauthenticatedLayout>
  </AuthContextProvider>
);

export default ChangePasswordPage;
