import { GithubOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Link from "next/link";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <Layout.Footer className={classes.footer}>
      <small>
        © Copyright 2022{" "}
        <Link href="https://github.com/pandenutella" target="_blank">
          <GithubOutlined /> Pan de Nutella
        </Link>
        . All Rights Reserved.
      </small>
    </Layout.Footer>
  );
};

export default Footer;
