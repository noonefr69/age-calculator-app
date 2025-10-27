"use client";

import Image from "next/image";
import Input from "./Input";
import { formAction } from "@/actions/formAction";
import { useState, useTransition } from "react";
import Results from "./Results";

type ResObj = {
  ageYears: number;
  ageMonths: number;
  ageDays: number;
} | null;

export default function Headers() {
  const now = new Date();
  const [isPending, startTransition] = useTransition();
  const [age, setAge] = useState<ResObj>(null);

  function handlechange(formData: FormData) {
    startTransition(async () => {
      const res = await formAction(formData);
      setAge(res);
    });
  }

  return (
    <div>
      <form action={handlechange} className="mb-3">
        <div className="flex items-center gap-10">
          <Input
            errorId="errorDay"
            label="day"
            max={31}
            min={1}
            placeHoler={`DD`}
          />
          <Input
            errorId="errorMonth"
            label="month"
            max={12}
            min={1}
            placeHoler={`MM`}
          />
          <Input
            errorId="errorYear"
            label="year"
            max={now.getFullYear()}
            min={1}
            placeHoler={`YYYY`}
          />
        </div>
        <div className="flex items-center">
          <div className="h-1 w-xl bg-gray-200 rounded-2xl" />
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
      <div>
        <Results
          day={age?.ageDays}
          month={age?.ageMonths}
          year={age?.ageYears}
        />
      </div>
    </div>
  );
}
