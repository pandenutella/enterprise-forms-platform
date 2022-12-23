import { Layout } from "antd";
import { FC, ReactNode } from "react";
import Content from "./Content";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const UnauthenticatedLayout: FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default UnauthenticatedLayout;
