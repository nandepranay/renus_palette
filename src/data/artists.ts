import type { Artist } from '../types';
import { getArtworkUrl } from '../config/artistConfig';

export const artists: Artist[] = [
  {
    id: 'renuka',
    name: 'Renuka',
    title: 'Visual Artist & Studio Founder',
    location: 'India',
    bio: 'Welcome to my colorful world! I am Renuka, a painter specializing in vibrant acrylics and dreamy watercolor art focused on beautiful nature landscapes and spiritual compositions.',
    statement: '“Artwork should connect personally with people, adding warmth and meaning to spaces. My process brings together thought and color, chaos and calm, and the artwork and its viewer.”',
    profileImage: getArtworkUrl('artworks/lotus-pond.jpg'),
    coverImage: getArtworkUrl('artworks/lotus-pond.jpg'),
    mediums: ['Original Acrylics on Canvas', 'Dreamy Watercolors', 'Custom Art Commissions'],
    artworksCount: 8,
    featured: true
  }
];
