type Props = {
  selectedOption: string;
  options: string[];
  label: string;
  onChange: (value: string) => void;
};

/**
 * Renders a select element with options
 * @param props.selectedOption - The currently selected option
 * @param props.options - The options to render
 * @param props.label - The label for the select element
 * @param props.onChange - The function to call when the select value changes
 */
export const FilterSelect = ({
  selectedOption,
  options,
  label,
  onChange,
}: Props) => {
  return (
    <span className="flex flex-col">
      <label className="truncate">{label}</label>
      <select
        className="max-w-[10rem] p-2 rounded-md text-black"
        onChange={(e) => onChange(e.target.value)}
        value={selectedOption}
      >
        <option value="">All</option>
        {options.map((option, index) => (
          <option key={`${selectedOption}-option-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  );
};
