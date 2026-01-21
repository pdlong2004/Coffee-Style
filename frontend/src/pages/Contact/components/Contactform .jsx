import React from "react";
import usePostContact from "../../../hooks/usePostContact";
import Button from "../../../components/layout/Button";

const Contactform = () => {
  const { formData, loading, error, success, handleChange, submitForm } =
    usePostContact();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-20 md:gap-10 lg:gap-25 p-15 border-gray-300 border">
      <div>
        <div className="uppercase text-sm tracking-widest text-gray-500 mb-2.5 font-semibold">
          Contact Form
        </div>
        <div className="text-lg mb-6.25">
          Drop us your message and I'll get back to you as soon as possible.
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-3 font-semibold">
              Name
            </p>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Phùng Đức Long"
              className="uppercase text-sm tracking-widest placeholder:text-gray-400 focus:text-black font-semibold w-full border border-gray-300 p-4.5"
              required
            />

            <p className="uppercase text-sm tracking-widest text-gray-500 mb-3 font-semibold">
              Email Address
            </p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="phungduclong268@gmail.com"
              className="uppercase text-sm tracking-widest placeholder:text-gray-400 focus:text-black font-semibold w-full border border-gray-300 p-4.5"
              required
            />

            <p className="uppercase text-sm tracking-widest text-gray-500 mb-3 font-semibold">
              Your Message
            </p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi! I would like to ask something about mugs."
              className="uppercase text-sm tracking-widest placeholder:text-gray-400 focus:text-black focus:border focus:border-gray-500 font-semibold w-full border border-gray-300 p-4.5 h-32"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-black! text-white"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {success && (
              <p className="text-green-600">Message sent successfully!</p>
            )}

            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>

      <div>
        <div>
          <div className="uppercase text-sm tracking-widest text-gray-500 mb-2.5 font-semibold">
            Contact Form
          </div>
          <div className="mb-2.5 text-lg">CoffeeStyle. Inc</div>
          <ul className="space-y-1 text-gray-500 mb-6.25">
            <li>Pride Ave, </li>
            <li>Hamlyn Heights </li>
            <li>VIC 3215</li>
            <li>Australia</li>
          </ul>
        </div>
        <div className="mb-10">
          <div className="uppercase text-sm tracking-widest text-gray-500 mb-2.5 font-semibold">
            Call US
          </div>
          <a href="tel:0329488038" class="contact-form-link">
            0329 488 038
          </a>
        </div>
        <div>
          <div className="uppercase text-sm tracking-widest text-gray-500 mb-2.5 font-semibold">
            Email Us
          </div>
          <a href="mailto:phungduclong268@gmail.com" class="contact-form-link">
            phungduclong268@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
