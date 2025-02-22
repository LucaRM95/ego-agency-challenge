import { NavLink } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  year: number;
}

const CarCard = ({ id, image, title, price, year }: Props) => {
  return (
    <div className="group flex flex-col items-center justify-between w-[269px] h-[216px] gap-1">
      <div className="flex flex-col text-center">
        <h2 className="text-[28px] font-semibold group-hover:text-[#EB0A1E]">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-2 w-full">
          <span className="text-[14px]">{year}</span>
          <span className="text-[14px]">|</span>
          <span className="text-[14px]">$ {price.toLocaleString()}</span>
        </div>
      </div>
      <div className="h-[122px] w-[247px]">
        <LazyLoadImage
          className="w-full h-full object-cover"
          src={image}
          alt={`${title}-image`}
        />
      </div>
      <div className="h-[34px] mt-2">
        <NavLink
          to={`/details/${id}`}
          className="hidden group-hover:flex rounded-[40px] bg-[#191919] pl-5 pr-5 pt-2 pb-2 text-white text-[13px]"
        >
          Ver Modelo
        </NavLink>
      </div>
    </div>
  );
};

export default CarCard;
