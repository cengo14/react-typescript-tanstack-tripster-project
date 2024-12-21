import React from "react";
import { Place } from "../../types";

const Rating = ({ rating, expand }: { rating: number; expand?: boolean }) => {
  const color =
    rating < 3
      ? "bg-red-500"
      : rating < 4
      ? "bg-orange-500"
      : rating < 4.5
      ? "bg-yellow-400"
      : "bg-green-500";
  const text =
    rating < 1.5
      ? "Çok Kötü"
      : rating < 3
      ? "Kötü"
      : rating < 4
      ? "İyi"
      : rating < 4.5
      ? "Güzel"
      : "Fevkalade";

  return (
    <div
      className={`rounded-xl border w-fit p-1 items-center font-bold flex gap-2`}
    >
      <span className={` p-2 rounded-xl text-white ${color}`}>{rating}</span>

      {expand && <span>{text}</span>}
    </div>
  );
};

export default Rating;
