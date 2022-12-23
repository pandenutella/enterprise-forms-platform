import { Layout } from "antd";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <Layout.Footer className={classes.footer}>
      <small>© Copyright 2022 Pan de Nutella. All Rights Reserved.</small>
    </Layout.Footer>
  );
};

export default Footer;
