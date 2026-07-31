import { contact } from "@/utils/constent";

interface FooterData {
  logo: string;

  cta: {
    label: string;
    href: string;
  }[];
  lists: {
    title?: string;
    links: {
      title?: string;
      icon?: React.ReactNode;
      label?: string;
      href?: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo.png",
  cta: [
    {
      label: "CALL NOW",
      href: contact.callCta,
    },
    {
      label: "ENQUIRE NOW",
      href: contact.WhatsappCta,
    },
    {
      label: "BOOK NOW",
      href: "#form",
    },
  ],
  lists: [
    {
      title: "Locations",
      links: [
        {
          title: contact.address,
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "WhatsApp: " + contact.phone[0],
          href: contact.WhatsappCta,
        },
        {
          label: "call: " + contact.phone[0],
          href: contact.callCta,
        },

        {
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};
