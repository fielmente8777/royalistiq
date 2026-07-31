import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface LocationSectionProps {
  location: string;
  title: string;
  description: string;
  places: {
    title: string;
    distance: string;
  }[];
  mapUrl: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  title,
  description,
  places,
  mapUrl,
  location,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background2 border-y border-p1">
      <div className="grid  lg:grid-cols-2 grid-cols-1 items-center gap-8 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div>
            <p className="uppercase text-p1 text-xs tracking-widest">
              {location}
            </p>
            <SectionHeading title={title} />
          </div>
          
          <p className="text-dark ">{description}</p>
          <ul className="flex flex-col w-full gap-6">
            {places.map((place, index) => (
              <li
                key={index}
                className="flex justify-between gap-2 border-b-[0.8px] border-[#DDD7CD] pb-3"
              >
                <span className="text-dark">{place.title}</span>
                <span className="text-dark uppercase">{place.distance}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
          <LazyLoadedMap src={mapUrl} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default LocationSection;
