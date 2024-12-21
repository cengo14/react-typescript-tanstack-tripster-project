import { useMutation } from "@tanstack/react-query";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isPending, mutate } = useMutation({
    mutationKey: ["deletePlace"],
    mutationFn: () => deletePlace(id as string),
    onError: () => {
      toast.error("Bir Sorun Oluştu");
    },
    onSuccess: () => {
      toast.success("Silme İşlemi Başarılı");
      navigate("/");
    },
  });
  return (
    <div className="flex justify-between">
      <Link
        className="flex items-center gap-1 py-1 px-2 rounded-lg bg-black text-white hover:bg-zinc-700"
        to={".."}
      >
        <MdKeyboardArrowLeft size={24} /> Geri
      </Link>
      <button
        disabled={isPending}
        onClick={() => mutate()}
        className=" flex items-center  gap-1 bg-red-500 hover:bg-red-600 py-1 px-3 text-white rounded-lg"
      >
        <FaRegTrashAlt />
        Sil
      </button>
    </div>
  );
};

export default Buttons;
