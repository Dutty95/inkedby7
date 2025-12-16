import type { GalleryItem, PolicyItem, SocialLink } from './types';

export const HERO_IMAGE = "ink1.png"; // Fallback/First image

// New array for Hero Background Slideshow
export const HERO_IMAGES = [
  "ink1.png",
  "ink2.png",
  "ink3.png",
  "ink4.png"
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, url: "ink5.png", title: "7", category: "Inkedby" },
  { id: 2, url: "ink6.png", title: "7", category: "Inkedby" },
  { id: 3, url: "ink7.png", title: "7", category: "Inkedby" },
  { id: 4, url: "ink8.png", title: "7", category: "Inkedby" },
  { id: 5, url: "ink9.png", title: "7", category: "Inkedby" },
  { id: 6, url: "ink10.png", title: "7", category: "Inkedby" },
];

// Extracted from Image 2
export const POLICIES: PolicyItem[] = [
  { id: 1, text: "Please kindly note that all tattoos are permanently made and not semi-permanent." },
  { id: 2, text: "A non-refundable 50% deposit is required to book an appointment." },
  { id: 3, text: "You are to send the design of your choice, which includes: a description of how you want it to be, the part of the body you want it, and size (small, medium, or big)." },
  { id: 4, text: "If you have no design kindly signify so that options can be provided for you." },
  { id: 5, text: "You are required to send detailed Address (If you want home service)." },
  { id: 6, text: "Terms and conditions apply for home service deals." },
  { id: 7, text: "We are available to travel (T&C applies)." },
];

export const SOCIALS: SocialLink[] = [
  { platform: "Instagram", handle: "INKED_BY_7", url: "https://www.instagram.com/inked_by_7", icon: "instagram" },
  { platform: "Snapchat", handle: "INKEDBY.7", url: "www.snapchat.com/inkby.7", icon: "camera" },
  { platform: "TikTok", handle: "INKEDBY.7", url: "www.tiktok.com/inkedby.7", icon: "video" },
];

export const CONTACT_INFO = {
  phone: "+234 708 949 3072",
  email: "omoodarab@gmail.com",
};

// Extracted from Image 4
export const ABOUT_TEXT = [
  "As a professional tattoo artist, we offer more than just a service - we provide an immersive experience that combines artistry, technical skill, and emotional connection.",
  "When you sit in our chair, you're not just getting a tattoo - you're entrusting us with a part of your story. Your tattoo is a reflection of your personality, experiences, and values, and we're honored to be a part of that journey.",
  "Our expertise extends beyond the technical aspects of tattooing. We take the time to understand your vision, listen to your ideas, and guide you through the design process to ensure that your tattoo is a true representation of your unique spirit."
];

// New array for About Section Slideshow
export const ABOUT_SLIDESHOW = [
  "ink11.png",
  "ink12.png",
  "ink13.png",
  "ink14.png"
];