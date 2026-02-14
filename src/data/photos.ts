export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Replace these with your actual CloudFront URLs and dimensions.
// Example: src: "https://d1234abcdef.cloudfront.net/photo-01.jpg"
export const photos: Photo[] = [
  {
    src: "https://picsum.photos/seed/photo1/800/1200",
    alt: "Sample photo 1",
    width: 800,
    height: 1200,
  },
  {
    src: "https://picsum.photos/seed/photo2/1200/800",
    alt: "Sample photo 2",
    width: 1200,
    height: 800,
  },
  {
    src: "https://picsum.photos/seed/photo3/800/1000",
    alt: "Sample photo 3",
    width: 800,
    height: 1000,
  },
  {
    src: "https://picsum.photos/seed/photo4/1200/900",
    alt: "Sample photo 4",
    width: 1200,
    height: 900,
  },
  {
    src: "https://picsum.photos/seed/photo5/900/1200",
    alt: "Sample photo 5",
    width: 900,
    height: 1200,
  },
  {
    src: "https://picsum.photos/seed/photo6/1000/800",
    alt: "Sample photo 6",
    width: 1000,
    height: 800,
  },
];
