import { ModelHighlight } from "../../interfaces/ICarDetails";

interface Props {
  highlights: ModelHighlight;
}

const CarHighlights = ({ highlights }: Props) => {
  return (
    <div className="flex flex-col gap-5 mt-10 p-5 mb-10">
      <img
        className="rounded-lg"
        src={highlights.image}
        alt={`${highlights.title}-image`}
      />
      <h3 className="font-semibold text-[20px] text-[#373737]">
        {highlights.title}
      </h3>
      <label dangerouslySetInnerHTML={{ __html: highlights.content }} />
    </div>
  );
};

export default CarHighlights;
