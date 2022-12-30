import { Layout } from "antd";
import { FC, ReactNode } from "react";
import Footer from "../skeleton/Footer";
import classes from "./UnauthenticatedLayout.module.css";

type Props = {
  children: ReactNode;
};

const UnauthenticatedLayout: FC<Props> = ({ children }) => {
  return (
    <Layout className={classes.layout}>
      <Layout.Content className={classes.content}>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default UnauthenticatedLayout;
