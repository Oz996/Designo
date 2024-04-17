import classNames from "classnames";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../shared/Button";
import Checkmark from "../../../assets/contact/desktop/checkmark.svg";
import { motion } from "framer-motion";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ErrorForm {
  name: string;
  email: string;
  phone: string;
}

const initState: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const initErrorsState: ErrorForm = {
  name: "",
  email: "",
  phone: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(initState);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState(initErrorsState);

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
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full lg:w-[68%]"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.form>
  );
};
export default ContactForm;
