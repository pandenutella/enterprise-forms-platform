import { GithubOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import moment from "moment";
import Link from "next/link";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  const year = moment().format("yyyy");

  return (
    <Layout.Footer className={classes.footer}>
      <small>
        © Copyright {`${year} `}
        <Link href="https://github.com/pandenutella" target="_blank">
          <GithubOutlined /> Pan de Nutella
        </Link>
        . All Rights Reserved.
      </small>
    </Layout.Footer>
  );
};

export default Footer;
