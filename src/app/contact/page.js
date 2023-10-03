"use client";

import ParseTextarea from "@/components/ParseTextArea";
import { useForm } from "react-hook-form";

export default function page() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-col items-center justify-center m-12">
      <div className="text-3xl font-semibold">Contact Us</div>
      <form
        className="flex flex-col lg:w-[50%] gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex flex-col">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="border border-gray-800 outline-none"
            {...register("fullName", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="border border-gray-800 outline-none"
            {...register("email", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="subject">Subject</label>
          <input
            className="border border-gray-800 outline-none"
            {...register("subject")}
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="message">Message</label>
          {/* <textarea
            className="border border-gray-800 outline-none"
            {...register("message")}
          /> */}
          {/* <Controller name="emails" as={ParseTextarea} control={control} /> */}
        </fieldset>

        <input
          className="border border-gray-700 bg-gray-600 text-gray-100 my-2"
          type="submit"
        />
      </form>
    </section>
  );
}
