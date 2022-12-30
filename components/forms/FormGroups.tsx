import { FC } from "react";
import FormGroupType from "../../types/form-group-type";
import FormType from "../../types/form-type";
import FormGroup from "./FormGroup";

type Props = {
  formGroups: FormGroupType[];
  forms: FormType[];
};

const FormGroups: FC<Props> = ({ formGroups, forms }) => {
  return (
    <>
      {formGroups
        .map((formGroup) => {
          const formsInGroup = forms.filter(
            (form) => form.groupId === formGroup.id
          );

          if (!formsInGroup.length) return null;

          return (
            <FormGroup
              key={formGroup.id}
              name={formGroup.name}
              forms={formsInGroup}
            />
          );
        })
        .filter((formGroup) => formGroup)}
    </>
  );
};

export default FormGroups;
