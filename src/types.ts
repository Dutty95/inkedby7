export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface PolicyItem {
  id: number;
  text: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}