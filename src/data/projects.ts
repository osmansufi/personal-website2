export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "This site! A statically exported Next.js site with a photo gallery, deployed on AWS Amplify.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
    repo: "https://github.com/osmansufi/personal-website2",
  },
  {
    title: "Example Project",
    description:
      "A placeholder project. Replace this with your real projects.",
    tags: ["React", "Node.js"],
    href: "https://example.com",
    repo: "https://github.com/osmansufi/example",
  },
];
