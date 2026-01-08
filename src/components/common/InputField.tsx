import { InputField } from "@/types";

const InputCard = ({
  name,
  title,
  onChange,
  type,
  placeholder,
  value,
}: InputField) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-primary text-base font-semibold">{title}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="bg-white text-primary rounded-md py-2 px-3 text-base shadow-lg border border-border"
      />
    </div>
  );
};

export default InputCard;
