"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    reset,
  } = useForm();

  const contactForm = useRef();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        contactForm.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("Email sent successfully!");
          // reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="flex flex-col items-center justify-center m-12">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      {isSubmitSuccessful ? (
        <div className="flex flex-col gap-2 my-8 h-80">
          <h3 className="self-center text-2xl pb-4">
            Thank you for contacting us.
          </h3>
          <p>
            We have received your enquiry and will respond to you shortly. For
            urgent enquiries please call us on this telephone number.
          </p>
          <p>Contact Number - 1300 VIMUKTI (1300 846 8584)</p>
        </div>
      ) : (
        <form
          ref={contactForm}
          className="flex flex-col lg:w-[50%] gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="flex flex-col">
            <label htmlFor="firstName">
              First Name
              <sup className={`text-2xs ${errors.firstName && "text-red-600"}`}>
                *
              </sup>
            </label>
            <input
              className="border border-gray-800 outline-none"
              {...register("firstName", { required: true })}
            />
            <span
              className={`${
                errors.firstName ? "text-red-600" : "invisible"
              } text-xs`}
            >
              This field is required
            </span>
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="lastName">
              Last Name
              <sup className={`text-2xs ${errors.lastName && "text-red-600"}`}>
                *
              </sup>
            </label>
            <input
              className="border border-gray-800 outline-none"
              {...register("lastName", { required: true })}
            />
            <span
              className={`${
                errors.lastName ? "text-red-600" : "invisible"
              } text-xs`}
            >
              This field is required
            </span>
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="phone">
              Phone
              <sup className={`text-2xs ${errors.phone && "text-red-600"}`}>
                *
              </sup>
            </label>
            <input
              type="phone"
              className="border border-gray-800 outline-none"
              {...register("phone", { required: true })}
            />
            <span
              className={`${
                errors.email ? "text-red-600" : "invisible"
              } text-xs`}
            >
              This field is required
            </span>
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="replyTo">
              Email
              <sup className={`text-2xs ${errors.email && "text-red-600"}`}>
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
                errors.email ? "text-red-600" : "invisible"
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
              rows={3}
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
      )}
    </section>
  );
}

// <!DOCTYPE html>
// <html>
//    <body>
//       <h2>Student Contact Form</h2>
//       <form action="mailto:emailid@example.com" method="post" enctype="text/plain">
//          Student Name:<br><input type="text" name="sname"> <br>
//          Student Subject:<br><input type="text" name="ssubject"><br>
//          <input type="submit" value="Send">
//       </form>
//    </body>
// </html>
