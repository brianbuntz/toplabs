// types/images.ts
export interface ImageDimensions {
  width: number;
  height: number;
}

export interface WebpImages {
  "1000w": string;
  "800w": string;
  "400w": string;
}

export interface HeroImage {
  url: string;
  altText: string;
  webp?: WebpImages;
  sizes?: string;
}

export interface ProjectImage {
  url: string;
  caption: string;
  alt?: string;
}

export interface RelatedContent {
  headline: string;
  url: string;
  imageUrl: string;
  title?: string;
  type?: string;
}

// Helper function for consistent dimensions
export function getImageDimensions(type: string): ImageDimensions {
  const dimensions: Record<string, ImageDimensions> = {
    hero: { width: 1200, height: 800 },
    featured: { width: 800, height: 600 },
    related: { width: 400, height: 300 },
  };
  return dimensions[type] || dimensions.featured;
}
