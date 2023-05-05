import React from "react";
import CreateSchedulerComponent from "./component";

const CreateSchedulerContainer = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <CreateSchedulerComponent onSubmit={onSubmit}/>
    </div>
  );
};

// line added by feature 2 developers.

export default CreateSchedulerContainer;
