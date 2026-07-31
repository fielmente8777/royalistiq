"use client";

import { useEffect, useState } from "react";
import { landingPageData } from "@/app/(landing-page)/components/pageData";
import { SectionWithContainer } from "./sectionComponants";
import { usePathname } from "next/navigation";

const OfferSection = () => {
  const pathName = usePathname();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if(pathName === "/thank-you/"){
    return null;
  }

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName={`bg-dark py-1 w-full z-50   ${
        isFixed
          ? "fixed top-0 animate-offer-slide left-1/2 -translate-x-1/2"
          : "relative"
      }`}
    >
      <p className="text-center text-white">
        {landingPageData.offer[0]}
      </p>
    </SectionWithContainer>
  );
};

export default OfferSection;