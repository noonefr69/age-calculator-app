import Image from "next/image";

export default function Headers() {
  return (
    <form className="">
      <div className="flex mb-10 items-center gap-5">
        <div className="flex flex-col">
          <label htmlFor="day" className="font-bold mb-3 text-xl text-gray-500 ">
            DAY
          </label>
          <input
            className="cursor-pointer w-32 ring-2 ring-gray-300 focus:ring-purple-500 outline-none rounded-lg px-3 text-2xl font-black py-3 placeholder:font-extrabold placeholder:text-gray-500"
            type="number"
            placeholder="DD"
            id="day"
            name="day"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="month" className="font-bold mb-3 text-xl text-gray-500 ">
            MONTH
          </label>
          <input
            className="cursor-pointer w-32 ring-2 ring-gray-300 focus:ring-purple-500 outline-none rounded-lg px-3 text-2xl font-black py-3 placeholder:font-extrabold placeholder:text-gray-500"
            type="number"
            placeholder="MM"
            id="month"
            name="month"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="year" className="font-bold mb-3 text-xl text-gray-500 ">
            YEAR
          </label>
          <input
            className="cursor-pointer w-32 ring-2 ring-gray-300 focus:ring-purple-500 outline-none rounded-lg px-3 text-2xl font-black py-3 placeholder:font-extrabold placeholder:text-gray-500"
            type="number"
            placeholder="YYYY"
            id="year"
            name="year"
            required
          />
        </div>
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
