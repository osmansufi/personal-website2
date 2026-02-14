import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Osman Sufi",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>

      <div className="mt-8 space-y-6 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <p>
          I&apos;m a software engineer with a passion for building clean,
          performant web applications. When I&apos;m not writing code, you can
          find me exploring the outdoors with my camera.
        </p>
        <p>
          I enjoy working across the full stack, from crafting responsive UIs to
          designing robust backend systems. I care deeply about user experience,
          code quality, and shipping things that matter.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Skills &amp; Technologies</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "AWS",
            "PostgreSQL",
            "Tailwind CSS",
            "Docker",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
