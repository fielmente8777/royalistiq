import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface AmenitiesSectionProps {
  tagline: string;
  title: string;
  buttons: {
    label: string;
    link: string;
  }[];
  items: {
    image: string;
    title: string;
    description: string;
  }[];
}

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  tagline,
  title,
  buttons,
  items,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] grid-cols-1">
          <div className="space-y-2">
            <p className="uppercase text-p1 text-xs tracking-widest">
              {tagline}
            </p>
            <SectionHeading title={title} />
          </div>
          <ul className="lg:grid hidden grid-cols-1 md:grid-cols-2 w-full gap-2 justify-center mt-auto ml-auto max-w-sm">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`rounded-md w-full uppercase text-nowrap text-sm! justify-center
                    ${
                      index === 0
                        ? "bg-transparent text-p1"
                        : "border border-primary text-white bg-p1"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {items.map((feature, index) => (
            <AmenitiesCard key={index} {...feature} />
          ))}
          <ul className="lg:hidden grid  grid-cols-1 md:grid-cols-2 w-full gap-2 justify-center mt-auto ml-auto max-w-sm">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`rounded-md w-full uppercase text-nowrap text-sm! justify-center
                    ${
                      index === 0
                        ? "bg-transparent text-p1"
                        : "border border-primary text-white bg-p1"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AmenitiesSection;

interface AmenitiesCardProps {
  image: string;
  title: string;
  description: string;
}

const AmenitiesCard: React.FC<AmenitiesCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-3xl font-primary text-dark">{title}</h3>
      <p className="text-light">{description}</p>
    </div>
  );
};
