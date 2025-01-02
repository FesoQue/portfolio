import { Icons } from "@/components/icons";

export const DATA = {
  name: "Adefeso Qudus",
  initials: "AQ",
  url: "https://qudus01.vercel.app/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "My passion lies in building intuitive and engaging user interfaces that deliver real value to users and businesses alike.",
  summary:
    "With over 4 years of experience in frontend development, I have worked with a range of modern frontend frameworks and technologies (React, Nextjs, Svelte, React Native) to build intuitive and engaging user interfaces that not only captivate but drive meaningful impact. I've been involved in projects that implement best practices like Micro-Frontend Architecture, UI Component Libraries, and UX Design Systems. I enjoy collaborating with cross-functional teams and contributing to technical discussions that shape the product’s direction. My colleagues and peers recognize me as a strong communicator, team player, and someone always willing to help mentor and coach others.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "React Native",
    "SvelteKit",
    "Supabase",
    "Tailwind",
    "HTML",
    "CSS",
    "Styled Components",
    "Git/Github",
    "Redux Toolkit",
    "REST & GraphQL APIs",
    "Wix",
  ],
  contact: {
    email: "adefesoq@gmail.com",
    tel: "+2348168127242",
    social: {
      GitHub: {
        url: "https://github.com/FesoQue",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/adefeso-qudus/",
        icon: Icons.linkedin,
      },
    },
  },

  work: [
    {
      company: "FunZ",
      href: "",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Lead Frontend Engineer",
      logoUrl: "/funz.png",
      start: "May 2024",
      end: "Present",
      description:
        "Leading the development of an event management platform that has hosted notable events like TEDx, Greater Lagos, South-East Business Summit, Jeriq Hood, and various tech events. Since launch, the platform has gained over 25,000 registered users and over 200K+ visits. I also implemented analytics tools for organizers to visualize sales performance and spearheaded an international feature allowing global event hosting with multi-currency payment options.",
    },
    {
      company: "CluxMedia",
      href: "",
      badges: [],
      location: "U.S",
      title: "Frontend Engineer",
      logoUrl: "/cluxmedia.jpeg",
      start: "September 2023",
      end: "May 2024",
      description:
        "At Cluxmedia, I worked on an AI platform that helps doctors create comprehensive H&P notes and assessments. By inputting the chief complaint, key patient history, and suggested diagnoses, the platform generates detailed H&P notes, assessments, and clinical plans to streamline patient care.",
    },
    {
      company: "Ecscorp",
      href: "",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Frontend Engineer",
      logoUrl: "/ecs.png",
      start: "July 2022",
      end: "August 2023",
      description:
        "At Ecscorp, I worked on migration of an outdated e-commerce codebase from React 16 to React 18, overseeing code refactoring, dependency updates, and compatibility with the latest React ecosystem. I also spearheaded the headless integration with Magento for seamless inventory, cart, and order management, along with implementing robust internationalization features.",
    },
    {
      company: "The Creative Ally",
      href: "",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Frontend Engineer",
      logoUrl: "/creative-ally.svg",
      start: "March 2021",
      end: "May 2022",
      description:
        "At TCA, i worked with other team members to build a platform that provide students with an opportunity to meet and network with potential employers, learn about job and internship opportunities",
    },
  ],

  projects: [
    {
      title: "FunZ",
      href: "https://www.funzweb.com/",
      active: true,
      description:
        "FunZ is an all-in-one financial solution that helps you manage payments, savings, investments etc.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.funzweb.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/funz.svg",
      video: "",
    },
    {
      title: "AI Library",
      href: "https://www.theailibrary.co/",
      active: true,
      description:
        "AI Library helps founders expand their product reach through their weekly gamified launchpad",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.theailibrary.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ailibrary.svg",
      video: "",
    },
    {
      title: "PortfolioTab",
      href: "https://www.portfoliotab.io/",
      active: true,
      description:
        "PortfolioTab is the #1 career portfolio platform for students, freelancers, and working professionals. ",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.portfoliotab.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfoliotab.svg",
      video: "",
    },
    {
      title: "Africa AI Fest",
      href: "https://www.africaaifest.com/",
      active: true,
      description: "Africa's Foremost Artificial Intelligence Event",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.africaaifest.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/aaf.svg",
      video: "",
    },
    {
      title: "APNI",
      href: "https://www.apni.ie/",
      active: true,
      description:
        "The African Professional Network of Ireland is a network of professionals from different industries and sectors working with top global and leading Irish companies ",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.apni.ie/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/apni.webp",
      video: "",
    },
    {
      title: "Career impact Now",
      href: "https://careerimpactnow.com/",
      active: true,
      description:
        "Career Impact Now is a platform that provide students with an opportunity to meet and network with potential employers, learn about job and internship opportunities",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://careerimpactnow.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cin.webp",
      video: "",
    },

    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
  ],
} as const;
