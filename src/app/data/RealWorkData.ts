// type Work = {
//   tittle: string;
//   number: string;
//   image: string[];
// };

// export const RealWorkData: Work[] = [
//   {
//     tittle: "All",
//     number: "23",
//     image: ["/images/zentry.png", "/images/yarny.png", "/images/snk.png"],
//   },
//   {
//     tittle: "FullStack",
//     number: "03",
//     image: [
//       "/images/star-seed.png",
//       "/images/yarny.png",
//       "/images/daily-orbit.png",
//     ],
//   },
//   {
//     tittle: "Animated",
//     number: "08",
//     image: ["/images/zentry.png", "/images/gsm.png", "/images/snk.png"],
//   },
//   {
//     tittle: "Landing",
//     number: "03",
//     image: [
//       "/images/nuveadvert.png",
//       "/images/nudelab.png",
//       "/images/true-id.png",
//     ],
//   },
//   {
//     tittle: "Advertorials",
//     number: "01",
//     image: [
//       "/images/nuveadvert.png",
//       "/images/nudelab.png",
//       "/images/true-id.png",
//     ],
//   },
//   {
//     tittle: "Ui Library",
//     number: "07",
//     image: ["/images/zentry.png", "/images/yarny.png", "/images/snk.png"],
//   },
// ];
type Item = {
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

type Work = {
  title: string;
  number: string;
  image: string[];
  items?: Item[];
};

export const RealWorkData: Work[] = [
  {
    title: "FullStack",
    number: "03",
    image: [
      "/images/star-seed.png",
      "/images/yarny.png",
      "/images/daily-orbit.png",
    ],
    items: [
      {
        title: "Yarny",
        subtitle: "A chat application built for seamless conversations",
        image: "/images/yarny.png",
        link: "/case-study/yarny",
      },
      {
        title: "Starseed",
        subtitle: "A modern school portal website for education management",
        image: "/images/star-seed.png",
        link: "/case-study/starseed",
      },
      {
        title: "Daily Orbit",
        subtitle: "A dynamic news portal app for timely global updates",
        image: "/images/daily-orbit.png",
        link: "/case-study/daily-orbit",
      },
    ],
  },

  {
    title: "Animated",
    number: "08",
    image: ["/images/zentry.png", "/images/gsm.png", "/images/snk.png"],
    items: [
      {
        title: "Snk",
        subtitle: "A manufacturing brand based in Windhoek",
        image: "/images/snk.png",
        link: "/case-study/snk",
      },
      {
        title: "Brevo",
        subtitle: "Your go-to iced coffee drink brand",
        image: "/images/brevo.png",
        link: "/case-study/brevo",
      },
      {
        title: "Snubbz",
        subtitle: "Ideal crocs for everyone — stylish and comfy",
        image: "/images/snubbz.jpg",
        link: "/case-study/snubbz",
      },
      {
        title: "Zentry",
        subtitle: "An animated gaming platform experience",
        image: "/images/zentry.png",
        link: "/case-study/zentry",
      },
      {
        title: "iPhone 15",
        subtitle: "Recreation of the official Apple iPhone 15 website",
        image: "/images/iphone.jpeg",
        link: "/case-study/iphone15",
      },
      {
        title: "Studio Ghibli",
        subtitle: "A fan-made website for Studio Ghibli animations",
        image: "/images/studio-ghbili.png",
        link: "/case-study/studio-ghibli",
      },
      {
        title: "Sipra",
        subtitle: "A vibrant landing for your favorite fruit juice",
        image: "/images/sipra.png",
        link: "/case-study/sipra",
      },
      {
        title: "GSM",
        subtitle: "A fan-made Greatest Showman tribute website",
        image: "/images/gsm.png",
        link: "/case-study/gsm",
      },
      {
        title: "Spylt",
        subtitle: "A recreated web experience inspired by the Spylt brand",
        image: "/images/spylt.jpg",
        link: "/case-study/spylt",
      },
    ],
  },

  {
    title: "Landing",
    number: "03",
    image: [
      "/images/nuveadvert.png",
      "/images/nudelab.png",
      "/images/true-id.png",
    ],
    items: [
      {
        title: "Nudelab.ai",
        subtitle: "AI-generated content landing experience",
        image: "/images/nudelab.png",
        link: "/case-study/nudelab",
      },
      {
        title: "Trueid",
        subtitle: "NIN made easy — digital identity platform",
        image: "/images/true-id.png",
        link: "/case-study/trueid",
      },
      {
        title: "NuveAdvert",
        subtitle: "Advertorial design for Nuve — sleek and effective",
        image: "/images/nuveadvert.png",
        link: "/case-study/nuveadvert",
      },
    ],
  },

  {
    title: "Ui Library",
    number: "07",
    image: ["/images/zentry.png", "/images/yarny.png", "/images/snk.png"],
    items: [
      {
        title: "Trello | Hero UI",
        subtitle: "Component system inspired by Trello’s interface",
        image: "/images/trello.png",
        link: "/case-study/trello",
      },
      {
        title: "AI | Hero UI",
        subtitle: "AI-themed hero section UI component",
        image: "/images/ai.png",
        link: "/case-study/ai",
      },
      {
        title: "Upwork Mastery | Hero UI",
        subtitle: "UI concept built around Upwork-style dashboards",
        image: "/images/upworkmastery.png",
        link: "/case-study/upworkmastery",
      },
      {
        title: "Energence UI | Hero UI",
        subtitle: "Energy-inspired hero UI component pack",
        image: "/images/energenceui.png",
        link: "/case-study/energenceui",
      },
      {
        title: "Purshe Hero | Hero UI",
        subtitle: "Modern purchase-oriented hero design system",
        image: "/images/purshehero.png",
        link: "/case-study/purshehero",
      },
      {
        title: "TSSA | Hero UI",
        subtitle: "Hero UI built for TSSA brand layouts",
        image: "/images/tssa.png",
        link: "/case-study/tssa",
      },
      {
        title: "Vanessa UI | Hero UI",
        subtitle: "Elegant and versatile hero UI library",
        image: "/images/vanessaui.png",
        link: "/case-study/vanessaui",
      },
    ],
  },
];
