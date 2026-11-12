// Curated real estate listings for WhileStone Estate
// Used as reliable fallback when third-party APIs (RapidAPI) are unreachable, deprecated, or rate-limited.

const agencyLogo =
  "https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008";

export const mockProperties = [
  // --- PROPERTIES FOR RENT ---
  {
    id: 5001,
    externalID: "5001",
    title: "WhileStone Waterfront Residence - Luxury 2BR Marina View",
    price: 165000,
    rentFrequency: "yearly",
    rooms: 2,
    baths: 2,
    area: 1450,
    isVerified: true,
    type: "Apartment",
    purpose: "for-rent",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" },
      { id: 3, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Central AC" },
          { text: "Covered Parking" },
          { text: "Shared Gym" },
          { text: "Shared Pool" },
          { text: "Balcony with Marina View" },
          { text: "24/7 Security" },
        ],
      },
    ],
    description:
      "Experience high-end waterfront living with WhileStone Estate. This spacious 2-bedroom residence offers floor-to-ceiling panoramic marina views, premium marble finishing, fully fitted Italian kitchen, and world-class building amenities including infinity pool and concierge service.",
  },
  {
    id: 5002,
    externalID: "5002",
    title: "WhileStone Palms Villa - 4BR Beachfront Garden Estate",
    price: 420000,
    rentFrequency: "yearly",
    rooms: 4,
    baths: 5,
    area: 5200,
    isVerified: true,
    type: "Villa",
    purpose: "for-rent",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
      { id: 3, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Private Beach Access" },
          { text: "Private Infinity Pool" },
          { text: "Landscaped Garden" },
          { text: "Maid's Room" },
          { text: "Private Garage" },
          { text: "Smart Home System" },
        ],
      },
    ],
    description:
      "A flagship luxury coastal rental presented exclusively by WhileStone Estate. This 4-bedroom signature villa provides direct private beach access, custom infinity swimming pool, sunset viewing terrace, and an expansive manicured lawn.",
  },
  {
    id: 5003,
    externalID: "5003",
    title: "WhileStone Sky Suite - 1BR Modern Downtown Apartment",
    price: 95000,
    rentFrequency: "yearly",
    rooms: 1,
    baths: 2,
    area: 980,
    isVerified: true,
    type: "Apartment",
    purpose: "for-rent",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Downtown Skyline View" },
          { text: "Modern Furnishing" },
          { text: "Concierge Service" },
          { text: "High-Speed Elevators" },
          { text: "Built-in Wardrobes" },
        ],
      },
    ],
    description:
      "Located in the pulse of the financial district, this pristine 1-bedroom suite offers luxury urban convenience, walkability to premier restaurants, retail boutiques, and rapid metro access.",
  },
  {
    id: 5004,
    externalID: "5004",
    title: "WhileStone Horizon Heights - 3BR Duplex with Private Pool",
    price: 280000,
    rentFrequency: "yearly",
    rooms: 3,
    baths: 4,
    area: 3100,
    isVerified: true,
    type: "Townhouse",
    purpose: "for-rent",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Private Plunge Pool" },
          { text: "Duplex Layout" },
          { text: "Chef's Kitchen" },
          { text: "Covered Parking" },
          { text: "Pet Friendly" },
        ],
      },
    ],
    description:
      "Impeccably designed 3-bedroom duplex townhouse featuring soaring double-height ceilings, private terrace plunge pool, state-of-the-art acoustic insulation, and private secure entrance.",
  },
  {
    id: 5005,
    externalID: "5005",
    title: "WhileStone Urban Lofts - 2BR Contemporary Living",
    price: 140000,
    rentFrequency: "yearly",
    rooms: 2,
    baths: 2,
    area: 1350,
    isVerified: true,
    type: "Apartment",
    purpose: "for-rent",
    furnishingStatus: "Unfurnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Balcony" },
          { text: "Open Plan Kitchen" },
          { text: "Gymnasium" },
          { text: "Children's Play Area" },
        ],
      },
    ],
    description:
      "Sleek and minimalist, this 2-bedroom apartment at WhileStone Urban Lofts is crafted for modern professionals. Features open-concept kitchen, hardwood styling, and large picture windows.",
  },
  {
    id: 5006,
    externalID: "5006",
    title: "WhileStone Crest Garden Residence - 3BR Family Oasis",
    price: 210000,
    rentFrequency: "yearly",
    rooms: 3,
    baths: 3,
    area: 2600,
    isVerified: true,
    type: "Villa",
    purpose: "for-rent",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Lush Private Lawn" },
          { text: "Covered Carport" },
          { text: "Barbecue Area" },
          { text: "Central Heating & AC" },
        ],
      },
    ],
    description:
      "A peaceful family sanctuary featuring tranquil garden walkways, spacious bedrooms with en-suite baths, and convenient proximity to top international schools and retail parks.",
  },

  // --- PROPERTIES FOR SALE ---
  {
    id: 6001,
    externalID: "6001",
    title: "WhileStone Royal Penthouse - 5BR Panoramic Skyline Terrace",
    price: 8500000,
    rentFrequency: null,
    rooms: 5,
    baths: 6,
    area: 6800,
    isVerified: true,
    type: "Penthouse",
    purpose: "for-sale",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
      { id: 3, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Private Rooftop Pool" },
          { text: "Direct Private Elevator" },
          { text: "Wine Cellar" },
          { text: "360-Degree Panoramic View" },
          { text: "Smart Home Automation" },
          { text: "4 Dedicated Underground Parking" },
        ],
      },
    ],
    description:
      "An architectural masterpiece crowning the city skyline. WhileStone Estate proudly presents this trophy 5-bedroom penthouse featuring a private rooftop oasis, designer Italian finishes, private elevator foyer, and unrivaled entertaining spaces.",
  },
  {
    id: 6002,
    externalID: "6002",
    title: "WhileStone Emerald Villa - 6BR Luxury Estate with Infinity Pool",
    price: 12800000,
    rentFrequency: null,
    rooms: 6,
    baths: 7,
    area: 8500,
    isVerified: true,
    type: "Villa",
    purpose: "for-sale",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
      { id: 3, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Olympic Infinity Pool" },
          { text: "Private Cinema Room" },
          { text: "Landscaped Tropical Grounds" },
          { text: "Staff Quarters" },
          { text: "Commercial Grade Kitchen" },
          { text: "Spa & Sauna Suite" },
        ],
      },
    ],
    description:
      "The pinnacle of bespoke luxury. This sprawling 6-bedroom estate sits on extensive grounds, showcasing an Olympic-length infinity swimming pool, home theater, private spa, and soaring bespoke architecture.",
  },
  {
    id: 6003,
    externalID: "6003",
    title: "WhileStone Sapphire Tower - 3BR High-Floor Premium Condo",
    price: 3400000,
    rentFrequency: null,
    rooms: 3,
    baths: 3,
    area: 2400,
    isVerified: true,
    type: "Apartment",
    purpose: "for-sale",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Panoramic Sea View" },
          { text: "Valet Parking" },
          { text: "Infinity Edge Pool" },
          { text: "Private Gymnasium" },
          { text: "High ROI Potential" },
        ],
      },
    ],
    description:
      "Perched on an ultra-high floor, this 3-bedroom residence delivers sweeping horizons and tranquil sea vistas. Excellent investment property with proven rental yields and capital appreciation.",
  },
  {
    id: 6004,
    externalID: "6004",
    title: "WhileStone Grand Meadow Estate - 4BR Architect Designed",
    price: 5900000,
    rentFrequency: null,
    rooms: 4,
    baths: 5,
    area: 4900,
    isVerified: true,
    type: "Villa",
    purpose: "for-sale",
    furnishingStatus: "Unfurnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Golf Course Frontage" },
          { text: "Courtyard with Water Feature" },
          { text: "Double Height Ceilings" },
          { text: "Covered Triple Garage" },
        ],
      },
    ],
    description:
      "A harmonious blend of organic stone and contemporary glass architecture overlooking championship golf course greens. Custom European kitchen cabinetry and expansive family lounges.",
  },
  {
    id: 6005,
    externalID: "6005",
    title: "WhileStone Bayfront Haven - 2BR Luxury Waterfront Home",
    price: 2150000,
    rentFrequency: null,
    rooms: 2,
    baths: 2,
    area: 1650,
    isVerified: true,
    type: "Apartment",
    purpose: "for-sale",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Marina Promenade Access" },
          { text: "Designer Furniture Included" },
          { text: "Children's Pool" },
          { text: "Concierge" },
        ],
      },
    ],
    description:
      "Turnkey designer 2-bedroom home in WhileStone Bayfront. Fully furnished with high-end designer pieces, ready for immediate occupancy or immediate high-yield rental leasing.",
  },
  {
    id: 6006,
    externalID: "6006",
    title: "WhileStone Parkview Townhouse - 3BR Modern Family Home",
    price: 2950000,
    rentFrequency: null,
    rooms: 3,
    baths: 4,
    area: 3100,
    isVerified: true,
    type: "Townhouse",
    purpose: "for-sale",
    furnishingStatus: "Furnished",
    agency: { logo: { url: agencyLogo } },
    coverPhoto: {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80" },
    ],
    amenities: [
      {
        amenities: [
          { text: "Direct Park Access" },
          { text: "Private Rooftop Deck" },
          { text: "Covered Parking" },
          { text: "Clubhouse Privileges" },
        ],
      },
    ],
    description:
      "A distinguished 3-bedroom family townhouse opening directly onto lush community parks and jogging trails. Features private rooftop deck, gourmet kitchen, and private enclosed garage.",
  },
];

