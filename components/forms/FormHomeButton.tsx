import { Card } from "antd";
import { FC } from "react";

type Props = {
  label: string;
};

const FormHomeButton: FC<Props> = ({ label }) => {
  return (
    <Card size="small" hoverable>
      {label}
    </Card>
  );
};

export default FormHomeButton;
