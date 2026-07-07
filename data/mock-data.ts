export type Category = "Smartphones" | "Laptops" | "Audio" | "Wearables" | "Gaming" | "Accessories";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  launchYear: number;
  rating: number;
  reviewsCount: number;
  priceRange: string;
  trend: string;
  verdict: string;
  summary: string;
  specs: { label: string; value: string }[];
  sentiment: {
    camera: number;
    battery: number;
    performance: number;
    display: number;
    software: number;
    value: number;
  };
  pros: string[];
  cons: string[];
  tags: string[];
  accent: "signal" | "olive" | "peach" | "ink";
};

export type Review = {
  id: string;
  productSlug: string;
  productName: string;
  username: string;
  rating: number;
  categoryRatings: {
    performance: number;
    camera: number;
    battery: number;
    display: number;
    value: number;
  };
  title: string;
  body: string;
  pros: string[];
  cons: string[];
  helpful: number;
  comments: number;
  date: string;
  ownership: string;
  category: Category;
};

export type UserProfile = {
  username: string;
  name: string;
  role: string;
  location: string;
  reviews: number;
  helpfulVotes: number;
  favoriteCategory: Category;
  bio: string;
};

export type Discussion = {
  id: string;
  title: string;
  body: string;
  tag: string;
  author: string;
  replies: number;
  likes: number;
  time: string;
  type: "Question" | "Poll" | "Discussion" | "Buying Advice";
};

