export type Partner = {
  title: string;
  image?: string;
  content?: string;
};

export type Feature = {
  title: string;
  id?: string;
  content?: string;
  intro?: boolean;
  icon?: string;
};
export type Card = {
  title: string;
  id?: string;
  content?: string;
  image?: string;
  icon?: string;
  link?: string;
};
export interface Filter {
  name: string;
  count: boolean;
  short: boolean;
  slug: boolean;
  small: boolean;
  plural?: string;
}

export type Content = {
  settings: {
    teaserPagination: number;
    indexPagination: number;
    fullPagePagination: number;
    previewLength: number;
    news: {
      newsFilters: Filter[];
    };
  };
  hero: {
    logo: string;
    title: string;
    subtitle?: string;
    image?: {
      src?: string;
      alt?: string;
    };
    background: string;
  };
  partners: Partner[];
  services: Feature[];
  blogs: Card[];
  about: {
    mission: string;
    features: Feature[];
    team: Card[];
  };
};

const content: Content = {
  settings: {
    teaserPagination: 3,
    indexPagination: 4,
    fullPagePagination: 6,
    previewLength: 160,
    news: {
      newsFilters: [
        {
          name: "categories",
          count: true,
          short: false,
          slug: false,
          small: false,
        },
        {
          name: "tags",
          count: false,
          short: true,
          slug: true,
          small: true,
        },
        {
          name: "author",
          count: false,
          short: true,
          slug: false,
          small: true,
          plural: "authors",
        },
      ],
    },
  },
  hero: {
    logo: "/src/assets/square-light-160.png",
    title: "Simplify.<br>Standardise.<br>Optimise.",
    image: {
      src: "/src/assets/smoke.jpg",
      alt: "",
    },
    background: "gradient",
  },
  partners: [
    {
      title: "NTT",
      image: "/src/assets/ntt.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur apdipiscing elit. Lorem ipsum dolor sit amet, consectetur apdipiscing elit. Lorem ipsum dolor sit amet, consectetur apdipiscing elit.",
    },
    {
      title: "Panorays",
      image: "/src/assets/panorays.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur apdipiscing elit. Lorem ipsum dolor sit amet, consectetur apdipiscing elit. Lorem ipsum dolor sit amet, consectetur apdipiscing elit.",
    },
    {
      title: "Logicgate",
      image: "/src/assets/logicgate.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur apdipiscing elit. Lorem ipsum dolor sit amet, consectetur apdipiscing elit. Lorem ipsum dolor sit amet, consectetur apdipiscing elit.",
    },
    {
      title: "Core to Cloud",
      image: "/src/assets/core-to-cloud.png",
    },
    {
      title: "Risktec",
      image: "/src/assets/risktec.png",
    },
  ],
  services: [
    {
      title: "Professional Services",
      id: "professional-services",
      content:
        "We support our customers execute against their GRC goals, whether they be implementing technology, selecting the best fit technology or outsourcing the management of their GRC system entirely.",
      intro: true,
    },
    {
      title: "Implementation",
      id: "implementation",
      content:
        "Our team are market experts with decades of experience covering sales, technical validation and implementation making us a trusted authority within the industry.",
      intro: true,
    },
    {
      title: "Managed Services",
      id: "managed-services",
      content:
        "Our team are market experts with decades of experience covering sales, technical validation and implementation making us a trusted authority within the industry.",
      intro: true,
    },
  ],
  blogs: [
    {
      title: "Demo Title",
      id: "professional-services",
      link: "/services#professional-services",
      content:
        "We support our customers execute against their GRC goals, whether they be implementing technology, selecting the best fit technology or outsourcing the management of their GRC system entirely.",
      image: "/src/assets/dive.jpg",
    },
    {
      title: "Demo Title Alt",
      id: "implementation",
      link: "/services#implementation",
      content:
        "Our team are market experts with decades of experience covering sales, technical validation and implementation making us a trusted authority within the industry.",
      image: "/src/assets/hikers-mountains.jpg",
    },
    {
      title: "Demo Blog Title Other",
      id: "managed-services",
      link: "/services#managed-services",
      content:
        "Our team are market experts with decades of experience covering sales, technical validation and implementation making us a trusted authority within the industry.",
      image: "/src/assets/dive.jpg",
    },
    {
      title: "Demo Title Alt",
      id: "implementation",
      link: "/services#implementation",
      content:
        "Our team are market experts with decades of experience covering sales, technical validation and implementation making us a trusted authority within the industry.",
      image: "/src/assets/hikers-mountains.jpg",
    },
  ],
  about: {
    mission:
      "DELIVER CLARITY ON COMPLEX GRC PROBLEMS TO OUR CUSTOMERS THROUGH AN ECOSYSTEM OF BEST-IN-CLASS TECHNOLOGY AND EXPERTISE",
    features: [
      {
        title: "Transparency",
        icon: "mdi-light:magnify",
        content:
          "We strive to ensure our customers are not provided a rose-tinted view of any solution.<br/><br/>Identifying challenges and limitations early in the process enables a higher level of success both in the short and longer term.",
        intro: true,
      },
      {
        title: "commitment",
        icon: "ph:handshake-thin",
        content:
          "Our responsibility is to our partners and customers, ensuring the success of their projects.<br><br>We provide a ‘check and balance’ with vendors and customers, and effectively manage the entire project to ensure the fulfilment of the best interests of both parties.",
        intro: true,
      },
      {
        title: "Integrity",
        icon: "ph:scales-thin",
        content:
          "Technical validation process which goes beyond surface-level demonstrations and marketing claims.<br><br>We carefully choose our collaborators and strive to shield our vendors from competition with each other. Our aim is to pair the appropriate customers with the suitable technology or service.",
        intro: true,
      },
    ],
    team: [
      {
        title: "Homer Simpson",
        image: "/src/assets/person-3.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur apdipiscing elit",
      },
      {
        title: "Homer Simpson",
        image: "/src/assets/person-3.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur apdipiscing elit",
      },
      {
        title: "Homer Simpson",
        image: "/src/assets/person-3.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur apdipiscing elit",
      },
      {
        title: "Homer Simpson",
        image: "/src/assets/person-3.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur apdipiscing elit",
      },
    ],
  },
};

export default content;
