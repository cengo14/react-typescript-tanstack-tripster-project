import React from "react";
import { sortOptions } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import { Place } from "../../types";
import { getPlaces } from "../../api";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params, setParams] = useSearchParams();
  const { isPending, data } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: () => getPlaces(),
  });
  const location = [...new Set(data?.map((i) => i.location))];
  console.log(location);
  const handleChange = (name: string, value: string) => {
    params.set(name, value);
    setParams(params);
  };
  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
      <div className="field">
        <label htmlFor="">Nereye?</label>
        {!isPending && (
          <select
            defaultValue={params.get("location") || ""}
            onChange={(e) => handleChange("location", e.target.value)}
            title="Konum Seçici"
            className="input"
          >
            <option value={""}>Seçiniz</option>
            {location?.map((loc, key) => (
              <option key={key}>{loc}</option>
            ))}
          </select>
        )}
      </div>
      <div className="field">
        <label htmlFor="">Konaklama Yerine Göre</label>
        <input
          defaultValue={params.get("title") || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Örn: Seaside Villa"
          type="text"
          className="input"
        />
      </div>
      <div className="field">
        <label htmlFor="">Sırala</label>
        <select
          defaultValue={params.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}
          title="Konum Seçici"
          className="input"
        >
          {sortOptions.map((sort, key) => (
            <option key={key} value={sort.value}>
              {sort.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setParams({})}
          type="reset"
          className="bg-blue-500 hover:bg-blue-600 py-1 px-4 text-white rounded-md w-fit"
        >
          Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
