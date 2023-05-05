import React from "react";
import {
  MinOrSecOptions,
  dailyInitialProps,
  minuteOrSecondInterval,
  scheduleOptions,
  timeInterval,
} from "../../constant";
import { Form, Formik } from "formik";
import FormikControl from "../../../../shared/FormikContainer/formikControl";
import { Button } from "@mui/material";
import "../styles/style.css";

interface IProps {
  intialValue: dailyInitialProps;
  validationSchema: any;
  formikValue: any;
  onSubmit: (values: any) => void;
}

const DailyScheduling = (props: IProps) => {
  const { intialValue, validationSchema, formikValue, onSubmit } = props;
  return (
    <Formik
      initialValues={intialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <FormikControl
            control="select"
            name="atWhatTime"
            options={timeInterval}
            className="form-control"
          />
          {values.atWhatTime === "MIN/SEC" ? (
            <>
              <FormikControl
                control="select"
                name="minOrSecDuration"
                options={minuteOrSecondInterval()}
                className="form-control"
              />

              <FormikControl
                control="select"
                name="minOrSec"
                options={MinOrSecOptions}
                className="form-control"
              />
            </>
          ) : (
            values.atWhatTime === "HOUR" &&
            formikValue.interval !== "" && (
              <>
                <FormikControl
                  control="time"
                  name="timeDuration"
                  min="00:01"
                  max="12:00"
                  className="form-control"
                />

                <FormikControl
                  control="select"
                  name="timeState"
                  options={scheduleOptions}
                  className="form-control"
                />
              </>
            )
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "black" }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DailyScheduling;
