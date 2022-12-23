import Head from "next/head";
import AuthenticatedLayout from "../components/layout/AuthenticatedLayout";
import useAuthGuard from "../hooks/useAuthGuard";
import { AuthContextProvider } from "../store/auth-context";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  useAuthGuard();

  return (
    <>
      <Head>
        <title>Enterprise Forms Platform</title>
      </Head>
    </>
  );
};

Home.getLayout = (page) => (
  <AuthContextProvider>
    <AuthenticatedLayout>{page}</AuthenticatedLayout>
  </AuthContextProvider>
);

export default Home;
