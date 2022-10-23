import { CreateALertAction, DeleteAlertAction } from "Redux/types/types";

export const createALertAction = (payload: {
  uuid: string;
  name: string;
  price: number;
  target: string;
  status: string;
}) => {
  return {
    type: CreateALertAction,
    payload,
  };
};

export const deleteAlertAction = (item: any) => {
  return {
    type: DeleteAlertAction,
    payload: item,
  };
};
