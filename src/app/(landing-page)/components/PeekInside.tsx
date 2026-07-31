import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface PeekInsideProps {
  tagline: string;
  title: string;
  buttons: {
    label: string;
    link: string;
  }[];
  images: string[];
}
const PeekInside: React.FC<PeekInsideProps> = ({
  tagline,
  title,
  buttons,
  images,
}) => {
  const gridPattern = [
    "lg:row-span-6 row-span-3 lg:col-span-2",
    "row-span-3",
    "row-span-3",
    "lg:row-span-6 row-span-3",
    "row-span-3",
    "row-span-3",
    "row-span-3",
    "row-span-3",
  ];

  return (
    <SectionWithContainer sectionClassName="bg-dark">
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="space-y-2 text-center">
          <p className="uppercase text-white text-xs tracking-widest">
            {tagline}
          </p>
          <SectionHeading title={title} titleColor="white" />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 grid-flow-row auto-rows-16 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                gridPattern[index % gridPattern.length]
              } overflow-hidden relative aspect-auto`}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-xl"
              />
              {/* <div className="absolute inset-0 bg-black/40 z-10 text-white">{index}</div> */}
            </div>
          ))}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 max-w-md w-full mx-auto gap-4 justify-center mt-6">
          {buttons.map((button, index) => (
            <li key={index}>
              <LinkButton
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`rounded-md w-full justify-center uppercase
                    ${
                      index === 0
                        ? " text-p1 bg-white"
                        : "border border-primary text-white border-none bg-p1"
                    }
                    `}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default PeekInside;
