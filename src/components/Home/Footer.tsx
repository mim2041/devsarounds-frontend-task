import Link from "next/link";
import { PiStarFourFill } from "react-icons/pi";
import logo from "@/assets/logos/logoWhite.svg";
import Image from "next/image";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const navItems = [
    { title: "About us", link: "/about-us" },
    { title: "Services", link: "/services" },
    { title: "Use Cases", link: "/use-cases" },
    { title: "Pricing", link: "/pricing" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <footer className="bg-[#191A23] text-white rounded-t-3xl mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between gap-6">
          <div className="flex items-center gap-2 text-[28px] md:text-[36px]">
            <Image src={logo} alt="Positivus Logo" />
            <h1 className="font-grotesk font-[500]">Positivus</h1>
          </div>

          <ul className="flex flex-col md:flex-row gap-6 text-sm lg:text-lg md:text-base">
            {navItems.map((i, idx) => (
              <li key={idx}>
                <Link
                  href={i.link}
                  className="hover:opacity-80 md:underline-offset-4 md:underline"
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:flex items-center gap-4 text-xl text-black font-bold hidden">
            <div className="w-8 h-8 rounded-full bg-white grid place-items-center">
              in
            </div>
            <div className="w-8 h-8 rounded-full bg-white grid place-items-center">
              f
            </div>
            <div className="w-8 h-8 rounded-full bg-white grid place-items-center">
              <TiSocialTwitter />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 text-center md:text-left gap-8 lg:gap-0 lg:text-lg">
          <div>
            <span className="inline-block bg-[#B9FF66] text-black rounded-lg px-3 py-1 mb-4">
              Contact us:
            </span>
            <div className="space-y-4 text-white">
              <p>
                <span className="font-medium">Email:</span> info@positivus.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> 555-567-8901
              </p>
              <p>
                <span className="font-medium">Address:</span> 1234 Main St
                <br /> Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 md:p-8">
            <form className="flex flex-col md:flex-row w-full gap-4  items-center h-full">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-xl bg-transparent border border-white px-4 py-3 text-white outline-none placeholder:text-white/70 w-full md:w-auto"
              />
              <button
                type="submit"
                className="bg-[#B9FF66] text-black rounded-xl px-6 py-3 whitespace-nowrap w-full md:w-auto"
              >
                Subscribe to news
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center gap-4 text-black font-bold md:hidden">
            <div className="w-6 h-6 rounded-full bg-white grid place-items-center">
              in
            </div>
            <div className="w-6 h-6 rounded-full bg-white grid place-items-center">
              f
            </div>
            <div className="w-6 h-6 rounded-full bg-white grid place-items-center">
              <TiSocialTwitter />
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-white" />

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mt-10 text-white/80 text-sm text-center md:text-left">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link href="#" className="md:underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