// Helper to filter mock properties based on URL query parameters
export const filterMockProperties = (url) => {
  let filtered = [...mockProperties];

  try {
    const urlObj = new URL(url, "https://whilestone-estate.local");
    const params = urlObj.searchParams;

    const purpose = params.get("purpose");
    if (purpose) {
      filtered = filtered.filter((p) => p.purpose === purpose);
    }

    const minPrice = parseFloat(params.get("priceMin"));
    if (!isNaN(minPrice) && minPrice > 0) {
      filtered = filtered.filter((p) => p.price >= minPrice);
    }

    const maxPrice = parseFloat(params.get("priceMax"));
    if (!isNaN(maxPrice) && maxPrice > 0) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    const roomsMin = parseInt(params.get("roomsMin"), 10);
    if (!isNaN(roomsMin) && roomsMin > 0) {
      filtered = filtered.filter((p) => p.rooms >= roomsMin);
    }

    const bathsMin = parseInt(params.get("bathsMin"), 10);
    if (!isNaN(bathsMin) && bathsMin > 0) {
      filtered = filtered.filter((p) => p.baths >= bathsMin);
    }

    const sort = params.get("sort");
    if (sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }
  } catch (e) {
    // Return all if parsing fails
  }

  return { hits: filtered };
};

// Helper to find a mock property by ID
export const getMockPropertyDetail = (externalID) => {
  const match = mockProperties.find(
    (p) => String(p.externalID) === String(externalID) || String(p.id) === String(externalID)
  );

  return match || mockProperties[0];
};

