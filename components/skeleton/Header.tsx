import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import Link from "next/link";
import { FC, useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import classes from "./Header.module.css";

const Header: FC = () => {
  const { user, signOut } = useContext(AuthContext);

  const items: MenuProps["items"] = [
    {
      key: "USER",
      label: user?.email,
      icon: <UserOutlined />,
      children: [{ key: "SIGN_OUT", label: "Sign Out" }],
    },
  ];

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    if (key !== "SIGN_OUT") return;

    signOut();
  };

  return (
    <Layout.Header className={classes.header}>
      <Link className={classes.brand} href="/">
        EFP
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        onClick={handleClick}
      />
    </Layout.Header>
  );
};

export default Header;
