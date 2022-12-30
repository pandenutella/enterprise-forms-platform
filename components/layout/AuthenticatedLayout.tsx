import { Layout } from "antd";
import { FC, ReactNode } from "react";
import Footer from "../skeleton/Footer";
import Header from "../skeleton/Header";
import classes from "./AuthenticatedLayout.module.css";

type Props = {
  children: ReactNode;
};

const AuthenticatedLayout: FC<Props> = ({ children }) => {
  return (
    <Layout className={classes.layout}>
      <Header />
      <Layout.Content className={classes.content}>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default AuthenticatedLayout;
