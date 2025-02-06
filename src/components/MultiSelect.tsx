import React, { useState, useEffect } from "react";
import Select from "react-select";
import { MultiValue, ClearIndicatorProps } from "react-select";
import { X } from "lucide-react";

export interface MultiSelectProps {
  options: () => Promise<{ label: string; value: string }[]>;
  placeholder?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  clearable?: boolean;
  onChange: (selected: { label: string; value: string }[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = "Select items...",
  isLoading = false,
  isDisabled = false,
  clearable = true,
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [asyncOptions, setAsyncOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const result = await options();
      setAsyncOptions(result);
    };
    fetchOptions();
  }, [options]);

  const handleChange = (
    newValue: MultiValue<{ label: string; value: string }>
  ) => {
    setSelectedOptions([...newValue]);
    onChange([...newValue]);
  };

  const CustomClearIndicator = (
    props: ClearIndicatorProps<{ label: string; value: string }>
  ) => (
    <div {...props.innerProps}>
      <X size={16} />
    </div>
  );

  return (
    <div className="w-full">
      <Select
        isMulti
        options={asyncOptions}
        value={selectedOptions}
        onChange={handleChange}
        placeholder={placeholder}
        isLoading={isLoading}
        isDisabled={isDisabled}
        isClearable={clearable}
        closeMenuOnSelect={false}
        components={{
          ClearIndicator: CustomClearIndicator,
        }}
      />
    </div>
  );
};
