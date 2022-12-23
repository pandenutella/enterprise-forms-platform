import { Button, Card, Form, Input } from "antd";
import { FC } from "react";

import classes from "./SignInForm.module.css";

type Props = {
  onSignIn: (email: string, password: string) => void;
};

const SignInForm: FC<Props> = ({ onSignIn }) => {
  const handleSignIn = (values: any) => {
    const { email, password } = values;

    onSignIn(email, password);
  };

  return (
    <Card className={classes.form}>
      <Form layout="vertical" onFinish={handleSignIn}>
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignInForm;
