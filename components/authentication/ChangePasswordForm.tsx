import { Button, Card, Form, Input, Space } from "antd";
import { useRouter } from "next/router";
import { FC } from "react";

import classes from "./ChangePasswordForm.module.css";

type Props = {
  processing: boolean;
  onChangePassword: (password: string) => void;
};

const ChangePasswordForm: FC<Props> = ({ processing, onChangePassword }) => {
  const router = useRouter();

  const handleChangePassword = (values: any) => {
    const { password } = values;

    onChangePassword(password);
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <Card className={classes.form} title="Change Password">
      <Form layout="vertical" onFinish={handleChangePassword}>
        <Form.Item
          label="New Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label="Confirm New Password"
          name="confirmPassword"
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue("password") === value)
                  return Promise.resolve();

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item className={classes["action-button-group"]}>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={processing}
              disabled={processing}
            >
              Confirm
            </Button>
            <Button htmlType="button" onClick={handleCancel}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ChangePasswordForm;
