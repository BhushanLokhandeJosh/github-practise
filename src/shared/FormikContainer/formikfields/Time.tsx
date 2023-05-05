import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

interface IProps {
  label?: string;
  name: string;
  max?: string;
  min?: string;
  value?: string;
}

const Time = (props: IProps) => {
  const { label, name, max, min, value, ...other } = props;

  return (
    <>
      <label htmlFor={name} style={{ fontSize: "25px", fontWeight: "bold" }}>
        {label}
      </label>
      <Field
        type="time"
        name={name}
        min={min}
        max={max}
        className="form-control"
      ></Field>
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default Time;