export const products: Product[] = [
  {
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    category: "Smartphones",
    launchYear: 2026,
    rating: 4.6,
    reviewsCount: 1478,
    priceRange: "$1,099 - $1,399",
    trend: "Trending",
    verdict: "A polished flagship for video creators and long-term iOS users, with pricing that still needs scrutiny.",
    summary: "Premium phone with excellent cameras, sustained performance, and a high-confidence ecosystem experience.",
    specs: [
      { label: "Display", value: "6.3 in OLED ProMotion" },
      { label: "Chip", value: "A20 Pro" },
      { label: "Storage", value: "256GB - 1TB" },
      { label: "Battery", value: "Up to 29h video" }
    ],
    sentiment: { camera: 96, battery: 84, performance: 95, display: 93, software: 91, value: 71 },
    pros: ["Excellent video", "Fast chip", "Long support"],
    cons: ["Expensive upgrades", "Closed ecosystem"],
    tags: ["#iPhone", "#Camera", "#Creator"],
    accent: "signal"
  },
  {
    slug: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    launchYear: 2025,
    rating: 4.7,
    reviewsCount: 1284,
    priceRange: "$1,199 - $1,499",
    trend: "Top Camera",
    verdict: "Excellent for creators and power users, but not the best choice for buyers focused on battery life.",
    summary: "Large-screen Android flagship with strong zoom cameras, sharp display, and productivity-focused software.",
    specs: [
      { label: "Display", value: "6.9 in Dynamic AMOLED" },
      { label: "Chip", value: "Snapdragon 8 Elite" },
      { label: "Camera", value: "200MP wide + periscope" },
      { label: "Pen", value: "Integrated S Pen" }
    ],
    sentiment: { camera: 98, battery: 79, performance: 94, display: 97, software: 86, value: 73 },
    pros: ["Versatile zoom", "Huge display", "S Pen"],
    cons: ["Large body", "Premium price"],
    tags: ["#Android", "#Camera", "#Productivity"],
    accent: "olive"
  },
  {
    slug: "google-pixel-10-pro",
    name: "Google Pixel 10 Pro",
    brand: "Google",
    category: "Smartphones",
    launchYear: 2025,
    rating: 4.3,
    reviewsCount: 942,
    priceRange: "$999 - $1,199",
    trend: "Software Pick",
    verdict: "A brilliant camera and assistant phone, held back by merely average charging and heavy-use battery endurance.",
    summary: "Clean Android flagship with computational photography, helpful AI features, and a comfortable size.",
    specs: [
      { label: "Display", value: "6.4 in LTPO OLED" },
      { label: "Chip", value: "Tensor G5" },
      { label: "Camera", value: "Triple lens AI system" },
      { label: "Support", value: "7 years updates" }
    ],
    sentiment: { camera: 97, battery: 72, performance: 83, display: 90, software: 96, value: 80 },
    pros: ["Excellent camera", "Clean software", "Bright display"],
    cons: ["Average battery", "Slow charging"],
    tags: ["#Android", "#Camera", "#AI"],
    accent: "peach"
  },
  {
    slug: "sony-wh-1000xm6",
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "Audio",
    launchYear: 2025,
    rating: 4.5,
    reviewsCount: 811,
    priceRange: "$399 - $449",
    trend: "Travel Favorite",
    verdict: "A top-tier noise-canceling headphone for commuters who value comfort, app control, and consistent sound.",
    summary: "Premium over-ear headphones with advanced ANC, long battery life, and improved call handling.",
    specs: [
      { label: "Battery", value: "30h with ANC" },
      { label: "Codec", value: "LDAC, AAC, SBC" },
      { label: "Weight", value: "254g" },
      { label: "Charging", value: "USB-C quick charge" }
    ],
    sentiment: { camera: 0, battery: 92, performance: 88, display: 0, software: 85, value: 82 },
    pros: ["Excellent ANC", "Comfortable fit", "Detailed EQ"],
    cons: ["Premium price", "Warm earcups"],
    tags: ["#Audio", "#Travel", "#ANC"],
    accent: "ink"
  },
  {
    slug: "macbook-air-m5",
    name: "MacBook Air M5",
    brand: "Apple",
    category: "Laptops",
    launchYear: 2026,
    rating: 4.6,
    reviewsCount: 763,
    priceRange: "$1,099 - $1,699",
    trend: "Student Pick",
    verdict: "Quiet, efficient, and beautifully built, but buyers should avoid the base memory configuration.",
    summary: "Fanless laptop focused on battery life, portability, and daily productivity performance.",
    specs: [
      { label: "Display", value: "13.6 or 15.3 in Liquid Retina" },
      { label: "Chip", value: "Apple M5" },
      { label: "Battery", value: "Up to 18h" },
      { label: "Weight", value: "From 2.7 lb" }
    ],
    sentiment: { camera: 58, battery: 96, performance: 89, display: 87, software: 91, value: 78 },
    pros: ["Silent design", "Great battery", "Lightweight"],
    cons: ["Few ports", "Costly upgrades"],
    tags: ["#Laptop", "#Student", "#Battery"],
    accent: "olive"
  },
  {
    slug: "steam-deck-2",
    name: "Steam Deck 2",
    brand: "Valve",
    category: "Gaming",
    launchYear: 2026,
    rating: 4.4,
    reviewsCount: 689,
    priceRange: "$549 - $749",
    trend: "Gaming Buzz",
    verdict: "The handheld to beat for PC players, especially if your library already lives in Steam.",
    summary: "Portable gaming PC with a sharper display, better thermals, and improved suspend-resume reliability.",
    specs: [
      { label: "Display", value: "7.6 in OLED 120Hz" },
      { label: "Storage", value: "512GB - 2TB" },
      { label: "Controls", value: "Hall sticks + trackpads" },
      { label: "Battery", value: "3 - 8h gameplay" }
    ],
    sentiment: { camera: 0, battery: 74, performance: 88, display: 91, software: 84, value: 89 },
    pros: ["Huge library", "Better thermals", "Great controls"],
    cons: ["Heavy", "Battery varies"],
    tags: ["#Gaming", "#Handheld", "#PC"],
    accent: "signal"
  },
  {
    slug: "asus-zenbook-s16",
    name: "ASUS Zenbook S16",
    brand: "ASUS",
    category: "Laptops",
    launchYear: 2025,
    rating: 4.2,
    reviewsCount: 433,
    priceRange: "$1,299 - $1,799",
    trend: "Thin Laptop",
    verdict: "A premium Windows ultrabook with a gorgeous screen and a chassis that feels more expensive than it is.",
    summary: "Slim productivity laptop with OLED display, quiet profile, and strong everyday performance.",
    specs: [
      { label: "Display", value: "16 in 3K OLED" },
      { label: "Chip", value: "Ryzen AI 9" },
      { label: "Weight", value: "3.3 lb" },
      { label: "Ports", value: "USB4, HDMI, SD" }
    ],
    sentiment: { camera: 54, battery: 82, performance: 86, display: 96, software: 78, value: 84 },
    pros: ["Stunning OLED", "Thin chassis", "Useful ports"],
    cons: ["Reflective screen", "Fan noise under load"],
    tags: ["#Laptop", "#OLED", "#Windows"],
    accent: "peach"
  },
  {
    slug: "ipad-pro-m5",
    name: "iPad Pro M5",
    brand: "Apple",
    category: "Accessories",
    launchYear: 2026,
    rating: 4.4,
    reviewsCount: 506,
    priceRange: "$999 - $1,899",
    trend: "Creator Tool",
    verdict: "A beautiful creative tablet that makes sense when paired with pro apps and keyboard accessories.",
    summary: "Ultra-thin tablet with premium display, fast Apple silicon, and strong pen input.",
    specs: [
      { label: "Display", value: "Tandem OLED" },
      { label: "Chip", value: "Apple M5" },
      { label: "Input", value: "Pencil Pro support" },
      { label: "Storage", value: "256GB - 2TB" }
    ],
    sentiment: { camera: 70, battery: 83, performance: 96, display: 99, software: 75, value: 68 },
    pros: ["Best-in-class display", "Fast creative apps", "Excellent pen"],
    cons: ["Keyboard costs extra", "iPadOS limits"],
    tags: ["#Creator", "#Tablet", "#Display"],
    accent: "ink"
  },
  {
    slug: "garmin-venu-4",
    name: "Garmin Venu 4",
    brand: "Garmin",
    category: "Wearables",
    launchYear: 2025,
    rating: 4.5,
    reviewsCount: 371,
    priceRange: "$449 - $499",
    trend: "Fitness Favorite",
    verdict: "A practical smartwatch for people who want reliable health tracking without daily charging anxiety.",
    summary: "Fitness-focused smartwatch with AMOLED display, strong battery, and detailed training metrics.",
    specs: [
      { label: "Battery", value: "Up to 12 days" },
      { label: "Display", value: "AMOLED always-on" },
      { label: "Health", value: "HRV, sleep, ECG" },
      { label: "GPS", value: "Multi-band" }
    ],
    sentiment: { camera: 0, battery: 97, performance: 84, display: 88, software: 82, value: 86 },
    pros: ["Long battery", "Reliable GPS", "Actionable metrics"],
    cons: ["Limited app store", "Plain notifications"],
    tags: ["#Wearable", "#Fitness", "#Battery"],
    accent: "olive"
  },
  {
    slug: "meta-quest-4",
    name: "Meta Quest 4",
    brand: "Meta",
    category: "Gaming",
    launchYear: 2026,
    rating: 4.1,
    reviewsCount: 318,
    priceRange: "$499 - $649",
    trend: "Mixed Reality",
    verdict: "A better mixed reality headset for games and workouts, though comfort still depends on buying the right strap.",
    summary: "Standalone VR and mixed reality headset with sharper passthrough and richer social gaming.",
    specs: [
      { label: "Display", value: "Pancake lenses" },
      { label: "Chip", value: "XR platform" },
      { label: "Tracking", value: "Inside-out 6DoF" },
      { label: "Storage", value: "256GB - 512GB" }
    ],
    sentiment: { camera: 0, battery: 67, performance: 84, display: 86, software: 79, value: 81 },
    pros: ["Better passthrough", "Strong game catalog", "Easy setup"],
    cons: ["Needs comfort strap", "Short sessions"],
    tags: ["#Gaming", "#VR", "#MixedReality"],
    accent: "signal"
  },
  {
    slug: "anker-prime-27k",
    name: "Anker Prime 27K",
    brand: "Anker",
    category: "Accessories",
    launchYear: 2025,
    rating: 4.6,
    reviewsCount: 587,
    priceRange: "$159 - $199",
    trend: "Road Kit",
    verdict: "One of the safest buys for people carrying phones, tablets, laptops, and handheld consoles.",
    summary: "High-capacity USB-C power bank with display readout, fast charging, and travel-friendly build.",
    specs: [
      { label: "Capacity", value: "27,650mAh" },
      { label: "Output", value: "Up to 250W total" },
      { label: "Ports", value: "2x USB-C, 1x USB-A" },
      { label: "Display", value: "Power telemetry" }
    ],
    sentiment: { camera: 0, battery: 95, performance: 90, display: 66, software: 76, value: 88 },
    pros: ["Fast laptop charging", "Useful display", "Solid build"],
    cons: ["Heavy", "Pricey for casual use"],
    tags: ["#Accessory", "#Battery", "#Travel"],
    accent: "peach"
  },
  {
    slug: "nothing-ear-3",
    name: "Nothing Ear 3",
    brand: "Nothing",
    category: "Audio",
    launchYear: 2025,
    rating: 4.2,
    reviewsCount: 456,
    priceRange: "$149 - $179",
    trend: "Design Pick",
    verdict: "Stylish earbuds with punchy sound and good controls, though ANC is a step below the class leaders.",
    summary: "Transparent true wireless earbuds with a compact case, customizable EQ, and multipoint pairing.",
    specs: [
      { label: "Battery", value: "Up to 38h with case" },
      { label: "ANC", value: "Adaptive noise control" },
      { label: "Codec", value: "LDAC, AAC, SBC" },
      { label: "Water", value: "IP54 buds" }
    ],
    sentiment: { camera: 0, battery: 85, performance: 82, display: 0, software: 87, value: 90 },
    pros: ["Distinct design", "Good app", "Strong value"],
    cons: ["ANC just okay", "Case scratches"],
    tags: ["#Audio", "#Earbuds", "#Value"],
    accent: "olive"
  }
];

