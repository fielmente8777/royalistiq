import { contact } from "@/utils/constent";
import {
  CafeIcon,
  HimalayanIcon,
  HouseKeepingIcon,
  PoolIcon,
  WifiIcon,
} from "../../../utils/landingIcon";
export const landingPageData = {
  offer: ["Direct Booking Offer: Save 15% + Free Breakfast"],

  hero: {
    image: "/landing-page/hero.png",
    images: [
      "/gallery/bnr.png",
      "/gallery/50x_11zon.jpg",
      "/room/12x_11zon.jpg",
      "/gallery/62x_11zon.jpg",
      "/gallery/88xx_11zon.jpg",
    ],
    tagline: "Luxury Stays · Rishikesh, Uttarakhand",
    title: "Where the <i>Himalayas</i> meet indulgence.",
    description:
      "A boutique retreat perched above Rishikesh, with a rooftop pool, an artisan cafe, and suites framing the Ganges valley.",
    rated: "Rated 4.9 · 1480+ Guests",
    benefits:
      "Save 15% when you book direct · No prepayment · Free cancellation",
  },

  highlights: [
    {
      label: "Rooftop Pool",
      icon: <PoolIcon />,
    },
    {
      label: "Himalayan Views",
      icon: <HimalayanIcon />,
    },
    {
      label: "In-house Cafe",
      icon: <CafeIcon />,
    },
    {
      label: "High-Speed Wi-Fi",
      icon: <WifiIcon />,
    },
    {
      label: "Daily Housekeeping",
      icons: <HouseKeepingIcon />,
    },
  ],

  aboutSection: {
    image: "/landing-page/about.png",
    title: "The Royalistiq Experience",
    heading: "A sanctuary carved into the <i class='text-p1' >foothills</i>",
    description:
      "Wake to mist over the Ganges, take breakfast on a private balcony, swim beneath open sky, and end the evening with cocktails on a terrace framed by pine dark mountains. Royalistiq is designed for the traveller who expects a little more.",
    features: [
      "Just 8 minutes from Laxman Jhula & Beatles Ashram",
      "Rooftop swimming pool with Himalayan panorama",
      "Award worthy cafe & rooftop lounge on site",
      "Concierge for rafting, yoga, and temple visits",
    ],
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },

  accommodations: {
    tagline: "Accommodations",
    title: "Choose your <i class='text-p1'>retreat</i>",
    description:
      "Every room is finished in warm woods, hand laid marble and soft gold accents, a quiet counterpoint to the wild Himalayan setting outside.",
    cards: [
      {
        images: [
          "/room/Deluxe-Twin/room-1.jpeg",
          "/room/Deluxe-Twin/room-2.jpeg",
          "/room/Deluxe-Twin/room-3.jpeg",
          "/room/Deluxe-Twin/room-4.jpeg",
        ],
        title: "Deluxe Twin",
        amenities: [
          "TCM supply with electric kettle",
          "Minibar",
          "WiFi",
          "water bottles",
          "toiletries",
        ],
        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },
      {
        images: ["/room/delux-king.jpg", "/room/delux-king.jpg"],
        title: "Deluxe King",
        amenities: [
          "TCM supply with electric kettle",
          "Minibar",
          "WiFi",
          "water bottles",
          "toiletries",
        ],
        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },
      {
        images: [
          "/room/family-suite/room-1.jpeg",
          "/room/family-suite/room-3.jpeg",
          "/room/family-suite/room-4.jpeg",
          "/room/family-suite/room-2.jpeg",
        ],
        title: "Family Suite",
        amenities: [
          "TCM supply with electric kettle",
          "Minibar",
          "WiFi",
          "water bottles",
          "toiletries",
        ],
        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },
      {
        images: ["/room/superior-king.jpg", "/room/superior-king.jpg"],
        title: "Superior King",
        amenities: [
          "TCM supply with electric kettle",
          "Minibar",
          "WiFi",
          "water bottles",
          "toiletries",
        ],
        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },
      {
        images: [
          "/room/superior-triple/img-2.jpeg",
          "/room/superior-triple/img-1.jpeg",
          "/room/superior-triple/img-3.jpeg",
        ],
        title: "Superior King Triple",
        amenities: [
          "TCM supply with electric kettle",
          "Minibar",
          "WiFi",
          "water bottles",
          "toiletries",
        ],
        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },
    ],
  },

  amenities: {
    tagline: "Amenities",
    title: "Curated for the <i class='text-p1'>discerning few</i>",
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
    items: [
      {
        image: "/landing-page/72x.jpg",
        title: "Rooftop Pool & Terrace",
        description:
          "Sunrise laps and evening cocktails, framed by the greater Himalayas.",
      },
      {
        image: "/landing-page/50x.jpg",
        title: "On The Rocks Cafe",
        description:
          "A moody, plush cafe serving artisan coffee and continental plates all day.",
      },
      {
        image: "/landing-page/41x.jpg",
        title: "Saaqi Rooftop Bar",
        description:
          "Curated wines, signature cocktails, and a private mandala centrepiece.",
      },
      {
        image: "/landing-page/54x.jpg",
        title: "Private Balconies",
        description:
          "Nearly every suite opens to mountain air and manicured foliage.",
      },
    ],
  },

  peekInside: {
    tagline: "A peek inside",
    title: "Moments at <i class='text-p1'>Royalistiq</i>",
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
    images: [
      // "/landing-page/Container.png",
      // "/landing-page/88xx.jpg",
      // "/landing-page/Container-6.png",
      // "/landing-page/Container-3.png",
      // "/landing-page/Container-4.png",
      // "/landing-page/81x.jpg",
      
      "/gallery/IMG_7123.PNG",
      "/gallery/IMG_7040.PNG",
      "/gallery/IMG_7003.PNG",
      "/gallery/IMG_7002.PNG",
      "/gallery/IMG_7039.PNG",
      "/gallery/IMG_6999.PNG",
      "/landing-page/68x.jpg",
      // "/landing-page/82x.jpg",
      "/gallery/88xx_11zon.jpg",
      "/gallery/85x_11zon.jpg",
      "/gallery/84x_11zon.jpg",
      "/gallery/83x_11zon.jpg",
      "/gallery/62x_11zon.jpg",
      "/gallery/61x_11zon.jpg",
      "/gallery/50x_11zon.jpg",
      "/room/4x_11zon.jpg",
      "/room/5x_11zon.jpg",
      "/room/10x_11zon.jpg",
      "/room/12x_11zon.jpg",
      "/room/16x_11zon.jpg",
      "/room/17x_11zon.jpg",
      "/room/22x_11zon.jpg",
      "/room/43x_11zon.jpg",
      "/room/44xx_11zon.jpg",
      "/room/64x_11zon.jpg",
      "/room/87xx_11zon.jpg",
      "/room/47x_11zon.jpg",
    ],
  },

  testimonials: {
    tagline: "Guest Stories",
    title: "Love from our Guests",
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
    reviews: [
      {
        rating: "★★★★★",
        review:
          "The rooms were clean and comfortable, the staff was polite and helpful, and the overall atmosphere was pleasant. The food was delicious, and the service was excellent. Everything was well-maintained and made my stay comfortable and enjoyable. I would definitely recommend this hotel and would love to visit again.",
        name: "Suhani Rawat",
        location: "Chennai",
      },
      {
        rating: "★★★★★",
        review:
          "Very peaceful stay we really enjoyed the hospitality the food was really good and specially the reception staff is very cooperative and soft spoken...do visit it's worth it",
        name: "Nakul Singh",
        location: "Bengaluru",
      },
      {
        rating: "★★★★★",
        review:
          "Had a wonderful stay at Royalistiq! Rooms were spotless, bed was super comfortable and staff was extremely courteous. Check-in was smooth and service was quick. Feels truly royal. Definitely coming back. Highly recommended.",
        name: "Kanishka Chaunwal",
        location: "Mumbai",
      },
    ],
  },

  locationSection: {
    location: "location",
    title: "In the heart of <i class='text-p1'>Rishikesh.</i>",
    description:
      "Elevated above the town centre, Royalistiq is minutes from the iconic bridges, riverside ghats and yoga capitals of Rishikesh, yet far enough for silence to return each evening.",
    places: [
      {
        title: "Laxman Jhula",
        distance: "05 min drive",
      },
      {
        title: "Janki Setu",
        distance: "15 min drive",
      },
      {
        title: "Dehradun Airport (DED)",
        distance: "45 min drive",
      },
    ],
    mapUrl: contact.mapUrl,
  },

  finalCta: {
    image: "/47x.png",
    tagline: "Reserve your stay",
    title: "Book direct. <i class='text-p1'>Save 15%.</i>",
    description:
      "Best rates guaranteed, complimentary breakfast, and priority pool access when you book advance.",
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },
};
