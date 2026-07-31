export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  url: string;
}

export const experienceItems: ExperienceItem[] = [
    {
    title: "Full Stack Developer",
    company: "Blister Technologies",
    period: "2024 - 2026",
    location: "Neuquén",
    description:
      "Responsible for developing and maintaining features within a laboratory management platform for oil operations. I implemented modules that automated operational tasks, centralized technical information, and improved the traceability of data generated during laboratory processes.",
    url: "https://www.blistertechnologies.com/",
  },
  {
    title: "Frontend Developer",
    company: "Self-employed",
    period: "2021 - 2024",
    location: "Remote",
    description:
      "I specialize in creating engaging, responsive, and optimized visual experiences, transforming designs and ideas into functional products that deliver a seamless and intuitive user experience.",
    url: "https://github.com/rociocarvajal",
  },
  {
    title: "Cashier",
    company: "Cooperativa Obrera SRL",
    period: "2020 - 2021",
    location: "Gral. Fernández Oro",
    description:
      "Developed experience in customer service and payment operations, strengthening communication, organization, attention to detail, and responsibility.",
    url: "https://www.cooperativaobrera.coop/",

  },
];
