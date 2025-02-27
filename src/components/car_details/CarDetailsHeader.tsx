import { LazyLoadImage } from "react-lazy-load-image-component";
import { ICarDetails } from "../../interfaces/ICarDetails";

interface Props {
  carDetails: ICarDetails;
}

const CarDetailsHeader = ({ carDetails }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row  lg:justify-evenly lg:gap-5 mt-5 px-4 mb-10">
      <LazyLoadImage src={carDetails.photo} alt={`${carDetails.name}-photo`} />
      <div className="flex flex-col lg:w-[475px] items-start justify-center">
        <div className="flex gap-2 font-semibold text-[20px] text-[#373737]">
          <span>{carDetails.name}</span>
          <span>{carDetails.segment}</span>
        </div>
        <h2 className="font-semibold text-[#191919] text-[35px] md:text-[50px] mt-3">
          {carDetails.title}
        </h2>
        <label
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: carDetails.description }}
        />
      </div>
    </div>
  );
};

export default CarDetailsHeader;
