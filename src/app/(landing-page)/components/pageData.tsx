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
          "/landing-page/18x.jpg",
          "/landing-page/19x.jpg",
          "/landing-page/20x.jpg",
        ],
        title: "Deluxe Valley Room",
        amenities: ["King bed", "Valley view balcony", "Marble bath", "45 sqm"],
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
          "/landing-page/47x.jpg",
          "/landing-page/31x.jpg",
          "/landing-page/22x.jpg",
        ],
        title: "Premium Suite",
        amenities: [
          "Private terrace",
          "Living area",
          "Mountain vista",
          "65 sqm",
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
        images: ["/landing-page/66x.jpg", "/landing-page/67x.jpg"],
        title: "Explorer Bunk",
        amenities: [
          "Boutique dorm",
          "Personal locker",
          "Reading light",
          "Shared lounge",
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
        title: "Lounge Bar",
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
      "/landing-page/Container.png",
      "/landing-page/88xx.jpg",
      "/landing-page/Container-6.png",
      "/landing-page/Container-3.png",
      "/landing-page/Container-4.png",
      "/landing-page/81x.jpg",
      "/landing-page/68x.jpg",
      "/landing-page/82x.jpg",
    ],
  },

  testimonials: {
    tagline: "Guest Stories",
    title: "Loved by 4,200+ guests",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Priya S.",
        location: "Chennai",
      },
      {
        rating: "★★★★★",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Rahul M.",
        location: "Bengaluru",
      },
      {
        rating: "★★★★★",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Anita R.",
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
        distance: "00 min drive",
      },
      {
        title: "Ram Jhula & Parmarth Ghat",
        distance: "00 min drive",
      },
      {
        title: "Beatles Ashram",
        distance: "00 min drive",
      },
      {
        title: "Dehradun Airport (DED)",
        distance: "00 min drive",
      },
    ],
    mapUrl: contact.mapUrl,
  },

  finalCta: {
    image: "/landing-page/final-cta.png",
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
