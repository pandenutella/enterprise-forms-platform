import { Layout } from "antd";
import type { AppProps } from "next/app";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import "../styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
