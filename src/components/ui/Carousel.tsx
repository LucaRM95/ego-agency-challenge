import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { ModelFeature } from "../../interfaces/ICarDetails";

interface Props {
  features: Array<ModelFeature>;
}

const Carousel = ({ features }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: features.length < 3 ? features.length : 4 },
      }}
      speed={1000}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-[370px]"
    >
      {features.map((feature) => (
        <SwiperSlide
          className="flex flex-col items-center p-5"
          key={feature.name}
        >
          <div className="h-[204px]">
            <img
              src={feature.image}
              alt={`${feature.name}-photo`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col p-2">
            <h3 className="text-[20px] text-[#373737] font-semibold">
              {feature.name}
            </h3>
            <label
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: feature.description }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
