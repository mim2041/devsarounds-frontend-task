import { testimonialsData } from "@/data/testimonialsData";
import TestimonialSlider from "../shared/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="my-12 lg:my-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8">
        <h1 className="text-center md:text-left">
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap ">
            Testimonials
          </span>
        </h1>
        <p className="hidden md:block text-[18px]">
          Hear from Our Satisfied Clients: Read Our Testimonials <br />
          to Learn More about Our Digital Marketing Services
        </p>
        <p className="md:hidden text-center text-sm">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <TestimonialSlider />
    </div>
  );
};

export default Testimonials;
