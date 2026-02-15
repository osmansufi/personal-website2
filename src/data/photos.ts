export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CDN = "https://duw6mv93b79ij.cloudfront.net";

export const photos: Photo[] = [
  { src: `${CDN}/DSC00172.jpg`, alt: "DSC00172", width: 4240, height: 2832 },
  { src: `${CDN}/DSC00661.jpg`, alt: "DSC00661", width: 3648, height: 5472 },
  { src: `${CDN}/DSC03889-3.jpg`, alt: "DSC03889-3", width: 4000, height: 6000 },
  { src: `${CDN}/DSC04065.jpg`, alt: "DSC04065", width: 3375, height: 6000 },
  { src: `${CDN}/DSC04189-v2.jpg`, alt: "DSC04189-v2", width: 3802, height: 5004 },
  { src: `${CDN}/DSC04307.jpg`, alt: "DSC04307", width: 6000, height: 4000 },
  { src: `${CDN}/DSC04343.jpg`, alt: "DSC04343", width: 2644, height: 5287 },
  { src: `${CDN}/DSC04625.jpg`, alt: "DSC04625", width: 3036, height: 3669 },
  { src: `${CDN}/DSC04887.jpg`, alt: "DSC04887", width: 4000, height: 5599 },
  { src: `${CDN}/DSC05480.jpg`, alt: "DSC05480", width: 6000, height: 4000 },
  { src: `${CDN}/DSC05718.jpg`, alt: "DSC05718", width: 4500, height: 3000 },
  { src: `${CDN}/DSC05840.jpg`, alt: "DSC05840", width: 4749, height: 4000 },
  { src: `${CDN}/DSC05913.jpg`, alt: "DSC05913", width: 5384, height: 4000 },
  { src: `${CDN}/DSC06495.jpg`, alt: "DSC06495", width: 6000, height: 4000 },
  { src: `${CDN}/DSC06591.jpg`, alt: "DSC06591", width: 4000, height: 6000 },
  { src: `${CDN}/DSC06617.jpg`, alt: "DSC06617", width: 6000, height: 4000 },
  { src: `${CDN}/DSCF0202-RAW-1x1.jpg`, alt: "DSCF0202-RAW-1x1", width: 5152, height: 5152 },
  { src: `${CDN}/DSCF0795.JPG`, alt: "DSCF0795", width: 7728, height: 5152 },
  { src: `${CDN}/R0000014.JPG`, alt: "R0000014", width: 4000, height: 6000 },
  { src: `${CDN}/R0000043.jpg`, alt: "R0000043", width: 4000, height: 6000 },
  { src: `${CDN}/R0000048.jpg`, alt: "R0000048", width: 4000, height: 6000 },
  { src: `${CDN}/R0000102.JPG`, alt: "R0000102", width: 6000, height: 4000 },
  { src: `${CDN}/R0000374.JPG`, alt: "R0000374", width: 6000, height: 4000 },
  { src: `${CDN}/R0000378.jpg`, alt: "R0000378", width: 2612, height: 2240 },
  { src: `${CDN}/R0000563.jpg`, alt: "R0000563", width: 3360, height: 2240 },
  { src: `${CDN}/R0000565.JPG`, alt: "R0000565", width: 6000, height: 4000 },
  { src: `${CDN}/R0000639.jpg`, alt: "R0000639", width: 6000, height: 4000 },
];
