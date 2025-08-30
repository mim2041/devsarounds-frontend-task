import Image from "next/image";
import React from "react";
import frame from "@/assets/images/Illustration.png";
import Button from "../shared/Button";

const ContactUs = () => {
  return (
    <section className="my-12 lg:my-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8">
        <h1 className="text-center md:text-left">
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap ">
            Contact Us
          </span>
        </h1>
        <p className="hidden md:block text-[18px]">
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
        <p className="md:hidden text-center text-sm">
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="bg-[#F3F3F3] rounded-3xl p-6 md:p-8 lg:py-10 lg:px-20 mt-8 relative overflow-hidden">
        <div className="relative lg:min-h-[420px] ">
          {/* Left: Form */}
          <form className="space-y-5 relative z-10 lg:max-w-[60%]">
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="type"
                  defaultChecked
                  className="accent-[#B9FF66]"
                />
                <span>Say Hi</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="type" className="accent-[#B9FF66]" />
                <span>Get a Quote</span>
              </label>
            </div>

            <div>
              <label className="text-sm block mb-2">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-[#191A23]/20 bg-white px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm block mb-2">Email*</label>
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-xl border border-[#191A23]/20 bg-white px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm block mb-2">Message*</label>
              <textarea
                required
                placeholder="Message"
                rows={6}
                className="w-full rounded-xl border border-[#191A23]/20 bg-white px-4 py-3 outline-none resize-none"
              />
            </div>

            <Button type="submit" className="w-full hidden md:block">
              Send Message
            </Button>
          </form>

          {/* Right: Decorative graphic */}
          <div className="hidden lg:block absolute -right-[28.5%] top-1/2 -translate-y-1/2">
            <Image src={frame} alt="frame" className="w-[520px] h-auto" />
          </div>
        </div>
      </div>
      <Button type="submit" className="w-full md:hidden">
        Send Message
      </Button>
    </section>
  );
};

export default ContactUs;
