import { Layout } from "antd";
import { FC, ReactNode } from "react";
import Content from "../skeleton/Content";
import Footer from "../skeleton/Footer";

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
