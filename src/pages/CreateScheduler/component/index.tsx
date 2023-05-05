import React, { useState } from "react";
import { Form, Formik } from "formik";
import "./styles/style.css";
import {
  Interval,
  MinOrSecOptions,
  dailyInitialValue,
  dailyValidationSchema,
  dayOfMonth,
  dayOfWeek,
  initialValue,
  intialProps,
  minuteOrSecondInterval,
  scheduleOptions,
  timeInterval,
  timeZones,
  validationSchema,
} from "../constant";
import FormikControl from "../../../shared/FormikContainer/formikControl";
import { Button } from "@mui/material";
import DailyScheduling from "./Forms/DailyScheduling";
import "./styles/style.css";

const CreateSchedulerComponent = (props: any) => {
  const { onSubmit } = props;

  

  return (
    <div className="card-container">
      <h3 className="header-style">Frequency</h3>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values}) => {
          
          return (
            <Form>
              <div className="card-body">
                <div className="subheading-style">Create Backup Every :</div>
                <FormikControl
                  control="select"
                  name="interval"
                  options={Interval}
                  className="form-control"
                  // onClick={handleChange}
                />

                {
                  values.interval === "DAILY" && 
                  <DailyScheduling 
                  intialValue={dailyInitialValue}
                  validationSchema = {dailyValidationSchema}
                  formikValue = {values}
                  onSubmit={onSubmit}
                  />
                }
                
                {/* {values.interval === "MONTHLY" ? (
                  <FormikControl
                    control="select"
                    label="day of month"
                    name="monthDay"
                    options={dayOfMonth()}
                    className="form-control"
                  />
                ) : (
                  values.interval === "WEEKLY" && (
                    <FormikControl
                      control="select"
                      label="on"
                      name="weekDay"
                      options={dayOfWeek}
                      className="form-control"
                    />
                  )
                )}

                {values.interval !== "" && (
                  <FormikControl
                    control="select"
                    name="atWhatTime"
                    options={timeInterval}
                    className="form-control"
                  />
                )}

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
                  values.interval !== "" && (
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
              </div>

              <div className="card-body">
                <div className="subheading-style">TimeZones :</div>
                <FormikControl
                  control="select"
                  name="timeZone"
                  options={timeZones}
                  className="form-control-timezone"
                />
              </div> */}

              <div className="button-submit">
                <Button type="submit" variant="contained" sx={{ backgroundColor: "black" }}>
                  Submit
                </Button>
                {/* <Button
                  variant="contained"
                  color="primary"
                  // onClick={() => resetForm()}
                >
                  Cancel
                </Button> */}
              </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateSchedulerComponent;
