import { Field, ErrorMessage } from "formik";
import FormError from "./FormError";
import { ReactElement } from "react";

import "./styles/style.css";

interface IProps {
  label?: string;
  name: string;
  options?: { key: string; value: string}[];
  className?:string
  onClick?:() => void
}

const Select = (props: IProps): ReactElement => {
  const { label, name, options,className,onClick, ...other } = props;
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>

      <Field
        as="select"
        id={name}
        name={name}
        // onClick={}
        {...other}
        className={className}
      >
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>

      <div>
        <ErrorMessage name={name} component={FormError} />
      </div>
    </>
  );
};

export default Select;
