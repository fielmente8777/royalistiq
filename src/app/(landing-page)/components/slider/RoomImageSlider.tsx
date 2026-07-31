"use client";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

const RoomImageSlider: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  return (
    <div className="w-full room-card">
      <SwiperCarousel
        data={images}
        modules={[Autoplay,Navigation]}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={0}
        loop

        renderSlide={(image) => (
          <div className="w-full relative aspect-4/3.5">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
      />
    </div>
  );
};

export default RoomImageSlider;
