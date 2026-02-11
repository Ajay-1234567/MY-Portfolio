"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_APP_URL
        ? `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`
        : "/api/contact";

      const res = await axios.post(apiUrl, userInput);

      toast.success(res.data.message || "Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <p className="text-base md:text-lg text-gray-600 mb-6">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Your Name:</label>
            <input
              className="w-full border rounded-lg border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all duration-300 px-4 py-3 text-gray-900"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
              placeholder="Enter your name"
              suppressHydrationWarning={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Your Email:</label>
            <input
              className="w-full border rounded-lg border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all duration-300 px-4 py-3 text-gray-900"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
              placeholder="Enter your email"
              suppressHydrationWarning={true}
            />
            {error.email && <p className="text-sm text-red-500">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Your Message:</label>
            <textarea
              className="w-full border rounded-lg border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all duration-300 px-4 py-3 text-gray-900 resize-none"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="5"
              value={userInput.message}
              placeholder="Enter your message"
            />
          </div>

          <div className="flex flex-col gap-3">
            {error.required && <p className="text-sm text-red-500">
              All fields are required!
            </p>}
            <button
              className="group bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {
                isLoading ?
                  <span>Sending Message...</span> :
                  <>
                    <span>Send Message</span>
                    <TbMailForward className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </>
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;