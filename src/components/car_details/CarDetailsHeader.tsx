import { ICarDetails } from "../../interfaces/ICarDetails";

interface Props {
  carDetails: ICarDetails;
}

const CarDetailsHeader = ({ carDetails }: Props) => {
  return (
    <div className="flex flex-col mt-5 px-4 mb-10">
      <img src={carDetails.photo} alt={`${carDetails.name}-photo`} />
      <div className="flex gap-2 font-semibold text-[20px] text-[#373737]">
        <span>{carDetails.name}</span>
        <span>{carDetails.segment}</span>
      </div>
      <h2 className="font-semibold text-[#191919] text-[35px] mt-3">
        {carDetails.title}
      </h2>
      <label
        className="mt-5"
        dangerouslySetInnerHTML={{ __html: carDetails.description }}
      />
    </div>
  );
};

export default CarDetailsHeader;
