
import { Property, PropertySeries, FeatureComparison } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 's1',
    title: 'Tipe Linear 36',
    series: PropertySeries.SUBSIDI,
    price: 'Rp 156.000.000',
    sqft: '36/64',
    bedrooms: 2,
    bathrooms: 1,
    description: 'Efisiensi minimalis berpadu dengan estetika modern di lokasi strategis Bukit Panaikang.',
    imageUrl: '/images/subsidi1.jpg',
    features: ['Siap Panel Surya', 'Konsep Terbuka', 'Kunci Pintar'],
    isSoldOut: true
  },
  {
    id: 's2',
    title: 'Norden Klasik',
    series: PropertySeries.SUBSIDI,
    price: 'Rp 156.000.000',
    sqft: '36/64',
    bedrooms: 2,
    bathrooms: 1,
    description: 'Garis desain bersih dan ruang fungsional yang dirancang untuk profesional muda.',
    imageUrl: '/images/subsidi2.jpg',
    features: ['Double Glazing', 'Eco-Heat', 'Penyimpanan Terintegrated'],
    isSoldOut: true
  },
  {
    id: 'k1',
    title: 'Obsidian Premium',
    series: PropertySeries.KOMERSIL,
    price: 'Rp 370.000.000',
    sqft: '51/84',
    bedrooms: 2,
    bathrooms: 1,
    description: 'Kemegahan tak tertandingi dengan langit-langit tinggi dan Desain Modern.',
    imageUrl: '/images/komersil1.jpg',
    features: ['Smart Loock Door', 'Taman Pribadi & Dapur', 'Dapur Chef'],
    isSoldOut: false
  },
  {
    id: 'k2',
    title: 'Vila Aurora 150',
    series: PropertySeries.KOMERSIL,
    price: 'Rp 370.000.000',
    sqft: '51/84',
    bedrooms: 2,
    bathrooms: 1,
    description: 'Pemandangan panorama berpadu dengan arsitektur kelas atas di hunian unggulan kami.',
    imageUrl: '/images/komersil2.jpg',
    features: ['Smart Lock Door', 'Taman Pribadi & Dapur', 'Garasi Mobil'],
    isSoldOut: false
  }
];

export const COMPARISONS: FeatureComparison[] = [
  { feature: 'Finishing Utama', subsidi: 'Smooth Matte Plaster', komersil: 'Travertine Italia & Marmer' },
  { feature: 'Tinggi Plafon', subsidi: '2.8m Standar', komersil: '4.2m Double-Volume' },
  { feature: 'Integrasi Pintar', subsidi: 'Keamanan & Cahaya', komersil: 'Otomasi Rumah Penuh' },
  { feature: 'Lansekap', subsidi: 'Taman Minimalis', komersil: 'Taman Zen & Fitur Air' },
  { feature: 'Perangkat Dapur', subsidi: 'Bosch Essentials', komersil: 'Gaggenau Signature' }
];

export const GALLERY_IMAGES = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg'
];
