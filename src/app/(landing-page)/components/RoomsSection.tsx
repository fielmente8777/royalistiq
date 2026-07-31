import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import RoomImageSlider from "./slider/RoomImageSlider";

interface RoomsSectionProps {
  tagline: string;
  title: string;
  description: string;
  cards: {
    images: string[];
    title: string;
    amenities: string[];
    buttons: {
      label: string;
      link: string;
    }[];
  }[];
}

const RoomsSection: React.FC<RoomsSectionProps> = ({
  tagline,
  title,
  cards,
  description,
}) => {
  return (
    <SectionWithContainer sectionClassName="border-y border-p1 bg-[#EFEBE4]">
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="space-y-2 text-center">
          <p className="uppercase text-p1 text-xs tracking-widest">{tagline}</p>
          <SectionHeading title={title} />
          <p className="text-light max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {cards.map((card, index) => (
            <RoomsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default RoomsSection;

export const RoomsCard: React.FC<RoomsSectionProps["cards"][0]> = ({
  title,
  amenities,
  buttons,
  images,
}) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden box-shadow">
      <RoomImageSlider images={images} title={title} />
      <div className="flex flex-col gap-2 border border-[#DFD6C9] bg-white p-8 rounded-b-2xl">
        <p className="text-dark text-2xl font-primary">{title}</p>
        <ul className="flex flex-col gap-6 my-2">
          {amenities.map((amenity, index) => (
            <li
              key={index}
              className="text-light text-sm flex items-center gap-1.5"
            >
              <span className="bg-p1 w-1 aspect-square rounded-full" />
              {amenity}
            </li>
          ))}
        </ul>
        <div className="w-full h-px bg-[#DFD6C9] mb-3 mt-1" />
        <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 justify-center ">
          {buttons.map((button, index) => (
            <li key={index}>
              <LinkButton
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`rounded-md w-full text-nowrap text-sm! justify-center
                    ${
                      index === 0
                        ? "bg-transparent text-p1"
                        : "border border-primary text-white border-none bg-p1"
                    }
                    `}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
