import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form: any = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0nukyr",
        "template_n721uhe",
        form.current,
        "user_HX91zDmvOhjjYTusOfRfK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full min-h-screen text-white px-[5%]" id="contact">
      <h1 className="text-[8vw] font-bold">Contact</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" md:col-span-2">
          <h2 className="text-[3vw] font-semibold leading-tight">
            Have an awesome idea? <br />
            Let&apos;s bring it to life
          </h2>
          <p className="text-[2vw]">
            I am currently available for freelance or fulltime job.
          </p>
          <div className="mt-8">
            <form onSubmit={sendEmail} ref={form}>
              <div className="flex gap-4">
                <div className="py-2 px-4 border-b-2 w-[50%]">
                  <input
                    name="name"
                    type="text"
                    className="w-full bg-transparent text-white text-lg outline-none"
                    placeholder="Your Name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2 px-4 border-b-2 w-[50%]">
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-transparent text-white text-lg outline-none"
                    placeholder="Your Email"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="py-2 px-4 border-b-2 my-8">
                <textarea
                  name="message"
                  className="w-full h-[150px] bg-transparent text-white text-lg outline-none"
                  placeholder="Meassage"
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className="px-6 py-3 bg-[#DC5F00] rounded-full font-semibold"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className=" col-span-1">
          <div className="mb-12">
            <h2 className="text-4xl font-bold pb-6">Contact Details</h2>
            <p className="text-2xl font-medium mb-3">
              gabrielraymond.grd@gmail.com
            </p>
            <p className="text-2xl font-medium">+62 899 5432 207</p>
          </div>
          <div className="mb-12">
            <h2 className="text-4xl font-bold pb-6">My Digital Spaces</h2>
            <ul>
              <li className="mb-2">
                <Link href={""} className="text-2xl font-medium">
                  <span>Github</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href={""} className="text-2xl font-medium">
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href={""} className="text-2xl font-medium">
                  <span>Instagram</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href={""} className="text-2xl font-medium">
                  <span>Facebook</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="text-4xl font-bold pb-6">Location</h2>
            <p className="text-2xl font-medium mb-3">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
