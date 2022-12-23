import { Button, Card, Form, Input } from "antd";
import { FC } from "react";

import classes from "./SignInForm.module.css";

type Props = {
  authenticating: boolean;
  onSignIn: (email: string, password: string) => void;
};

const SignInForm: FC<Props> = ({ authenticating, onSignIn }) => {
  const handleSignIn = (values: any) => {
    const { email, password } = values;

    onSignIn(email, password);
  };

  return (
    <Card className={classes.form} title="Sign In">
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
        <Form.Item className={classes["action-button-group"]}>
          <Button
            type="primary"
            htmlType="submit"
            loading={authenticating}
            disabled={authenticating}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignInForm;
