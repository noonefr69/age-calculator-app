type InputProps = {
  label: string;
  min: number;
  max: number;
  errorId: string;
  placeHoler: string;
};

export default function Input({
  label,
  min,
  max,
  errorId,
  placeHoler,
}: InputProps) {
  return (
    <div className="flex flex-col relative pb-10">
      <label
        htmlFor={label}
        className="font-bold uppercase mb-3 text-xl text-gray-500 "
      >
        {label}
      </label>
      <input
        className="cursor-pointer w-36 duration-200 border-2 border-gray-300 focus:border-purple-500 outline-none rounded-lg px-3 text-2xl font-black py-3 placeholder:font-extrabold placeholder:text-gray-500"
        type="number"
        placeholder={placeHoler}
        id={label}
        name={label}
        required
        min={min}
        max={max}
      />
      <span className="absolute bottom-2 text-nowrap text-sm" id={errorId}>
        Must be a valid {label}
      </span>
    </div>
  );
}
