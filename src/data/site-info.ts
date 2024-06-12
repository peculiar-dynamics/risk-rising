export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: string;
  footerOnly?: boolean;
  active?: boolean;
  footer?: boolean;
  contact?: boolean;
};
export type Page = {
  key: string;
  href: string;
  children?: Page[];
};

export type SiteInfo = {
  name: string;
  title: string;
  description: string;
  url: string;
  domain: string;
  themeColor: string;
  logo: string;
  favicon: string;
  twitterHandle: string;
  email: {
    defaultContact: string;
    defaultSubject: string;
  };
  business: {
    legalName: string;
    companiesReg: string;
    VATReg?: string;
    regAddress: string;
    tradingAddress?: string;
    phone?: string;
  };
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
  pages: Page[];
  navCta?: any;
  cookies?: any;
};

const siteInfo: SiteInfo = {
  name: "Risk Rising", // business name SEO subtitle
  title: "Simplify. Standardise. Optimise", // tagline
  description: ".",
  url: "https://riskrising.com", // public domain without closing /
  domain: "riskrising.com",
  themeColor: "#27AAE1",
  logo: "/assets/square-160.png",
  favicon: "/assets/favicon.svg",
  twitterHandle: "astrodotbuild",
  email: {
    defaultContact: "Bobby@riskrising.com",
    defaultSubject: "Website Enquiry",
  },
  business: {
    legalName: "Business Ltd",
    companiesReg: "1421814",
    VATReg: "420156932",
    regAddress: "3A Bencliffe Avenue, Leeds, LS17 6QJ",
    tradingAddress: "3A Bencliffe Avenue, Leeds, LS17 6QJ",
    phone: "01234 567 890",
  },
  image: {
    src: "/assets/full-250x150.png",
    alt: "Risk Rising - simplify, standardise, optimise.",
  },
  socialLinks: [
    {
      platform: "github",
      href: "https://github.com/withastro/astro",
      me: "https://github.com/withastro/",
      text: "Go to Astro's GitHub repo",
      icon: "mdi:github",
    },
    {
      platform: "discord",
      href: "/chat",
      text: "Join the Astro community on Discord",
      icon: "mdi:discord",
    },
    {
      platform: "twitter",
      href: "https://twitter.com/astrodotbuild",
      me: "https://twitter.com/astrodotbuild",
      text: "Follow Astro on Twitter",
      icon: "mdi:twitter",
    },
    {
      platform: "facebook",
      href: "https://m.webtoo.ls/@astro",
      me: "https://m.webtoo.ls/@astro",
      text: "Follow Astro on Mastodon",
      footerOnly: true,
      icon: "mdi:facebook",
      active: true,
      footer: true,
      contact: true,
    },
    {
      platform: "instagram",
      href: "https://instagram.com/glosfarm",
      text: `Follow us on Instagram`,
      icon: "mdi:instagram",
      active: true,
      footer: true,
    },
    {
      platform: "google",
      href: "https://g.co/kgs/X6GJ3ry",
      text: "Find us on Google",
      icon: "mdi:google",
      active: true,
      footer: true,
    },
  ],
  pages: [
    {
      key: "Home",
      href: "/",
    },
    {
      key: "About Us",
      href: "/about/",
    },
    {
      key: "Services",
      href: "/services/",
      children: [
        {
          key: "Overview",
          href: "/services/",
        },
        {
          key: "Service 1",
          href: "/services/service1/",
        },
        {
          key: "Service 2",
          href: "/services/service2/",
        },
      ],
    },
    {
      key: "News",
      href: "/news/",
    },
    {
      key: "Contact",
      href: "/contact/",
    },
  ],
  navCta: {
    label: "Get a Quote",
    href: "/contact/",
  },
  cookies: {
    GA4: "G-XXXXXXXXXX",
    GTM: "GTM-XXXXXXXXX",
  },
};

export default siteInfo;
