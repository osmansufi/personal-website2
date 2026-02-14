import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Osman Sufi
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Software engineer and hobbyist photographer. I build things for the
          web and capture moments through my lens.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center rounded-md bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            View Projects
          </Link>
          <Link
            href="/gallery"
            className="inline-flex h-10 items-center rounded-md border border-zinc-300 px-6 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Photo Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
