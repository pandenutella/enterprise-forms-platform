import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import Brand from "./Brand";
import classes from "./Header.module.css";

const Header: FC = () => {
  const router = useRouter();
  const { user, signOut } = useContext(AuthContext);

  const items: MenuProps["items"] = [
    {
      key: "USER",
      label: user?.email,
      icon: <UserOutlined />,
      children: [
        { key: "CHANGE_PASSWORD", label: "Change Password" },
        { key: "SIGN_OUT", label: "Sign Out" },
      ],
    },
  ];

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "CHANGE_PASSWORD") router.push("/change-password");
    if (key === "SIGN_OUT") signOut();
  };

  return (
    <Layout.Header className={classes.header}>
      <Brand text="Enterprise Forms Platform" href="/" />
      <Menu
        className={classes.menu}
        theme="dark"
        mode="horizontal"
        items={items}
        onClick={handleClick}
      />
    </Layout.Header>
  );
};

export default Header;
