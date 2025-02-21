import React, { useState, useEffect, useRef } from "react";
import { send } from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactField = () => {
  const [formData, setFormData] = useState({
    userType: "",
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Please wait while we send your message...");

    const { userType, fullName, phone, email, subject, message } = formData;

    if (!userType || !fullName || !phone || !email || !subject || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { userType, fullName, phone, email, subject, message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({
          userType: "",
          fullName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        }); // Clear form
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again later.");
      });
  };

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 space-y-4 bg-gray-50 shadow-md rounded-xl"
      >
        <h2 className="text-3xl font-bold text-center text-ev-gold">Career/Enquiry</h2>

        {/* Select Option */}
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--first-color)] text-black"
          required
        >
          <option value="">Please choose one option</option>
          <option value="Vendor">Vendor</option>
          <option value="Client">Client</option>
        </select>

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--first-color)] text-black"
          required
        />

        {/* Phone Number */}
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--first-color)] text-black"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--first-color)] text-black"
          required
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--first-color)] text-black"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--first-color)] text-black"
          rows="5"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[var(--third-color)] rounded-md hover:bg-ev-gold focus:outline-none transition-all ease-in-out delay-100 duration-700"
        >
          Send Message
        </button>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-2 text-sm font-medium ${
              status.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactField;