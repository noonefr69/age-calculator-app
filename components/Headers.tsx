import Image from "next/image";
import Input from "./Input";
import { formAction } from "@/actions/formAction";

export default function Headers() {
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1

  console.log(nowMonth);

  return (
    <form action={formAction} className="mb-3">
      <div className="flex items-center gap-10">
        <Input
          errorId="errorDay"
          label="day"
          max={31}
          min={1}
          time={nowYear}
          placeHoler={`DD`}
          errorMes="Error"
        />
        <Input
          errorId="errorMonth"
          label="month"
          max={12}
          min={1}
          time={nowYear}
          placeHoler={`MM`}
          errorMes="Error"
        />
        <Input
          errorId="errorYear"
          label="Year"
          max={nowYear}
          min={1}
          time={nowYear}
          placeHoler={`YYYY`}
          errorMes="Error"
        />
      </div>
      <div className="flex items-center">
        <div className="h-1 w-lg bg-gray-200 rounded-2xl" />
        <button
          type="submit"
          className="relative h-10 w-10 bg-purple-500 p-10 rounded-full duration-200 hover:bg-black hover:text-white cursor-pointer"
        >
          <Image
            src={`./assets/images/icon-arrow.svg`}
            className="p-4"
            alt="arrow-icon"
            fill
          />
        </button>
      </div>
    </form>
  );
}
