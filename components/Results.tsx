import { Poppins } from "next/font/google";

const poppins = Poppins({
  style: "italic",
  weight: "700",
});

type ResultProps = {
  year?: number;
  month?: number;
  day?: number;
};

export default function Results({ year, month, day }: ResultProps) {
  return (
    <div className={`flex flex-col ${poppins.className} italic gap-3`}>
      <div className="flex itemce gap-2">
        <span className="text-8xl text-purple-500 font-extrabold">{year ?? "--"}</span>
        <h1 className="text-8xl font-bold">years</h1>
      </div>
      <div className="flex itemce gap-2">
        <span className="text-8xl text-purple-500 font-extrabold">{month ?? "--"}</span>
        <h1 className="text-8xl font-bold">month</h1>
      </div>
      <div className="flex itemce gap-2">
        <span className="text-8xl text-purple-500 font-extrabold">{day ?? "--"}</span>
        <h1 className="text-8xl font-bold">days</h1>
      </div>
    </div>
  );
}
