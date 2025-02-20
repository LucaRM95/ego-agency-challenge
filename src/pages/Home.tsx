import CarCard from "../components/CarCard";
import FilterSelect from "../components/FilterSelect";
import Layout from "../ui/Layout";
import { cars } from "../api/mock";
import { ICar } from "../interfaces/ICar";

const carTypes = [
  {
    id: 1,
    name: "Todos",
  },
  {
    id: 2,
    name: "Autos",
  },
  {
    id: 3,
    name: "Pickups y Comerciales",
  },
  {
    id: 4,
    name: "SUVs y Crossovers",
  },
  {
    id: 5,
    name: "SUVs y Crossovers",
  },
];

const orderFilter = [
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
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-[35px] font-bold text-gray-900">
          Descubrí todos los modelos
        </h1>
        <div className="flex justify-between border-b border-b-1 border-b-[#D8D8D8] pb-1">
          <FilterSelect title="Filtrar por" options={carTypes} />
          <FilterSelect title="Ordenar por" options={orderFilter} />
        </div>
        <div className="flex flex-wrap items-center justify-center mt-14 gap-12">
          {cars.map((car: ICar) => (
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
    </Layout>
  );
};

export default Home;
