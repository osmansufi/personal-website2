"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import type { Photo } from "@/data/photos";

interface LightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const photo = photos[index];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev button */}
      {index > 0 && (
        <button
          className="absolute left-4 text-white/70 transition-colors hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous photo"
        >
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-[90vh] w-auto object-contain"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      {/* Next button */}
      {index < photos.length - 1 && (
        <button
          className="absolute right-4 text-white/70 transition-colors hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
        >
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 text-sm text-white/70">
        {index + 1} / {photos.length}
      </div>
    </div>
  );
}
