// Central content for the landing page, based on the Flowerport Transport company profile.
// Items marked "placeholder" (contact details, transit times, dashboard readings) need confirming before launch.

export const company = {
  name: 'Flowerport Transport',
  shortName: 'Flowerport',
  legalName: 'Flowerport Transport',
  group: 'WoubGet Holdings',
  tagline: 'Temperature-controlled road transport for Ethiopia’s perishable exports.',
  email: 'info@flowerport.example', // placeholder
  phone: '+251 11 000 0000', // placeholder
  address: 'Addis Ababa, Ethiopia',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Cold Chain', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Fleet Monitoring', href: '#monitoring' },
  { label: 'Global Reach', href: '#network' },
  { label: 'About', href: '#about' },
];

export const heroStats = [
  { value: '60%', label: 'of Ethiopia’s flower exports moved farm to airport' },
  { value: '24/7', label: 'Automated fleet monitoring and control' },
  { value: '3-way', label: 'Door-to-door, airport-to-door and door-to-airport' },
];

// WoubGet Holdings family of companies, as listed in the group profile.
export const groupCompanies = [
  'Tradepath International',
  'Flowerport Transport',
  'Honest Logistics',
  'Crystal Automotive',
  'GCC',
  'Ecoguard Manufacturing',
  'Logix Express',
  'Dealmode',
  'DUN',
];

export const stats = [
  { value: 60, suffix: '%', label: 'Share of Ethiopia’s flower exports we carry from the farms to the airport' },
  { value: 24, suffix: '/7', label: 'Automated monitoring and control across our expanding fleet' },
  { value: 3, suffix: ' modes', label: 'Door-to-Door, Airport-to-Door and Door-to-Airport delivery' },
  { value: 8, suffix: '+', label: 'Flower and horticulture regions around Addis Ababa within reach' },
];

export type Service = { title: string; body: string; icon: 'thermo' | 'box' | 'truck' | 'globe'; points: string[] };

export const services: Service[] = [
  {
    title: 'Temperature-Controlled Trucking',
    body: 'Refrigerated trucks that hold perishables at the exact temperature they need, from the farm gate to the cargo terminal.',
    icon: 'thermo',
    points: ['Pre-cooled reefer units', 'Continuous temperature control', 'Flowers, meat, fruit and vegetables'],
  },
  {
    title: 'Temperature-Sensitive Handling',
    body: 'Trained crews load, seal and hand over temperature-sensitive cargo so quality is protected at every touchpoint.',
    icon: 'box',
    points: ['Careful loading and stacking', 'Sealed, documented handovers', 'Cold-chain integrity checks'],
  },
  {
    title: 'Door-to-Door & Airport Delivery',
    body: 'Door-to-Door, Airport-to-Door and Door-to-Airport services that connect your site with Addis Ababa Bole International.',
    icon: 'truck',
    points: ['Door-to-Airport for exporters', 'Airport-to-Door for importers', 'Scheduled and on-demand runs'],
  },
  {
    title: 'Distribution for Multinationals',
    body: 'A preferred distributor for large multinational companies, with inland transport that links to a global network.',
    icon: 'globe',
    points: ['Dedicated distribution runs', 'Integrated with global partners', 'Economic and cost-efficient'],
  },
];

export const process = [
  { step: '01', title: 'Booking & scheduling', temp: '—', time: 'Day 0', body: 'Your shipment is planned around harvest, packing and flight cut-off times.' },
  { step: '02', title: 'Pre-cooled pickup', temp: '2–4°C', time: 'Farm gate', body: 'A pre-cooled reefer arrives at your farm or facility, ready to load without breaking the cold chain.' },
  { step: '03', title: 'Load & seal', temp: '2–4°C', time: 'Loading', body: 'Cargo is loaded, counted and sealed by our crew, with documents prepared for handover.' },
  { step: '04', title: 'Monitored transit', temp: 'Live', time: 'On road', body: 'Location and temperature are tracked by our automated monitoring and control system.' },
  { step: '05', title: 'Airport handover', temp: '2–4°C', time: 'Bole ADD', body: 'Delivered to the cargo terminal at Addis Ababa Bole International, on time for your flight.' },
  { step: '06', title: 'Onward to the world', temp: 'Global', time: 'Export', body: 'Your cargo connects to the global network, with Airport-to-Door available for imports.' },
];

export type Hub = { code: string; city: string; country: string; lon: number; lat: number; transit: string; region: Region; label?: boolean };
export type Region = 'Europe' | 'Middle East' | 'Asia-Pacific' | 'Americas' | 'Africa';

export const origin = { code: 'ADD', city: 'Addis Ababa', lon: 38.8, lat: 8.98 };

// Typical direct or one-stop flight times from Addis Ababa (placeholder, for illustration)
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

// Ethiopia's main flower and horticulture clusters around Addis Ababa
export const farmRegions = ['Holeta', 'Sebeta', 'Bishoftu', 'Ziway', 'Sululta', 'Sendafa', 'Koka', 'Debre Zeit'];

export const advantages = [
  { title: 'Trusted by the flower industry', body: 'We move around 60% of Ethiopia’s flower exports from the farms to the airport, every day of the season.' },
  { title: 'A complete service package', body: 'Our inland transport links with a global network, so clients get one economic, cost-efficient solution.' },
  { title: 'Modern, monitored fleet', body: 'An automated monitoring and control system keeps our expanding fleet fast, safe and accountable.' },
  { title: 'Backed by a strong group', body: 'Part of WoubGet Holdings, alongside sister companies in freight forwarding, logistics and trade.' },
];

export const industries = [
  { title: 'Flower Farms', body: 'Roses and summer flowers moved from highland farms to the cargo terminal, cold and on time for every flight.', points: ['Daily farm-to-airport runs', 'Peak-season capacity', 'Flight cut-off planning'] },
  { title: 'Meat Exporters', body: 'Chilled and frozen meat kept at strict temperatures from the processing plant to export handover.', points: ['Chilled and frozen loads', 'Hygienic handling', 'Sealed transfers'] },
  { title: 'Fruit & Vegetable Growers', body: 'Fresh produce delivered quickly and gently, protecting shelf life and quality for export markets.', points: ['Fresh-produce reefers', 'Gentle handling', 'Fast turnaround'] },
  { title: 'Multinational Companies', body: 'A preferred distributor for large multinationals that need reliable, documented distribution across Ethiopia.', points: ['Dedicated runs', 'Door-to-Door delivery', 'Reporting on request'] },
];

// Hero background. Leave src empty to use the animated truck scene (src/components/TruckScene.astro),
// or point it at real fleet footage, e.g. '/flowerport/hero.mp4' placed in public/.
export const heroVideo = { src: '', poster: '' };
