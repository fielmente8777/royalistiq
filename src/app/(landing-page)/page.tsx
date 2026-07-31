import Form1 from "@/components/forms/Form1";
import { SectionWithContainer } from "@/components/sectionComponants";
import { landingPageData } from "./components/pageData";
import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsSection";
import Testimonials from "./components/Testimonials";
import LocationSection from "./components/LocationSection";
import FinalCta from "./components/FinalCta";
import AmenitiesSection from "./components/AmenitiesSection";
import ImageBanner from "@/components/banners/ImageBanner";
import PeekInside from "./components/PeekInside";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <ImageBanner {...landingPageData.hero} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary lg:hidden"
        containerClassName="space-y-4"
      >
        <Form1 />
        <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </SectionWithContainer>
      <AboutSection {...landingPageData.aboutSection} />
      <RoomsSection {...landingPageData.accommodations} />
      <AmenitiesSection {...landingPageData.amenities} />
      <PeekInside {...landingPageData.peekInside} />
      <Testimonials {...landingPageData.testimonials} />
      <LocationSection {...landingPageData.locationSection} />
      <FinalCta {...landingPageData.finalCta} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary lg:hidden"
        containerClassName="space-y-4"
      >
        <Form1 />
        <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </SectionWithContainer>
    </main>
  );
}
