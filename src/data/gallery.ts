import type { ImageMetadata } from 'astro';
import heroTemple from '@/assets/illustrations/hero-temple.png';
import deitySanctum from '@/assets/illustrations/deity-sanctum.png';
import gopuramExterior from '@/assets/illustrations/gopuram-exterior.png';
import alankaramFlowers from '@/assets/illustrations/alankaram-flowers.png';
import festivalLamps from '@/assets/illustrations/festival-lamps.png';
import poojaSamagri from '@/assets/illustrations/pooja-samagri.png';

export type GalleryCategory =
  | 'Exterior & Architecture'
  | 'Main Deity'
  | 'Alankaram & Flowers'
  | 'Festivals & Celebrations'
  | 'Temple Activities';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  caption: string;
  alt: string;
  image: ImageMetadata;
  /** Set to false when replaced with an authentic photograph of Sri Venkateswara Swamy Temple, Peelamedu. */
  isIllustrative: boolean;
  illustrativeLabel: string;
}

export const GALLERY_CATEGORIES: Array<'All' | GalleryCategory> = [
  'All',
  'Exterior & Architecture',
  'Main Deity',
  'Alankaram & Flowers',
  'Festivals & Celebrations',
  'Temple Activities'
];

export const ILLUSTRATION_ASSETS = {
  'hero-temple': heroTemple,
  'deity-sanctum': deitySanctum,
  'gopuram-exterior': gopuramExterior,
  'alankaram-flowers': alankaramFlowers,
  'festival-lamps': festivalLamps,
  'pooja-samagri': poojaSamagri
} as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'sanctum-deity-artwork',
    title: 'Lord Venkateswara Swamy — Devotional Sanctum Artwork',
    category: 'Main Deity',
    caption: 'Illustrative classical South Indian devotional artwork awaiting an official photograph of the presiding deity.',
    alt: 'Illustrative classical devotional painting of Lord Venkateswara Swamy adorned with gold ornaments and tulasi garlands',
    image: deitySanctum,
    isIllustrative: true,
    illustrativeLabel: 'Illustrative Artwork — Awaiting Official Photo'
  },
  {
    id: 'mandapam-dawn-artwork',
    title: 'Sanctuary Entrance & Brass Vilakku Lamps',
    category: 'Exterior & Architecture',
    caption: 'Illustrative architectural visual depicting a South Indian Vaishnava temple entrance at dawn.',
    alt: 'Illustrative painting of a South Indian temple mandapam entrance with brass oil lamps and mango leaf garlands',
    image: heroTemple,
    isIllustrative: true,
    illustrativeLabel: 'Illustrative Artwork — Awaiting Official Photo'
  },
  {
    id: 'gopuram-dusk-artwork',
    title: 'Rajagopuram & Prakaram Corridor',
    category: 'Exterior & Architecture',
    caption: 'Illustrative visual of Dravidian temple architecture at dusk; to be replaced with verified temple exterior photography.',
    alt: 'Illustrative painting of a traditional South Indian temple gopuram and lit stone courtyard at dusk',
    image: gopuramExterior,
    isIllustrative: true,
    illustrativeLabel: 'Illustrative Artwork — Awaiting Official Photo'
  },
  {
    id: 'floral-alankaram-artwork',
    title: 'Traditional Floral Alankaram & Kalasam',
    category: 'Alankaram & Flowers',
    caption: 'Illustrative artwork of jasmine, lotus, tulasi, and marigold temple garlands.',
    alt: 'Illustrative devotional art of traditional jasmine, lotus, and marigold flower garlands around a brass kalasam',
    image: alankaramFlowers,
    isIllustrative: true,
    illustrativeLabel: 'Illustrative Artwork — Awaiting Official Photo'
  },
  {
    id: 'festival-deepam-artwork',
    title: 'Evening Deepam Utsavam',
    category: 'Festivals & Celebrations',
    caption: 'Illustrative visual of festive brass oil lamps and traditional kolam threshold decorations.',
    alt: 'Illustrative painting of rows of glowing brass oil lamps along carved temple steps during an evening celebration',
    image: festivalLamps,
    isIllustrative: true,
    illustrativeLabel: 'Illustrative Artwork — Awaiting Official Photo'
  },
  {
    id: 'pooja-samagri-artwork',
    title: 'Traditional Pooja Offerings',
    category: 'Temple Activities',
    caption: 'Illustrative artwork of traditional South Indian temple archana offerings on an antique brass plate.',
    alt: 'Illustrative devotional still life of coconut, betel leaves, kumkum, turmeric, tulasi, and brass lamp on teakwood',
    image: poojaSamagri,
    isIllustrative: true,
    illustrativeLabel: 'Illustrative Artwork — Awaiting Official Photo'
  }
];
