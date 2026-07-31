"use client";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, CallIcon, WhatsAppIcon } from "../buttons/LinkButton";
import { navData } from "./navData";
import { usePathname } from "next/navigation";

const LandingNavbar = () => {
  const pathName = usePathname();
  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  //   return;
  // };

  if(pathName === "/thank-you/"){
    return null;
  }

  return (
    <header className="max_screen_width w-full bg-background">
      {/* TOP BAR */}
      <nav className="max_width">
        <div className="flex py-4 w-full items-center justify-between">
          {/* LOGO */}
            <div className="relative aspect-[4/1.1] w-40 md:w-45">
              <Image
                src={navData.logo}
                alt="logo Royalistiq"
                fill
                priority
                className="object-cover"
              />
            </div>
          
          {/* BUTTON */}
          <ul className="flex items-center gap-2">
            {navData.buttons.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-lg px-2 md:px-6 py-2 md:py-3 ${index === 0 ? "bg-transparent text-p1 border border-p1" : "bg-p1 text-white"} font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:shadow-lg`}
                >
                  {index === 0 ? (
                    <span className="">
                      {/* <WhatsAppIcon /> */}
                      <CallIcon />
                    </span>
                  ) : (
                    <span className="">
                      <CalendarIcon />
                    </span>
                  )}
                  <span className="lg:block text-base hidden tracking-widest">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
