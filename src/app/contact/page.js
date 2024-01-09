"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit =  (data) => console.log(data);
  const onSubmit = (data) => {
    const { EMAILJS_SERVICE_ID, EMAILJS_PUBLIC_API, EMAILJS_TEMPLATE_ID } =
      process.env;
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, EMAILJS_PUBLIC_API)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset();
  };

  return (
    <section className="flex flex-col items-center justify-center m-12">
      <div className="text-3xl font-semibold">Contact Us</div>
      <form
        className="flex flex-col lg:w-[50%] gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex flex-col">
          <label htmlFor="fullName">
            Full Name
            <sup className={`text-2xs ${errors.fullName && "text-red-600"}`}>
              *
            </sup>
          </label>
          <input
            className="border border-gray-800 outline-none"
            {...register("fullName", { required: true })}
          />
          <span
            className={`${
              errors.fullName ? "text-red-600" : "invisible"
            } text-xs`}
          >
            This field is required
          </span>
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="replyTo">
            Email
            <sup className={`text-2xs ${errors.fullName && "text-red-600"}`}>
              *
            </sup>
          </label>
          <input
            type="email"
            className="border border-gray-800 outline-none"
            {...register("replyTo", { required: true })}
          />
          <span
            className={`${
              errors.fullName ? "text-red-600" : "invisible"
            } text-xs`}
          >
            This field is required
          </span>
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="subject">
            Subject
            <sup className={`text-2xs ${errors.fullName && "text-red-600"}`}>
              *
            </sup>
          </label>
          <input
            className="border border-gray-800 outline-none"
            {...register("subject", { required: true })}
          />
          <span
            className={`${
              errors.fullName ? "text-red-600" : "invisible"
            } text-xs`}
          >
            This field is required
          </span>
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="message">
            Message
            <sup className={`text-2xs ${errors.fullName && "text-red-600"}`}>
              *
            </sup>
          </label>
          <textarea
            rows={5}
            className="border border-gray-800 outline-none resize-none"
            {...register("message", { required: true })}
          />
          <span
            className={`${
              errors.fullName ? "text-red-600" : "invisible"
            } text-xs`}
          >
            This field is required
          </span>
        </fieldset>

        <input
          className="border border-gray-700 bg-gray-600 text-gray-100 my-2 cursor-pointer"
          type="submit"
        />
      </form>
    </section>
  );
}
