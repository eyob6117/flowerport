// Central content for the landing page. All figures, names and quotes are
// placeholders to be replaced with Flower Port's verified data before launch.

export const company = {
  name: 'Flower Port',
  legalName: 'Flower Port Export PLC',
  tagline: 'Ethiopian-grown flowers, delivered to the world.',
  email: 'trade@flowerport.example',
  phone: '+251 11 000 0000',
  address: 'Bole Sub-City, Addis Ababa, Ethiopia',
  founded: 2011,
};

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Cold Chain', href: '#process' },
  { label: 'Global Network', href: '#network' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Partners', href: '#solutions' },
  { label: 'Insights', href: '#insights' },
];

export const heroStats = [
  { value: '220M+', label: 'Stems exported yearly' },
  { value: '42', label: 'Destination countries' },
  { value: '<48h', label: 'Farm to auction floor' },
];

export const certifications = [
  'MPS-ABC',
  'GLOBALG.A.P.',
  'Fairtrade',
  'EHPEA Code of Practice',
  'Rainforest Alliance',
  'ISO 9001:2015',
  'MPS-SQ',
  'GRASP',
];

export const stats = [
  { value: 380, suffix: ' ha', label: 'Greenhouse cultivation across six highland farms' },
  { value: 2600, suffix: ' m', label: 'Altitude of our highest farm, for larger heads and stronger stems' },
  { value: 98.6, suffix: '%', decimals: 1, label: 'On-time departure rate on scheduled freighter capacity' },
  { value: 7400, suffix: '+', label: 'People employed, 70% of them women' },
];

export type Product = {
  name: string;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
  palette: [string, string, string];
  varieties: number;
};

export const products: Product[] = [
  {
    name: 'Premium Roses',
    category: 'T-Hybrid',
    description: 'Large-headed, long-stemmed roses grown slowly at altitude for intense colour and exceptional vase life.',
    specs: [
      { label: 'Stem length', value: '50 – 90 cm' },
      { label: 'Head size', value: '5 – 7 cm' },
      { label: 'Vase life', value: '12 – 14 days' },
    ],
    palette: ['#a8203f', '#d8375c', '#f28ca0'],
    varieties: 64,
  },
  {
    name: 'Intermediate Roses',
    category: 'Retail & Bouquet',
    description: 'The workhorse of supermarket and bouquet programmes, consistent in grade and volume all year round.',
    specs: [
      { label: 'Stem length', value: '40 – 60 cm' },
      { label: 'Head size', value: '3.5 – 4.5 cm' },
      { label: 'Vase life', value: '10 – 12 days' },
    ],
    palette: ['#c2410c', '#f97316', '#fdba74'],
    varieties: 48,
  },
  {
    name: 'Spray Roses',
    category: 'Multi-Bloom',
    description: 'Three to eight blooms per stem, ideal for event design, wedding work and premium mixed bouquets.',
    specs: [
      { label: 'Stem length', value: '40 – 70 cm' },
      { label: 'Blooms/stem', value: '3 – 8' },
      { label: 'Vase life', value: '10 – 12 days' },
    ],
    palette: ['#be185d', '#ec4899', '#fbcfe8'],
    varieties: 22,
  },
  {
    name: 'Summer Flowers',
    category: 'Seasonal & Fillers',
    description: 'Hypericum, gypsophila, limonium, eryngium and more, harvested to programme and shipped alongside roses.',
    specs: [
      { label: 'Lines', value: '30+ species' },
      { label: 'Packing', value: 'Bunch or bucket' },
      { label: 'Supply', value: 'Year-round' },
    ],
    palette: ['#6d28d9', '#a78bfa', '#ede9fe'],
    varieties: 35,
  },
];

