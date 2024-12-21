import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPlaces } from "../../api";

import Error from "../../components/error";
import { Params, Place } from "../../types";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";
import Loader from "./../../components/loader/index";

const List = () => {
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  const { isLoading, error, data, refetch } = useQuery<Place[]>({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj),
  });
  console.log(data);

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error error={error} refetch={refetch} />
        ) : (
          <div className="grid- gap-5 mt-5">
            {data?.map((place) => (
              <Card key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
