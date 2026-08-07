import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

export interface AboutSectionProps {
  image: string;
    title: string;
    heading: string;
    description: string;
    features: string[];
    buttons: {
        label: string;
        link: string;
    }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  heading,
  title,
  description,
  features,
  buttons,
  image,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
        <div className="hidden lg:block relative aspect-[4/3.8]">
          <Image src={image} alt="about" fill className="object-cover rounded-2xl" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <p className="uppercase text-p1 text-xs tracking-widest">
              {title}
            </p>
            <SectionHeading title={heading} wrapperClassName="max-w-lg w-full"/>
          </div>
          <div className="lg:hidden block relative aspect-[4/4.35]">
            <Image src={image} alt="about" fill className="object-cover" />
          </div>
          <p className="text-dark">{description}</p>

          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-p1" >✓</span>
                <span className="text-dark">{feature}</span>
              </li>
            ))}
          </ul>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 max-w-md gap-4 justify-center ">
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
    </SectionWithContainer>
  );
};

export default AboutSection;

