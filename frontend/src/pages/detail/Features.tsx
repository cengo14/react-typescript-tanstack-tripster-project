import React from "react";

const Features = ({ data }: { data: string[] }) => {
  return (
    <div className="grid gap-3 mt-5">
      <h2 className="text-xl font-bold">
        Popüler konaklama yeri imkan ve özellikleri
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {data.map((i, key) => (
          <span className="border border-zinc-100 py-1 px-2 rounded-md shadow-sm">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
