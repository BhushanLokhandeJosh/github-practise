import { useMutation } from "react-query";
import { createConfiguration } from "../services/config-services";

export const useCreateConfiguration = (props: IProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createConfiguration, {
    onSuccess,
    onError
  });
};

// line added by feature 2 developers.
