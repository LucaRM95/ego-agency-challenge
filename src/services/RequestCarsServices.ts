import { ICar } from "../interfaces/ICar";
import { ICarDetails } from "../interfaces/ICarDetails";
import RequestFactory from "./RequestFactory";

export const RequestCars = (): Promise<Array<ICar>> => {
  return new Promise((resolve, reject) => {
    RequestFactory("models")
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};

export const RequestCarsById = (cid: string = ""): Promise<ICarDetails> => {
  return new Promise((resolve, reject) => {
    RequestFactory(`models/${cid}`)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
