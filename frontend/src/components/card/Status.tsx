import React from "react";
import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

const Status = ({ status, expand }: { status: boolean; expand?: boolean }) => {
  return (
    <div
      className={`flex items-center gap-4 border p-2 rounded-md ${
        status ? "bg-green-200" : "bg-red-200"
      }`}
    >
      {status ? (
        <MdEventAvailable className="text-green-800" />
      ) : (
        <CgUnavailable className="text-red-800" />
      )}
      {expand && (
        <p className=" font-bold">
          {status ? "Şu an konaklanabilir" : "Konaklama için müsait değil"}
        </p>
      )}
    </div>
  );
};

export default Status;