export const process = [
  { step: '01', title: 'Harvest at dawn', temp: '14°C', time: '05:30', body: 'Stems are cut at the optimal bud stage in the cool highland morning, when water content is highest.' },
  { step: '02', title: 'Hydrate & pre-cool', temp: '2°C', time: '+45 min', body: 'Flowers enter hydration solutions and forced-air pre-cooling within an hour of harvest.' },
  { step: '03', title: 'Grade & pack', temp: '2°C', time: '+6 h', body: 'Every stem is graded by length, head size and quality, then bunched and sleeved to customer spec.' },
  { step: '04', title: 'Reefer transfer', temp: '1–3°C', time: '+14 h', body: 'Temperature-logged reefer trucks move boxes to our perishables terminal at Bole International.' },
  { step: '05', title: 'Air freight', temp: '2–4°C', time: '+20 h', body: 'Scheduled freighter and belly capacity via one of Africa’s largest cargo hubs, direct to 40+ markets.' },
  { step: '06', title: 'Delivered', temp: '2°C', time: '<48 h', body: 'Customs-cleared and delivered to auction, importer or retail DC with a full digital cold-chain record.' },
];

export type Hub = { code: string; city: string; country: string; lon: number; lat: number; transit: string; region: Region; label?: boolean };
export type Region = 'Europe' | 'Middle East' | 'Asia-Pacific' | 'Americas' | 'Africa';

export const origin = { code: 'ADD', city: 'Addis Ababa', lon: 38.8, lat: 8.98 };

