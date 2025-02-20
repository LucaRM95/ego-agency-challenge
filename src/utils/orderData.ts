import { ICar } from "../interfaces/ICar";

export const OrderByType = (cars: Array<ICar>, filter: number) => {
  let orderData: Array<ICar> = cars;
  switch (filter) {
    case 0:
      orderData = cars;
      break;
    case 1:
      orderData = cars.filter((car: ICar) => car.segment.includes("Sedan"));
      break;
    case 2:
      orderData = cars.filter((car: ICar) => car.segment.includes("Hatchback"));
      break;
    case 3:
      orderData = cars.filter((car: ICar) =>
        car.segment.includes("Pickups y Comerciales")
      );
      break;
    case 4:
      orderData = cars.filter((car: ICar) => car.segment.includes("SUVs"));
      break;
  }

  return orderData;
};

export const OrderByPriceOrYear = (cars: Array<ICar>, order: number) => {
  const orderData = [...cars];

  switch (order) {
    case 0:
      break;
    case 1:
      orderData.sort((a, b) => a.price - b.price);
      break;
    case 2:
      orderData.sort((a, b) => b.price - a.price);
      break;
    case 3:
      orderData.sort((a, b) => b.year - a.year);
      break;
    case 4:
      orderData.sort((a, b) => a.year - b.year);
      break;
  }

  return orderData;
};
