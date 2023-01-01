import { FilterOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ChangeEventHandler, FC } from "react";

type Props = {
  filter: string;
  onFilter: (filter: string) => void;
};

const FormFilter: FC<Props> = ({ filter, onFilter }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target?.value ?? "";

    onFilter(value);
  };

  return (
    <Input
      allowClear
      prefix={<FilterOutlined />}
      placeholder="Type anything to filter forms"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default FormFilter;
