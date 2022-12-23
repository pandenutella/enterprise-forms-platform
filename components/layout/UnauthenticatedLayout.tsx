import { Layout } from "antd";
import { FC, ReactNode } from "react";
import Content from "../skeleton/Content";
import Footer from "../skeleton/Footer";
import classes from "./UnauthenticatedLayout.module.css";

type Props = {
  children: ReactNode;
};

const UnauthenticatedLayout: FC<Props> = ({ children }) => {
  return (
    <Layout className={classes.layout}>
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default UnauthenticatedLayout;
