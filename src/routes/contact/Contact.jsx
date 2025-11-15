import React, { useState } from "react";
import { Container } from "../../utils/Utils";
import { LuPhone } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactInfo = ({ icon: Icon, title, children }) => (
  <article className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#8A33FD] text-white text-xl">
        <Icon />
      </div>
      <h2 className="font-medium text-lg">{title}</h2>
    </div>
    <div className="text-gray-700 text-sm">{children}</div>
  </article>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Forma yuborish
  const handleSubmit = async (e) => {
    e.preventDefault();

    const BOT_ID = "6456711758:AAGhN0zQzQG9Xfr6gRG6pD5xcJmlTN_eIOc";
    const CHAT_ID = "5084402296";

    const { name, email, phone, message } = formData;
    const telegramMessage = `
📩 *New Contact Message:*
👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
💬 Message: ${message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_ID}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error: Unable to send message.");
    }
  };

  const inputStyle =
    "w-full p-3 bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6f29c9] transition";

  return (
    <Container>

      <section className="grid grid-cols-1 md:grid-cols-7 gap-10 py-10 px-5">
        <aside className="col-span-2 shadow-md p-6 flex flex-col gap-8 rounded-sm">
          <ContactInfo icon={LuPhone} title="Call To Us">
            <p>We are available 24/7, 7 days a week.</p>
            <p className="mt-1">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+998901234567"
                className="text-[#8A33FD] hover:underline"
              >
                +998 (90) 123-45-67
              </a>
            </p>
          </ContactInfo>

          <hr />

          <ContactInfo icon={IoMailOutline} title="Write To Us">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="mt-1">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:customer@exclusive.com"
                className="text-[#8A33FD] hover:underline"
              >
                customer@exclusive.com
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@exclusive.com"
                className="text-[#8A33FD] hover:underline"
              >
                support@exclusive.com
              </a>
            </p>
          </ContactInfo>
        </aside>

        <div className="col-span-5 shadow-md p-6 rounded-sm">
          <form
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className={inputStyle}
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email *"
              className={inputStyle}
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone *"
              className={inputStyle}
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="col-span-3">
              <textarea
                name="message"
                placeholder="Your Message *"
                className={`${inputStyle} h-32 resize-none`}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-span-3 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#8A33FD] text-white rounded-md font-semibold hover:bg-[#6f29c9] transition cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </section>
    </Container>
  );
};

export default Contact;