export const hubs: Hub[] = [
  { code: 'AMS', city: 'Amsterdam · Aalsmeer', country: 'Netherlands', lon: 4.76, lat: 52.31, transit: '8h 30m', region: 'Europe', label: true },
  { code: 'LGG', city: 'Liège', country: 'Belgium', lon: 5.45, lat: 50.64, transit: '8h 10m', region: 'Europe' },
  { code: 'LHR', city: 'London', country: 'United Kingdom', lon: -0.45, lat: 51.47, transit: '8h 45m', region: 'Europe' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany', lon: 8.57, lat: 50.03, transit: '7h 50m', region: 'Europe' },
  { code: 'SVO', city: 'Moscow', country: 'Russia', lon: 37.41, lat: 55.97, transit: '7h 20m', region: 'Europe', label: true },
  { code: 'DXB', city: 'Dubai', country: 'UAE', lon: 55.36, lat: 25.25, transit: '3h 40m', region: 'Middle East', label: true },
  { code: 'RUH', city: 'Riyadh', country: 'Saudi Arabia', lon: 46.7, lat: 24.96, transit: '3h 05m', region: 'Middle East' },
  { code: 'DOH', city: 'Doha', country: 'Qatar', lon: 51.61, lat: 25.27, transit: '3h 30m', region: 'Middle East' },
  { code: 'NRT', city: 'Tokyo', country: 'Japan', lon: 140.39, lat: 35.77, transit: '15h 20m', region: 'Asia-Pacific', label: true },
  { code: 'ICN', city: 'Seoul', country: 'South Korea', lon: 126.45, lat: 37.46, transit: '13h 10m', region: 'Asia-Pacific' },
  { code: 'PVG', city: 'Shanghai', country: 'China', lon: 121.8, lat: 31.14, transit: '12h 15m', region: 'Asia-Pacific', label: true },
  { code: 'SIN', city: 'Singapore', country: 'Singapore', lon: 103.99, lat: 1.36, transit: '9h 20m', region: 'Asia-Pacific', label: true },
  { code: 'SYD', city: 'Sydney', country: 'Australia', lon: 151.18, lat: -33.95, transit: '18h 40m', region: 'Asia-Pacific', label: true },
  { code: 'JFK', city: 'New York', country: 'United States', lon: -73.78, lat: 40.64, transit: '14h 30m', region: 'Americas', label: true },
  { code: 'MIA', city: 'Miami', country: 'United States', lon: -80.29, lat: 25.79, transit: '16h 10m', region: 'Americas', label: true },
  { code: 'YYZ', city: 'Toronto', country: 'Canada', lon: -79.63, lat: 43.68, transit: '15h 05m', region: 'Americas' },
  { code: 'JNB', city: 'Johannesburg', country: 'South Africa', lon: 28.24, lat: -26.13, transit: '4h 50m', region: 'Africa', label: true },
  { code: 'LOS', city: 'Lagos', country: 'Nigeria', lon: 3.32, lat: 6.58, transit: '5h 30m', region: 'Africa', label: true },
];

export const regions: Region[] = ['Europe', 'Middle East', 'Asia-Pacific', 'Americas', 'Africa'];

export const advantages = [
  { title: 'Equatorial light, highland cool', body: 'Twelve hours of daylight all year and cool nights at 2,000 m+ produce larger heads, stronger stems and deeper colour without artificial heating.' },
  { title: 'A world-class cargo gateway', body: 'Addis Ababa sits at the centre of one of the largest air-cargo networks in Africa, with dedicated perishables handling on the apron.' },
  { title: 'Positioned between markets', body: 'Under nine hours to Europe and under four to the Gulf, with daily onward connections to Asia and the Americas.' },
  { title: 'Duty-free market access', body: 'Preferential trade access to key markets keeps landed costs competitive for importers and retail programmes.' },
];

export const sustainability = [
  { value: 85, label: 'Irrigation water recycled', unit: '%' },
  { value: 92, label: 'Pest control via biological IPM', unit: '%' },
  { value: 60, label: 'Farm energy from renewables', unit: '%' },
];

export const solutions = [
  { title: 'Auctions & Importers', body: 'Clock-ready grading and consistent standing-order volumes for Royal FloraHolland and leading wholesale importers.', points: ['Daily standing orders', 'Auction-spec packing', 'Clock pre-sales'] },
  { title: 'Supermarket Retail', body: 'Programme growing, bouquet assembly and retailer-specific sleeves, barcodes and food-grade traceability.', points: ['52-week programmes', 'Bouquet-ready stems', 'Retail compliance'] },
  { title: 'Florists & Events', body: 'Premium head sizes, rare varieties and flexible box mixes for wholesalers serving designers and event planners.', points: ['Mixed boxes', 'Rare & garden varieties', 'Peak-season allocation'] },
  { title: 'E-commerce & D2C', body: 'Long vase life and transit-tested packaging for online florists and subscription brands shipping to consumers.', points: ['Transit-tested packs', 'Extended vase life', 'Drop-ship ready'] },
];

export const testimonials = [
  { quote: 'Flower Port has become our most consistent origin. Their grading is clock-perfect and their cold-chain data means we can prove quality to our own retail customers.', name: 'Head of Sourcing', company: 'European Importer, Netherlands' },
  { quote: 'For Valentine’s and Mother’s Day we need certainty above everything. They committed volume months ahead and delivered every box.', name: 'Category Manager, Floral', company: 'Supermarket Group, United Kingdom' },
  { quote: 'Vase life is the number that matters to our subscribers. Ethiopian highland roses from Flower Port consistently outperform.', name: 'Founder & CEO', company: 'Online Florist, Gulf Region' },
];

export const insights = [
  { tag: 'Market Report', date: 'Sep 2026', title: 'Valentine’s 2027 outlook: securing rose capacity early', read: '6 min read' },
  { tag: 'Cold Chain', date: 'Aug 2026', title: 'Why the first hour after harvest decides vase life', read: '4 min read' },
  { tag: 'Sustainability', date: 'Jul 2026', title: 'Closing the water loop on our Holeta farm', read: '5 min read' },
];

export const farms = ['Holeta', 'Sebeta', 'Bishoftu', 'Batu (Ziway)', 'Sululta', 'Debre Birhan'];

// Hero background. Leave src empty to use the animated truck scene (src/components/TruckScene.astro),
// or point it at real drone/fleet footage, e.g. '/flowerport/hero.mp4' placed in public/.
export const heroVideo = { src: '', poster: '' };
