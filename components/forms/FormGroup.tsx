import { Col, Divider, Row } from "antd";
import { FC } from "react";
import FormType from "../../types/form-type";
import FormHomeButton from "./FormHomeButton";

type Props = {
  name: string;
  forms: FormType[];
};

const FormGroup: FC<Props> = ({ name, forms }) => {
  return (
    <>
      <Divider orientation="left">{name}</Divider>
      <Row gutter={[5, 5]}>
        {forms.map((form) => (
          <Col key={form.id}>
            <FormHomeButton label={form.name} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FormGroup;
