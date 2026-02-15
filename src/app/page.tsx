import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center">
      {/* Hero background image */}
      <Image
        src="https://duw6mv93b79ij.cloudfront.net/R0000563.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Hi, I&apos;m Osman Sufi
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-200">
          Software engineer and hobbyist photographer. I build things for the
          web and capture moments through my lens.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center rounded-md bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            View Projects
          </Link>
          <Link
            href="/gallery"
            className="inline-flex h-10 items-center rounded-md border border-white/40 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Photo Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