export const users: UserProfile[] = [
  {
    username: "maya-tests",
    name: "Maya Chen",
    role: "Mobile photographer",
    location: "Seattle, WA",
    reviews: 48,
    helpfulVotes: 4360,
    favoriteCategory: "Smartphones",
    bio: "Tests phone cameras on hikes, night streets, and family trips before calling anything flagship-ready."
  },
  {
    username: "benchlab-eli",
    name: "Eli Ramos",
    role: "Laptop reviewer",
    location: "Austin, TX",
    reviews: 34,
    helpfulVotes: 2910,
    favoriteCategory: "Laptops",
    bio: "Tracks heat, fan noise, battery drain, and the daily details spec sheets hide."
  },
  {
    username: "sonic-jo",
    name: "Jordan Lee",
    role: "Audio commuter",
    location: "Chicago, IL",
    reviews: 41,
    helpfulVotes: 3274,
    favoriteCategory: "Audio",
    bio: "Compares headphones and earbuds on trains, calls, airports, and quiet late-night work sessions."
  },
  {
    username: "pixelravi",
    name: "Ravi Patel",
    role: "Android power user",
    location: "Brooklyn, NY",
    reviews: 29,
    helpfulVotes: 1842,
    favoriteCategory: "Smartphones",
    bio: "Likes clean software, fast updates, honest battery notes, and cameras that do not overcook skin tones."
  },
  {
    username: "handheldhannah",
    name: "Hannah Brooks",
    role: "Portable gaming fan",
    location: "Denver, CO",
    reviews: 26,
    helpfulVotes: 2017,
    favoriteCategory: "Gaming",
    bio: "Measures handhelds by couch comfort, fan tone, suspend reliability, and how fast a game actually starts."
  },
  {
    username: "wearable-noah",
    name: "Noah Wright",
    role: "Fitness tracker nerd",
    location: "Portland, OR",
    reviews: 37,
    helpfulVotes: 2499,
    favoriteCategory: "Wearables",
    bio: "Runs, lifts, sleeps, and complains when a smartwatch needs a charger before breakfast."
  }
];

