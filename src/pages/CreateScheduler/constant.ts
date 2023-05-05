import * as Yup from "yup";

export interface intialProps {
  interval: string;
  timeZone: string;
}

export const initialValue: intialProps = {
  interval: "",
  timeZone: "",
};

export const validationSchema = Yup.object({
   interval: Yup.string().required("Day Interval Required"),
   timeZone: Yup.string().required("TimeZone Required"),
})


export interface dailyInitialProps extends intialProps {
  atWhatTime: string;
  minOrSecDuration: string;
  minOrSec: string;
  timeDuration: string;
  timeState: string;
}

export interface weeklyInitialProps extends intialProps {
  weekDay: string;

  atWhatTime: string;
  minOrSecDuration: string;
  minOrSec: string;

  timeDuration: string;
  timeState: string;
}

export interface monthlyInitialProps extends intialProps {
  monthDay: string;

  atWhatTime: string;
  minOrSecDuration: string;
  minOrSec: string;

  timeDuration: string;
  timeState: string;
}


export const dailyInitialValue: dailyInitialProps = {
  interval: "",
  timeZone: "",
  atWhatTime: "",
  minOrSecDuration: "",
  minOrSec: "",
  timeDuration: "",
  timeState: "",
};

export const dailyValidationSchema = Yup.object({
  interval: Yup.string().required("Day Interval Required"),

  atWhatTime: Yup.string().required("Time Interval Required"),

  minOrSecDuration: Yup.string().required("Interval Required"),
  minOrSec: Yup.string().required("Required"),

  timeDuration: Yup.string().required("Time Duration Required"),
  timeState: Yup.string().required("TimeZone Required"),

  timeZone: Yup.string().required("TimeZone Required"),
});

export const weeklyInitialValue: weeklyInitialProps = {
  interval: "",
  timeZone: "",
  weekDay: "",
  atWhatTime: "",
  minOrSecDuration: "",
  minOrSec: "",
  timeDuration: "",
  timeState: "",
};

export const weeklyValidationSchema = Yup.object({
  interval: Yup.string().required("Day Interval Required"),
  weekDay: Yup.string().required("Weekday Required"),
  atWhatTime: Yup.string().required("Time Interval Required"),

  minOrSecDuration: Yup.string().required("Interval Required"),
  minOrSec: Yup.string().required("Required"),

  timeDuration: Yup.string().required("Time Duration Required"),
  timeState: Yup.string().required("TimeZone Required"),

  timeZone: Yup.string().required("TimeZone Required"),
});



export const monthlyInitialValue: monthlyInitialProps = {
  interval: "",
  timeZone: "",
  monthDay: "",
  atWhatTime: "",
  minOrSecDuration: "",
  minOrSec: "",
  timeDuration: "",
  timeState: "",
};

export const monthlyValidationSchema = Yup.object({
  interval: Yup.string().required("Day Interval Required"),
  timeZone: Yup.string().required("TimeZone Required"),

  monthDay: Yup.string().required("Month Day Required"),
  atWhatTime: Yup.string().required("Time Interval Required"),

  minOrSecDuration: Yup.string().required("Interval Required"),
  minOrSec: Yup.string().required("Required"),

  timeDuration: Yup.string().required("Time Duration Required"),
  timeState: Yup.string().required("TimeZone Required"),

});

// export const validationSchema = Yup.object({
//   interval: Yup.string().required("Day Interval Required"),
//   monthDay: Yup.string().required("Month Day Required"),
//   weekDay: Yup.string().required("Weekday Required"),
//   atWhatTime: Yup.string().required("Time Interval Required"),

//   minOrSecDuration: Yup.string().required("Interval Required"),
//   minOrSec: Yup.string().required("Required"),

//   timeDuration: Yup.string().required("Time Duration Required"),
//   timeState: Yup.string().required("TimeZone Required"),

//   timeZone: Yup.string().required("TimeZone Required"),
// });

export const Interval = [
  {
    key: "Day",
    value: "",
  },
  {
    key: "Daily",
    value: "DAILY",
  },
  {
    key: "Weekly",
    value: "WEEKLY",
  },
  {
    key: "Monthly",
    value: "MONTHLY",
  },
];

export const timeInterval = [
  {
    key: "at",
    value: "",
  },
  {
    key: "Every Hour",
    value: "HOUR",
  },
  {
    key: "Every",
    value: "MIN/SEC",
  },
];

export const scheduleOptions = [
  {
    key: "AM",
    value: "AM",
  },
  {
    key: "PM",
    value: "PM",
  },
];

export const MinOrSecOptions = [
  {
    key: "Min",
    value: "MIN",
  },
  {
    key: "Sec",
    value: "SEC",
  },
];
export const minuteOrSecondInterval = () => {
  const allOptions = [];
  for (let i = 5; i <= 60; i = i + 5) {
    const obj = {
      key: `${i}`,
      value: `${i}`,
    };
    allOptions.push(obj);
  }
  return allOptions;
};

export const dayOfWeek = [
  {
    key: "Monday",
    value: "MON",
  },
  {
    key: "Tuesday",
    value: "TUE",
  },
  {
    key: "Wednesday",
    value: "WED",
  },
  {
    key: "Thursday",
    value: "THURS",
  },
  {
    key: "Friday",
    value: "FRI",
  },
  {
    key: "Saturday",
    value: "SAT",
  },
  {
    key: "Sunday",
    value: "SUN",
  },
];

export const dayOfMonth = () => {
  const allDayOfMonths = [];
  for (let i = 0; i < 29; i++) {
    const obj = {
      key: `${i}`,
      value: `${i}`,
    };
    allDayOfMonths.push(obj);
  }

  return allDayOfMonths;
};

export const timeZones = [
  {
    key: "Europe/London",
    value: "Europe/London",
  },
  {
    key: "Europe/France",
    value: "Europe/France",
  },
  {
    key: "Europe/Rome",
    value: "Europe/Rome",
  },
  {
    key: "Europe/Berlin",
    value: "Europe/Berlin",
  },
  {
    key: "Asia/kolkata",
    value: "Asia/kolkata",
  },
  {
    key: "Asia/Beijing",
    value: "Asia/Beijing",
  },
  {
    key: "Asia/Tokyo",
    value: "Asia/Tokyo",
  },
  {
    key: "Asia/Jakarta",
    value: "Asia/Jakarta",
  },
  {
    key: "Asia/Bangkok",
    value: "Asia/Bangkok",
  },
];
