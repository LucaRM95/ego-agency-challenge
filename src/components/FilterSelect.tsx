import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

interface Props {
  title: string;
  options: Array<{ id: number; name: string }>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  right?: boolean;
}

const FilterSelect = ({
  title,
  options,
  selected,
  setSelected,
  className = "",
  right,
}: Props) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={`relative mt-2 ${className}`}>
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 font-semibold text-[14px] flex items-center gap-3 pr-6">
            {title}
          </span>
          <ChevronDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className={`absolute z-10 mt-1 max-h-56 w-auto ${
            right ? "right-0" : ""
          } overflow-auto rounded-md bg-white pb-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm`}
        >
          {options.map((option, index) => (
            <>
              <ListboxOption
                key={option.name+index}
                value={option.id}
                className={`
                  group relative cursor-default py-2 pr-9 pl-3 
                  text-gray-900 select-none data-focus:bg-indigo-600 
                  data-focus:text-white data-focus:outline-hidden
                  ${selected === option.id && "bg-[#D1D6D634]"}
                `}
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal text-[10px] group-data-selected:font-semibold">
                    {option.name}
                  </span>
                </div>
              </ListboxOption>
              {index !== options.length - 1 && (
                <div className="bg-[#D8D8D8] h-[1px] w-full"></div>
              )}
            </>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default FilterSelect;