export const reviews: Review[] = [
  {
    id: "r-001",
    productSlug: "google-pixel-10-pro",
    productName: "Google Pixel 10 Pro",
    username: "maya-tests",
    rating: 4.2,
    categoryRatings: { performance: 4.0, camera: 4.9, battery: 3.4, display: 4.6, value: 4.2 },
    title: "The camera is incredible, but battery needs work.",
    body: "Photos are consistently excellent in mixed light and the portrait cutouts are better than my old phone. Battery is fine for normal days, but travel days make me reach for a power bank.",
    pros: ["Excellent camera", "Clean software", "Great display"],
    cons: ["Average battery", "Slow charging"],
    helpful: 312,
    comments: 28,
    date: "2026-06-28",
    ownership: "2 months",
    category: "Smartphones"
  },
  {
    id: "r-002",
    productSlug: "samsung-galaxy-s25-ultra",
    productName: "Samsung Galaxy S25 Ultra",
    username: "pixelravi",
    rating: 4.7,
    categoryRatings: { performance: 4.8, camera: 4.9, battery: 4.0, display: 5.0, value: 3.8 },
    title: "The zoom camera made me leave my compact camera at home.",
    body: "The phone is big, but the camera system feels like a real creative tool. I wish the battery was as dominant as the display and zoom performance.",
    pros: ["Incredible zoom", "Best display", "Fast multitasking"],
    cons: ["Heavy", "Price climbs fast"],
    helpful: 274,
    comments: 19,
    date: "2026-06-25",
    ownership: "5 months",
    category: "Smartphones"
  },
  {
    id: "r-003",
    productSlug: "iphone-17-pro",
    productName: "iPhone 17 Pro",
    username: "maya-tests",
    rating: 4.6,
    categoryRatings: { performance: 4.9, camera: 4.7, battery: 4.3, display: 4.6, value: 3.7 },
    title: "Reliable in the boring ways that matter.",
    body: "It is not the flashiest phone, but video, app speed, and day-to-day reliability are excellent. The base storage feels right this year, though accessories remain expensive.",
    pros: ["Excellent video", "Fast apps", "Good battery"],
    cons: ["Expensive cases", "Limited customization"],
    helpful: 221,
    comments: 14,
    date: "2026-06-21",
    ownership: "1 month",
    category: "Smartphones"
  },
  {
    id: "r-004",
    productSlug: "sony-wh-1000xm6",
    productName: "Sony WH-1000XM6",
    username: "sonic-jo",
    rating: 4.5,
    categoryRatings: { performance: 4.6, camera: 0, battery: 4.7, display: 0, value: 4.1 },
    title: "The best travel headphones I have used.",
    body: "Noise canceling is excellent on trains and planes, and the app gives enough control without feeling messy. They can get warm after long sessions.",
    pros: ["Elite ANC", "Comfortable clamp", "Flexible EQ"],
    cons: ["Warm after hours", "Not cheap"],
    helpful: 198,
    comments: 11,
    date: "2026-06-19",
    ownership: "3 months",
    category: "Audio"
  },
  {
    id: "r-005",
    productSlug: "macbook-air-m5",
    productName: "MacBook Air M5",
    username: "benchlab-eli",
    rating: 4.8,
    categoryRatings: { performance: 4.5, camera: 3.1, battery: 5.0, display: 4.5, value: 4.0 },
    title: "A quiet work machine with absurd standby time.",
    body: "The Air feels almost invisible in a bag and never gets loud because there is no fan. Upgrade memory if you keep heavy browser sessions open.",
    pros: ["Silent", "Long battery", "Great trackpad"],
    cons: ["Memory upgrades cost", "Only two USB-C ports"],
    helpful: 254,
    comments: 23,
    date: "2026-06-17",
    ownership: "6 weeks",
    category: "Laptops"
  },
  {
    id: "r-006",
    productSlug: "steam-deck-2",
    productName: "Steam Deck 2",
    username: "handheldhannah",
    rating: 4.4,
    categoryRatings: { performance: 4.4, camera: 0, battery: 3.6, display: 4.8, value: 4.7 },
    title: "The OLED screen changes more than I expected.",
    body: "Games look richer, suspend works better, and the thermal noise is much less distracting. Battery still depends heavily on what you play.",
    pros: ["Great OLED", "Better thermals", "Steam library"],
    cons: ["Still chunky", "AAA battery drain"],
    helpful: 187,
    comments: 25,
    date: "2026-06-14",
    ownership: "2 months",
    category: "Gaming"
  },
  {
    id: "r-007",
    productSlug: "garmin-venu-4",
    productName: "Garmin Venu 4",
    username: "wearable-noah",
    rating: 4.6,
    categoryRatings: { performance: 4.3, camera: 0, battery: 5.0, display: 4.5, value: 4.4 },
    title: "Finally, a smartwatch I do not charge every night.",
    body: "The health metrics are easy to trust and the GPS locks quickly. It is less app-rich than an Apple Watch, but that tradeoff works for me.",
    pros: ["Huge battery", "Reliable GPS", "Useful sleep data"],
    cons: ["Basic app store", "Simple notifications"],
    helpful: 143,
    comments: 9,
    date: "2026-06-12",
    ownership: "4 months",
    category: "Wearables"
  },
  {
    id: "r-008",
    productSlug: "asus-zenbook-s16",
    productName: "ASUS Zenbook S16",
    username: "benchlab-eli",
    rating: 4.1,
    categoryRatings: { performance: 4.2, camera: 2.9, battery: 4.0, display: 4.9, value: 4.3 },
    title: "Premium feel, but tune the fan curve.",
    body: "The OLED panel is outstanding and the chassis feels rigid. Under longer exports, the fans become noticeable earlier than I wanted.",
    pros: ["Beautiful OLED", "Thin build", "Good ports"],
    cons: ["Fan ramps up", "Reflective panel"],
    helpful: 119,
    comments: 8,
    date: "2026-06-10",
    ownership: "3 months",
    category: "Laptops"
  },
  {
    id: "r-009",
    productSlug: "anker-prime-27k",
    productName: "Anker Prime 27K",
    username: "handheldhannah",
    rating: 4.7,
    categoryRatings: { performance: 4.7, camera: 0, battery: 4.9, display: 3.8, value: 4.4 },
    title: "It powers my laptop and handheld without drama.",
    body: "The live wattage readout is more useful than I expected. It is heavy, but it replaces multiple smaller batteries in my bag.",
    pros: ["High output", "Useful screen", "Reliable ports"],
    cons: ["Heavy", "Expensive"],
    helpful: 174,
    comments: 17,
    date: "2026-06-07",
    ownership: "5 months",
    category: "Accessories"
  },
  {
    id: "r-010",
    productSlug: "nothing-ear-3",
    productName: "Nothing Ear 3",
    username: "sonic-jo",
    rating: 4.0,
    categoryRatings: { performance: 4.0, camera: 0, battery: 4.3, display: 0, value: 4.7 },
    title: "Great value if ANC is not your top priority.",
    body: "The controls and app are excellent for the price. Noise canceling is good enough for offices, less impressive on loud transit.",
    pros: ["Strong value", "Fun sound", "Good controls"],
    cons: ["ANC trails Sony", "Case scuffs"],
    helpful: 98,
    comments: 6,
    date: "2026-06-04",
    ownership: "2 months",
    category: "Audio"
  },
  {
    id: "r-011",
    productSlug: "meta-quest-4",
    productName: "Meta Quest 4",
    username: "handheldhannah",
    rating: 4.0,
    categoryRatings: { performance: 4.2, camera: 0, battery: 3.2, display: 4.4, value: 4.2 },
    title: "Great games, comfort still needs accessories.",
    body: "Passthrough is much cleaner and setup is painless. The default strap is the first thing I would replace.",
    pros: ["Cleaner passthrough", "Good game library", "Easy setup"],
    cons: ["Default strap", "Battery life"],
    helpful: 89,
    comments: 15,
    date: "2026-06-01",
    ownership: "1 month",
    category: "Gaming"
  },
  {
    id: "r-012",
    productSlug: "ipad-pro-m5",
    productName: "iPad Pro M5",
    username: "maya-tests",
    rating: 4.3,
    categoryRatings: { performance: 4.9, camera: 3.7, battery: 4.1, display: 5.0, value: 3.3 },
    title: "The screen is unreal, the total price is too.",
    body: "Drawing and editing photos feels instant. Once you add the keyboard and Pencil, it becomes a serious investment.",
    pros: ["Amazing OLED", "Fast creative apps", "Thin design"],
    cons: ["Accessory cost", "iPadOS ceilings"],
    helpful: 133,
    comments: 12,
    date: "2026-05-29",
    ownership: "2 months",
    category: "Accessories"
  },
  {
    id: "r-013",
    productSlug: "iphone-17-pro",
    productName: "iPhone 17 Pro",
    username: "sonic-jo",
    rating: 4.4,
    categoryRatings: { performance: 4.8, camera: 4.5, battery: 4.2, display: 4.6, value: 3.6 },
    title: "A strong upgrade from a three-year-old phone.",
    body: "The display, cameras, and app speed all feel noticeably better. I would not upgrade from last year unless video is your job.",
    pros: ["Fast", "Great video", "Bright display"],
    cons: ["Not radical", "Repair costs"],
    helpful: 101,
    comments: 7,
    date: "2026-05-25",
    ownership: "3 weeks",
    category: "Smartphones"
  },
  {
    id: "r-014",
    productSlug: "google-pixel-10-pro",
    productName: "Google Pixel 10 Pro",
    username: "pixelravi",
    rating: 4.1,
    categoryRatings: { performance: 3.9, camera: 4.9, battery: 3.5, display: 4.5, value: 4.1 },
    title: "Smart features are useful, not gimmicky.",
    body: "Call screening and photo tools save me time every week. Heavy navigation plus camera use drains the battery quickly.",
    pros: ["Useful AI", "Natural photos", "Clean UI"],
    cons: ["Battery under load", "Charging speed"],
    helpful: 167,
    comments: 21,
    date: "2026-05-20",
    ownership: "4 months",
    category: "Smartphones"
  },
  {
    id: "r-015",
    productSlug: "sony-wh-1000xm6",
    productName: "Sony WH-1000XM6",
    username: "wearable-noah",
    rating: 4.6,
    categoryRatings: { performance: 4.7, camera: 0, battery: 4.8, display: 0, value: 4.0 },
    title: "ANC that actually helps me focus.",
    body: "I use these in coffee shops and open offices. The seal is consistent and call quality is finally good enough for daily meetings.",
    pros: ["Strong isolation", "Good calls", "Long battery"],
    cons: ["Bulky case", "Costs more than rivals"],
    helpful: 122,
    comments: 5,
    date: "2026-05-16",
    ownership: "2 months",
    category: "Audio"
  },
  {
    id: "r-016",
    productSlug: "macbook-air-m5",
    productName: "MacBook Air M5",
    username: "pixelravi",
    rating: 4.5,
    categoryRatings: { performance: 4.4, camera: 3.0, battery: 4.9, display: 4.3, value: 3.9 },
    title: "The best couch laptop, with caveats.",
    body: "It wakes instantly and sips battery. External display support and port selection still feel conservative.",
    pros: ["Instant wake", "Great battery", "Excellent keyboard"],
    cons: ["Few ports", "Upgrade pricing"],
    helpful: 94,
    comments: 10,
    date: "2026-05-11",
    ownership: "2 months",
    category: "Laptops"
  },
  {
    id: "r-017",
    productSlug: "steam-deck-2",
    productName: "Steam Deck 2",
    username: "benchlab-eli",
    rating: 4.2,
    categoryRatings: { performance: 4.2, camera: 0, battery: 3.5, display: 4.7, value: 4.5 },
    title: "Thermals are better, but it is still a handheld PC.",
    body: "Indie games feel perfect and older AAA titles are smooth. New big releases still need settings work.",
    pros: ["Great suspend", "Better fan tone", "OLED panel"],
    cons: ["Tweak-heavy for new games", "Large body"],
    helpful: 83,
    comments: 13,
    date: "2026-05-08",
    ownership: "6 weeks",
    category: "Gaming"
  },
  {
    id: "r-018",
    productSlug: "garmin-venu-4",
    productName: "Garmin Venu 4",
    username: "maya-tests",
    rating: 4.4,
    categoryRatings: { performance: 4.2, camera: 0, battery: 4.9, display: 4.4, value: 4.5 },
    title: "Health tracking without the notification chaos.",
    body: "The watch nudges me without becoming another tiny phone. Sleep and recovery data have been surprisingly useful.",
    pros: ["Readable health data", "Long battery", "Bright screen"],
    cons: ["Limited third-party apps", "Plain voice assistant"],
    helpful: 75,
    comments: 4,
    date: "2026-05-04",
    ownership: "3 months",
    category: "Wearables"
  },
  {
    id: "r-019",
    productSlug: "asus-zenbook-s16",
    productName: "ASUS Zenbook S16",
    username: "sonic-jo",
    rating: 4.2,
    categoryRatings: { performance: 4.3, camera: 2.8, battery: 4.1, display: 5.0, value: 4.4 },
    title: "Windows laptop screens have caught up.",
    body: "The OLED panel makes creative work pleasant and the keyboard is better than expected. Webcam quality is still only okay.",
    pros: ["Gorgeous screen", "Comfortable keyboard", "Thin design"],
    cons: ["Average webcam", "Glossy reflections"],
    helpful: 81,
    comments: 5,
    date: "2026-04-29",
    ownership: "4 months",
    category: "Laptops"
  },
  {
    id: "r-020",
    productSlug: "anker-prime-27k",
    productName: "Anker Prime 27K",
    username: "wearable-noah",
    rating: 4.5,
    categoryRatings: { performance: 4.6, camera: 0, battery: 4.8, display: 3.7, value: 4.3 },
    title: "A travel brick, in the best possible way.",
    body: "It keeps my laptop, phone, and watch alive through airport days. The weight is the price of not hunting for outlets.",
    pros: ["Huge capacity", "Fast USB-C", "Reliable display"],
    cons: ["Heavy bag item", "Overkill for phones only"],
    helpful: 66,
    comments: 3,
    date: "2026-04-25",
    ownership: "7 months",
    category: "Accessories"
  }
];

