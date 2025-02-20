import { ModelHighlight } from "../../interfaces/ICarDetails";

interface Props {
  highlights: ModelHighlight;
  inverted?: boolean;
}

const CarHighlights = ({ highlights, inverted = false }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center gap-5 mt-10 p-5 mb-10">
      {!inverted && (
        <img
          className="rounded-lg"
          src={highlights.image}
          alt={`${highlights.title}-image`}
        />
      )}
      <div className="lg:w-[385px]">
        <h3 className="font-semibold text-[20px] text-[#373737]">
          {highlights.title}
        </h3>
        <label
          className="!leading-[27px]"
          dangerouslySetInnerHTML={{ __html: highlights.content }}
        />
      </div>
      {inverted && (
        <img
          className="rounded-lg"
          src={highlights.image}
          alt={`${highlights.title}-image`}
        />
      )}
    </div>
  );
};

export default CarHighlights;
