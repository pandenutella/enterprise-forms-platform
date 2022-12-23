import { Button } from "antd";
import Head from "next/head";
import { FC, useContext } from "react";
import useAuthGuard from "../hooks/useAuthGuard";
import { AuthContext } from "../store/auth-context";

const Home: FC = () => {
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

export default Home;
