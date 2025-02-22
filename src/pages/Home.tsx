import CarCard from "../components/CarCard";
import FilterSelect from "../components/FilterSelect";
import Layout from "../components/ui/Layout";
import { ICar } from "../interfaces/ICar";
import { useAppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { carsActions, carsSelector } from "../redux/reducers/sliceCars";
import { BounceLoader } from "react-spinners";
import { OrderByPriceOrYear, OrderByType } from "../utils/orderData";
import { RequestCars } from "../services/RequestCarsServices";

const carTypes = [
  {
    id: 0,
    name: "Todos",
  },
  {
    id: 1,
    name: "Sedan",
  },
  {
    id: 2,
    name: "Hatchback",
  },
  {
    id: 3,
    name: "Pickups y Comerciales",
  },
  {
    id: 4,
    name: "SUVs y Crossovers",
  },
];

const orderFilter = [
  {
    id: 0,
    name: "Nada",
  },
  {
    id: 1,
    name: "De menor a mayor precio",
  },
  {
    id: 2,
    name: "De mayor a menor precio",
  },
  {
    id: 3,
    name: "Más nuevos primeros",
  },
  {
    id: 4,
    name: "Más viejos primeros",
  },
];

const Home = () => {
  const { loading, cars } = useSelector(carsSelector);
  const [carType, setCarType] = useState<number>(0);
  const [order, setOrder] = useState<number>(0);
  let orderCarData: Array<ICar> = cars;

  const dispatch = useAppDispatch();

  useEffect(() => {
    RequestCars().then((res) => {
      dispatch(carsActions.setCarsData(res));
      dispatch(carsActions.setLoading(false));
    });
  }, []);

  orderCarData = OrderByType(cars, carType);
  orderCarData = OrderByPriceOrYear(orderCarData, order);

  return (
    <Layout>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BounceLoader />
        </div>
      ) : (
        <div className="max-w-7xl lg:max-w-full py-6 px-4 md:p-20">
          <h1 className="text-[35px] font-bold text-gray-900 md:mb-20">
            Descubrí todos los modelos
          </h1>
          <div className="flex justify-between border-b border-b-1 border-b-[#D8D8D8] pb-1">
            <div className="hidden xl:flex items-center gap-12 mt-2 leading-[14px] mb-2">
              <span className="text-[#373737] font-semibold text-[14px]">
                Filtrar por
              </span>
              {carTypes.map((type) => (
                <span
                  key={`deskt-${type.id}`}
                  id={`${type.id}`}
                  onClick={(e) =>
                    setCarType(parseInt((e.target as HTMLElement).id))
                  }
                  className={`${
                    carType === type.id ? "bg-[#F7F7F7]" : ""
                  } hover:bg-[#F7F7F7] rounded-[18px] p-3 cursor-pointer`}
                >
                  {type.name}
                </span>
              ))}
            </div>
            <FilterSelect
              className="xl:hidden"
              title="Filtrar por"
              options={carTypes}
              selected={carType}
              setSelected={setCarType}
            />
            <FilterSelect
              title="Ordenar por"
              options={orderFilter}
              selected={order}
              setSelected={setOrder}
              right
            />
          </div>
          <div className="flex flex-wrap items-center justify-center mt-14 gap-12 lg:gap-20">
            {orderCarData.map((car: ICar) => (
              <CarCard
                key={car.id}
                id={car.id}
                image={car.thumbnail}
                title={car.name}
                price={car.price}
                year={car.year}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
