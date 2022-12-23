import { Layout } from "antd";
import { FC, ReactNode } from "react";
import Content from "./Content";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const AuthenticatedLayout: FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default AuthenticatedLayout;