export const discussions: Discussion[] = [
  {
    id: "d-001",
    title: "Pixel 10 Pro owners: how is battery after the June update?",
    body: "My screen-on time improved a bit, but camera-heavy days still drain fast. Curious what others are seeing.",
    tag: "#Android",
    author: "pixelravi",
    replies: 46,
    likes: 188,
    time: "2h ago",
    type: "Question"
  },
  {
    id: "d-002",
    title: "Poll: best travel headphones for long flights?",
    body: "Sony XM6, Bose Ultra, AirPods Max 2, or something else? Rank comfort separately from noise canceling.",
    tag: "#Audio",
    author: "sonic-jo",
    replies: 81,
    likes: 244,
    time: "4h ago",
    type: "Poll"
  },
  {
    id: "d-003",
    title: "Is the MacBook Air M5 enough for photo editing?",
    body: "Looking at the 15-inch model with 24GB memory. I edit Lightroom catalogs and occasional 4K video.",
    tag: "#Laptop",
    author: "maya-tests",
    replies: 32,
    likes: 96,
    time: "7h ago",
    type: "Buying Advice"
  },
  {
    id: "d-004",
    title: "Steam Deck 2 settings thread for battery-friendly gaming",
    body: "Drop your frame caps, TDP settings, and games that run beautifully without fan noise.",
    tag: "#Gaming",
    author: "handheldhannah",
    replies: 64,
    likes: 211,
    time: "10h ago",
    type: "Discussion"
  },
  {
    id: "d-005",
    title: "Phone cameras that do not over-sharpen faces?",
    body: "Trying to pick a new phone for family photos. Natural color matters more than zoom for me.",
    tag: "#Camera",
    author: "maya-tests",
    replies: 39,
    likes: 137,
    time: "1d ago",
    type: "Question"
  },
  {
    id: "d-006",
    title: "Best tech under $150 that you still recommend?",
    body: "Accessories, earbuds, chargers, keyboards, anything. Looking for community-tested gifts.",
    tag: "#BudgetTech",
    author: "wearable-noah",
    replies: 118,
    likes: 402,
    time: "1d ago",
    type: "Buying Advice"
  },
  {
    id: "d-007",
    title: "Garmin Venu 4 vs Apple Watch for sleep tracking",
    body: "I care more about recovery insights than replying to messages from my wrist.",
    tag: "#Wearables",
    author: "benchlab-eli",
    replies: 27,
    likes: 88,
    time: "2d ago",
    type: "Question"
  },
  {
    id: "d-008",
    title: "Which flagship actually feels best after six months?",
    body: "Forget launch reviews. Tell me what held up: battery, scratches, updates, resale, camera consistency.",
    tag: "#iPhone",
    author: "pixelravi",
    replies: 73,
    likes: 276,
    time: "2d ago",
    type: "Discussion"
  }
];

export const categories: Category[] = ["Smartphones", "Laptops", "Audio", "Wearables", "Gaming", "Accessories"];

export const sentimentLabels = ["Camera", "Battery", "Performance", "Display", "Software", "Value"];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getReviewById(id: string) {
  return reviews.find((review) => review.id === id);
}

export function getUserByUsername(username: string) {
  return users.find((user) => user.username === username);
}
