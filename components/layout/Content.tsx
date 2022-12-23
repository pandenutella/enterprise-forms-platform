import { Layout } from "antd";
import React from "react";
import classes from "./Content.module.css";

type Props = {
  children: React.ReactNode;
};

const Content: React.FC<Props> = (props) => {
  return (
    <Layout.Content className={classes.content}>
      {props.children}
    </Layout.Content>
  );
};

export default Content;
