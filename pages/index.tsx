import { Button } from "antd";
import Head from "next/head";
import { useContext } from "react";
import AuthenticatedLayout from "../components/layout/AuthenticatedLayout";
import useAuthGuard from "../hooks/useAuthGuard";
import { AuthContext, AuthContextProvider } from "../store/auth-context";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  useAuthGuard();

  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <Head>
        <title>Enterprise Forms Platform</title>
      </Head>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </>
  );
};

Home.getLayout = (page) => (
  <AuthContextProvider>
    <AuthenticatedLayout>{page}</AuthenticatedLayout>
  </AuthContextProvider>
);

export default Home;
