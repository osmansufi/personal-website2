export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CDN = "https://duw6mv93b79ij.cloudfront.net/web";

export const photos: Photo[] = [
  { src: `${CDN}/DSC00172.jpg`, alt: "DSC00172", width: 1600, height: 1068 },
  { src: `${CDN}/DSC00661.jpg`, alt: "DSC00661", width: 1600, height: 2400 },
  { src: `${CDN}/DSC03889-3.jpg`, alt: "DSC03889-3", width: 1600, height: 2400 },
  { src: `${CDN}/DSC04065.jpg`, alt: "DSC04065", width: 1600, height: 2844 },
  { src: `${CDN}/DSC04189-v2.jpg`, alt: "DSC04189-v2", width: 1600, height: 2106 },
  { src: `${CDN}/DSC04307.jpg`, alt: "DSC04307", width: 1600, height: 1066 },
  { src: `${CDN}/DSC04343.jpg`, alt: "DSC04343", width: 1600, height: 3199 },
  { src: `${CDN}/DSC04625.jpg`, alt: "DSC04625", width: 1600, height: 1933 },
  { src: `${CDN}/DSC04887.jpg`, alt: "DSC04887", width: 1600, height: 2239 },
  { src: `${CDN}/DSC05480.jpg`, alt: "DSC05480", width: 1600, height: 1066 },
  { src: `${CDN}/DSC05718.jpg`, alt: "DSC05718", width: 1600, height: 1066 },
  { src: `${CDN}/DSC05840.jpg`, alt: "DSC05840", width: 1600, height: 1347 },
  { src: `${CDN}/DSC05913.jpg`, alt: "DSC05913", width: 1600, height: 1188 },
  { src: `${CDN}/DSC06495.jpg`, alt: "DSC06495", width: 1600, height: 1066 },
  { src: `${CDN}/DSC06591.jpg`, alt: "DSC06591", width: 1600, height: 2400 },
  { src: `${CDN}/DSC06617.jpg`, alt: "DSC06617", width: 1600, height: 1066 },
  { src: `${CDN}/DSCF0202-RAW-1x1.jpg`, alt: "DSCF0202-RAW-1x1", width: 1600, height: 1600 },
  { src: `${CDN}/DSCF0795.JPG`, alt: "DSCF0795", width: 1600, height: 1066 },
  { src: `${CDN}/R0000014.JPG`, alt: "R0000014", width: 1600, height: 2400 },
  { src: `${CDN}/R0000043.jpg`, alt: "R0000043", width: 1600, height: 2400 },
  { src: `${CDN}/R0000048.jpg`, alt: "R0000048", width: 1600, height: 2400 },
  { src: `${CDN}/R0000102.JPG`, alt: "R0000102", width: 1600, height: 1066 },
  { src: `${CDN}/R0000374.JPG`, alt: "R0000374", width: 1600, height: 1066 },
  { src: `${CDN}/R0000378.jpg`, alt: "R0000378", width: 1600, height: 1372 },
  { src: `${CDN}/R0000563.jpg`, alt: "R0000563", width: 1600, height: 1066 },
  { src: `${CDN}/R0000565.JPG`, alt: "R0000565", width: 1600, height: 1066 },
  { src: `${CDN}/R0000639.jpg`, alt: "R0000639", width: 1600, height: 1066 },
];
