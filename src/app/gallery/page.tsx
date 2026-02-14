"use client";

import Image from "next/image";
import { useState } from "react";
import { photos } from "@/data/photos";
import Lightbox from "@/components/Lightbox";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Gallery
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        A collection of photos from my adventures.
      </p>

      {/* Masonry grid via CSS columns */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            className="mb-4 block w-full overflow-hidden rounded-lg"
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) => Math.max(0, (prev ?? 0) - 1))
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              Math.min(photos.length - 1, (prev ?? 0) + 1)
            )
          }
        />
      )}
    </div>
  );
}
