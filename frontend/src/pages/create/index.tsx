import React from "react";
import Container from "../../components/container";
import { Field, Form, Formik } from "formik";
import { initialValues, inputs } from "../../constants";
import { PlaceData } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { createPlace } from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["createPlace"],
    mutationFn: (body: PlaceData) => createPlace(body),
    onSuccess: (res) => {
      toast.success("Başarılı şekilde eklendi");
      navigate(`/place/${res.data.place.id}`);
    },
    onError: () => {
      toast.error("Bir Hata Oluştu");
    },
  });
  const onSubmit = (values: PlaceData) => {
    const body = { ...values };
    body.amenities = (values.amenities as string).split(",");

    mutate(body);
  };
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="max-w-2xl mx-auto grid gap-5">
          {inputs.map((input, key) => (
            <div
              key={key}
              className={
                input.type === "checkbox" ? "flex gap-2 item-center" : "field"
              }
            >
              <label className="font-semibold" htmlFor="">
                {input.label}
              </label>
              <Field
                type={input.type || "text"}
                placeholder={input.placeholder}
                name={input.name}
                className={input.type !== "checkbox" ? "w-full input" : ""}
              />
            </div>
          ))}
          <button
            disabled={isPending}
            className="px-4 py-1 bg-green-500 border rounded-lg my-5 font-semibold transition hover:bg-green-600"
          >
            Kaydet
          </button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Create;
