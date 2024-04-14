import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/shared/Button";
import Title from "../components/shared/Title";
import classNames from "classnames";
import Checkmark from "../assets/contact/desktop/checkmark.svg";

const initState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const Contact = () => {
  const [formData, setFormData] = useState(initState);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(formData);
  console.log("errors", errors);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.id]: "",
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let formErrors = { name: "", email: "", phone: "" };

    if (name === "") {
      formErrors = { ...formErrors, name: "Can't be empty" };
    } else if (name.length < 3) {
      formErrors = { ...formErrors, name: "Name is too short" };
    }

    if (email === "") {
      formErrors = { ...formErrors, email: "Can't be empty" };
    } else if (!emailRegex.test(email)) {
      formErrors = { ...formErrors, email: "Invalid email" };
    }

    if (phone === "") {
      formErrors = { ...formErrors, phone: "Can't be empty" };
    } else if (phone.length < 3) {
      formErrors = { ...formErrors, phone: "Number is too short" };
    }

    setErrors(formErrors);

    const isValid = Object.values(formErrors).every((error) => error === "");
    if (!isValid) return;

    setSuccess(true);
  };
  return (
    <>
      <Title>Contact - Designo</Title>
      <section className="h-[48rem] sm:h-[45rem] lg:h-[30rem] bg-peach sm:rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-center max-sm:text-center text-white h-full px-6 sm:px-14 lg:px-28 gap-10">
          <div className="flex flex-col gap-10 w-full">
            <h2 className="heading-mobile sm:heading-lg capitalize">
              contact us
            </h2>
            <p className="body-mobile sm:body">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                className="input"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-[12px] italic absolute right-[2.5rem] top-[1rem] after:content-error-icon after:absolute after:right-[-2rem] after:top-[-.1rem]">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="email"
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-[12px] italic absolute right-[2.5rem] top-[1rem] after:content-error-icon after:absolute after:right-[-2rem] after:top-[-.1rem]">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="phone"
                className="input"
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-[12px] italic absolute right-[2.5rem] top-[1rem] after:content-error-icon after:absolute after:right-[-2rem] after:top-[-.1rem]">
                  {errors.phone}
                </p>
              )}
            </div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              onChange={handleChange}
              id="message"
              rows={4}
              className="input resize-none"
              placeholder="Your Message"
            ></textarea>
            <div
              className={classNames({
                "flex flex-col sm:flex-row justify-between items-center sm:items-end relative max-sm:gap-3":
                  true,
                "sm:self-end": !success,
              })}
            >
              {success && (
                <div className="flex gap-1">
                  <img src={Checkmark} alt="" />
                  <p className="text-sm text-green-200 font-semibold">
                    Your form has been submitted!
                  </p>
                </div>
              )}
              <Button>submit</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
