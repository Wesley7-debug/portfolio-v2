export interface Work {
  id: number;
  title: string;
  subtitle: string;
  type: string;
  button: string;
  image: string;
  href: string;
}

export const workData: Work[] = [
  {
    id: 1,
    title: "SNK",
    subtitle: "Printing and Manufacturing, Namibia",
    type: "Animated",
    button: "website",
    href: "/",
    image: "/images/snk.png",
  },
  {
    id: 2,
    title: "Brevo",
    subtitle: "Your go-to ice coffee drink",
    type: "Animated",
    button: "website",
    href: "/",

    image: "/images/brevo.png",
  },
  {
    id: 3,
    title: "Yarny",
    subtitle: "Your fulltime  chat application",
    type: "Full Stack",
    button: "website",
    href: "/",

    image: "/images/yarny.png",
  },
  {
    id: 4,
    title: "Star Seed",
    subtitle: "Discipline and Excellence",
    type: "Full Stack",
    button: "website",
    href: "/",

    image: "/images/star-seed.png",
  },
  {
    id: 5,
    title: "TrueID",
    subtitle: "NIN registration made easy",
    type: "Landing Page",
    button: "website",
    href: "/",

    image: "/images/true-id.png",
  },
  {
    id: 6,
    title: "Daily Orbit",
    subtitle: "Your go-to news platform",
    type: "Full Stack",
    button: "website",
    href: "/",

    image: "/images/daily-orbit.png",
  },
];
