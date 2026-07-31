import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import Form1 from "../forms/Form1";
import { FillLocationIcon } from "@/utils/icons";

interface ImageBannerProps {
  image: string;
  tagline: string;
  title: string;
  description: string;
  rated: string;
  benefits: string;
}
const ImageBanner: React.FC<ImageBannerProps> = ({
  title,
  image,
  tagline,
  description,
  benefits,
  rated,
}) => {
  // Normalize rated to a safe integer between 0 and 5
  let _num = Number(rated);
  if (!Number.isFinite(_num)) _num = 0;
  const ratedNum = Math.min(5, Math.max(0, Math.floor(_num)));
  const emptyStars = 5 - ratedNum;

  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-16/9.5 aspect-4/7 overflow-hidden"
    >
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent lg:via-transparent to-black/80  " />

      <div className="absolute inset-0  z-20 flex items-end  pb-10 justify-center">
        <Container>
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col items-center">
              <div className="space-y-2 w-full">
                <p className="flex items-center mx-auto max-lg:text-[10px] bg-p1 gap-2 text-sm text-white w-fit border-[0.8px] border-white/40 shadow-inner py-1.5 px-3 rounded-full uppercase tracking-widest">
                  {/* <span>
                    <FillLocationIcon />
                  </span> */}
                  {tagline}
                </p>
                <h1
                  className="font-primary text-4xl md:text-6xl/tight  text-white lg:max-w-xl mx-auto text-center"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h1>
                <p className="text-white max-w-2xl mx-auto text-center mt-4">
                  {description}
                </p>
              </div>
            </div>
            <div
              className="bg-white/30 border max-lg:hidden border-white/40 backdrop-blur-xs py-6 px-1.5 rounded-[20px] mt-8 flex flex-col gap-5"
              id="form"
            >
              <Form1 />
              <p
                className="text-sm text-white tracking-widest text-center"
                dangerouslySetInnerHTML={{ __html: benefits }}
              />
            </div>
            <p className="text-white text-center flex items-center gap-2 mx-auto">
              <span>
                {Array.from({ length: emptyStars }).map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </span>
              {rated}
            </p>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ImageBanner;
