"use client";
import React, { FormEvent, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import Swal from 'sweetalert2'

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
    const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true);
    const form = e.target as HTMLFormElement;
    const formData: FormData = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "e1d47c36-17d4-492d-b877-af17cba2fac9",
        name: formData.firstname + " " + formData.lastname,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
        setisLoading(false);
        form.reset();
      console.log("Form submitted successfully:", result);
    } else {
        Swal.fire({
            title: "Error!",
            text: "Submission failed!",
            icon: "error"
          });
      console.log("Submission failed:", result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white text-sm mb-2" htmlFor="first-name">
            First Name *
          </label>
          <input
            name="firstname"
            type="text"
            id="first-name"
            placeholder="First Name"
            className="w-full p-3 placeholder:text-orange-200 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm mb-2" htmlFor="last-name">
            Last Name *
          </label>
          <input
            name="lastname"
            type="text"
            id="last-name"
            placeholder="Last Name"
            className="w-full placeholder:text-orange-200 p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-white text-sm mb-2" htmlFor="email">
            Email *
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            className="w-full placeholder:text-orange-200 p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            name="phone"
            type="text"
            id="phone"
            placeholder="Phone"
            className="w-full placeholder:text-orange-200 p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-white text-sm mb-2" htmlFor="subject">
          Subject *
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          placeholder="Subject"
          className="w-full placeholder:text-orange-200 p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300"
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-white text-sm mb-2" htmlFor="message">
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="w-full placeholder:text-orange-200 p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300 h-32"
          required
        ></textarea>
      </div>
      <div className="mt-6">
        <div className="relative block mt-8 line">
          <button className="contact-btn border-2 border-white relative inline-block text-[16px] leading-[50px] font-bold bg-transparent rounded-xl px-[35px] pt-[1px] pb-0 overflow-hidden font-sans capitalize transition-all ease-linear duration-300 text-white hover:text-orange-500 hover:stroke-orange-500 z-[1]">
            {isLoading?(
                <div className="flex items-center">
                    <p className="bg-transparent text-white hover:text-orange-500">Loading...</p>
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-white fill-orange-500"
                        viewBox="0 0 100 101"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                        />
                        <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                        />
                    </svg>
                </div>
            ):(
                <>
                    Submit
                    <FaRegPaperPlane className="ml-1 inline-block text-sm font-bold w-6" />  
                </>
            )}
            <span className="hover-btn hover-bx"></span>
            <span className="hover-btn hover-bx2"></span>
            <span className="hover-btn hover-bx3"></span>
            <span className="hover-btn hover-bx4"></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
