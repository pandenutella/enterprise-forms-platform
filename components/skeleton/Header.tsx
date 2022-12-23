import { Layout } from "antd";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return <Layout.Header className={classes.header}></Layout.Header>;
};

export default Header;
