import React from "react";

type Props = {
  error: Error;
  refetch: () => void;
};

const Error = ({ error, refetch }: Props) => {
  console.log(error);

  return (
    <div className="mt-10 bg-red-500 text-white rounded-lg p-4 font-semibold text-center">
      <div>
        <p className="">Hay aksi! Beklenmedik bir hata ile karşılaştık</p>
        <p>{error.message}</p>
      </div>
      <div className="flex justify-center my-10">
        <button
          className="border bg-red-800 hover:bg-red-900 px-4 py-1 rounded-md"
          onClick={refetch}
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
};

export default Error;
