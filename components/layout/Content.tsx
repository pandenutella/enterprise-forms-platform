import { Layout } from "antd";
import { FC, ReactNode } from "react";
import classes from "./Content.module.css";

type Props = {
  children: ReactNode;
};

const Content: FC<Props> = (props) => {
  return (
    <Layout.Content className={classes.content}>
      {props.children}
    </Layout.Content>
  );
};

export default Content;
