// Brand & content constants for Swarajya Farm House
export const BRAND = {
  name: "Swarajya Farm House",
  nameDevanagari: "स्वराज्य फार्म हाउस",
  tagline: "Your Perfect Getaway Near Sinhagad Fort, Pune",
  phone: "+919604158701",
  phoneDisplay: "+91 96041 58701",
  whatsappBase: "https://wa.me/919604158701",
  whatsappBooking:
    "https://wa.me/919604158701?text=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20booking%20at%20Swarajya%20Farm%20House.",
  address:
    "9QP9+P7V, Donje Gaon-Sinhagad Rd, Donaje, Ghera Sinhagad, Maharashtra 411025",
  mapsUrl: "https://maps.google.com/?q=Swarajya+Farm+House+Donje+Gaon+Pune",
  rating: "4.0",
};

export const IMAGES = {
  heroExterior:
    "/resort-exterior-night.jpg",
  pool:
    "/pool-lawn-chairs.jpg",
  banquet:
    "/spacious-banquet-hall.jpg",
  party:
    "/bonfire-night-lawn.jpg",
  landscape:
    "/landscape.jpg",
  picnic:
    "/outdoor-garden-seating.jpg",
  raindance:
    "/rain-dance.jpg",
  restaurant:
    "/dining.jpg",
};

export const AMENITIES = [
  {
    id: "pool",
    title: "Swimming Pool",
    caption: "Clean, safe, sunlit water",
    image: IMAGES.pool,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "rain",
    title: "Rain Dance",
    caption: "Groups & party vibes",
    image: IMAGES.raindance,
    span: "lg:col-span-1",
  },
  {
    id: "banquet",
    title: "AC Banquet Hall",
    caption: "Birthdays. Anniversaries. Corporate.",
    image: IMAGES.banquet,
    span: "lg:col-span-1",
  },
  {
    id: "restaurant",
    title: "In-house Restaurant",
    caption: "Mouth-watering Maharashtrian & multi-cuisine",
    image: IMAGES.restaurant,
    span: "lg:col-span-2",
  },
];

export const PACKAGES = [
  {
    id: "one-night-stay",
    number: "01",
    title: "One Night Stay",
    subtitle: "A short starlit getaway",
    priceWeekday: "₹ 1,400",
    priceWeekend: "₹ 1,600",
    unit: "per person",
    duration: "4:00 PM – 10:00 AM",
    image: IMAGES.heroExterior,
    accent: "Perfect for a quick overnight recharge near Sinhagad Fort",
    meals: ["High Tea (Brunch)", "Unlimited Starters", "Dinner", "Breakfast"],
    inclusions: [
      "Brunch: Hot Tea/Coffee served with fresh Onion Pakoda",
      "Unlimited Starters: Veg (Paneer Chili, Veg Manchurian, Masala Papad, Boiled Peanuts) & Non-Veg (Chicken Fry, Chicken Dry Kabab, Fish Fry, Boiled Egg, Chicken Lollipop)",
      "Dinner: Veg (2 seasonal vegetables, Dal Fry, Indrayani Rice, Chapati/Bhakri) & Non-Veg (Chicken Curry, Anda Curry, Fish Curry, Chicken Malvani, Kolhapuri Chicken - choose any 2)",
      "Breakfast: Classic Poha, Bread Omelette, Upma, Tea/Coffee",
      "Swimming pool & rain dance access",
      "Free high-speed parking and outdoor games access"
    ]
  },
  {
    id: "24h-stay-10am",
    number: "02",
    title: "24-Hour Stay (10 AM)",
    subtitle: "Full day & night cycle",
    priceWeekday: "₹ 1,800",
    priceWeekend: "₹ 2,000",
    unit: "per person",
    duration: "10:00 AM – 10:00 AM",
    image: IMAGES.landscape,
    accent: "Ideal for a full 24-hour relaxation starting from the morning",
    meals: ["Lunch", "High Tea (Brunch)", "Unlimited Starters", "Dinner", "Breakfast"],
    inclusions: [
      "Lunch: Traditional farm-style buffet with rich Veg & Non-Veg options",
      "Brunch: Hot Tea/Coffee served with fresh Onion Pakoda",
      "Unlimited Starters: Veg (Paneer Chili, Veg Manchurian, Masala Papad, Boiled Peanuts) & Non-Veg (Chicken Fry, Chicken Dry Kabab, Fish Fry, Boiled Egg, Chicken Lollipop)",
      "Dinner: Veg (2 seasonal vegetables, Dal Fry, Indrayani Rice, Chapati/Bhakri) & Non-Veg (Chicken Curry, Anda Curry, Fish Curry, Chicken Malvani, Kolhapuri Chicken - choose any 2)",
      "Breakfast: Classic Poha, Bread Omelette, Upma, Tea/Coffee",
      "Swimming pool & rain dance access",
      "Campfire/bonfire setup under the night sky",
      "Free high-speed parking and outdoor games access"
    ]
  },
  {
    id: "24h-stay-4pm",
    number: "03",
    title: "24-Hour Stay (4 PM)",
    subtitle: "Sunset to Sunset getaway",
    priceWeekday: "₹ 1,800",
    priceWeekend: "₹ 2,000",
    unit: "per person",
    duration: "4:00 PM – 4:00 PM",
    image: IMAGES.pool,
    accent: "Perfect for an evening check-in to enjoy sunset, night vibes, and next day's lunch",
    meals: ["High Tea (Brunch)", "Unlimited Starters", "Dinner", "Breakfast", "Lunch"],
    inclusions: [
      "Brunch: Hot Tea/Coffee served with fresh Onion Pakoda",
      "Unlimited Starters: Veg (Paneer Chili, Veg Manchurian, Masala Papad, Boiled Peanuts) & Non-Veg (Chicken Fry, Chicken Dry Kabab, Fish Fry, Boiled Egg, Chicken Lollipop)",
      "Dinner: Veg (2 seasonal vegetables, Dal Fry, Indrayani Rice, Chapati/Bhakri) & Non-Veg (Chicken Curry, Anda Curry, Fish Curry, Chicken Malvani, Kolhapuri Chicken - choose any 2)",
      "Breakfast: Classic Poha, Bread Omelette, Upma, Tea/Coffee",
      "Lunch: Traditional farm-style buffet with rich Veg & Non-Veg options",
      "Swimming pool & rain dance access",
      "Campfire/bonfire setup under the night sky",
      "Free high-speed parking and outdoor games access"
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Rahul Shinde",
    title: "Best for family stay",
    quote:
      "Clean swimming pool and rooms, AC was working, well organised, large parking area, food was tasty, staff was too polite also owner is friendly.",
  },
  {
    name: "SRS Clothing Hub",
    title: "Awesome birthday celebration",
    quote:
      "We celebrated our son's 5th birthday here. The food taste was awesome, hospitality was excellent, and the AC hall, changing room, swimming pool, and overall cleanliness were very well maintained.",
  },
  {
    name: "Yogesh Jadhav",
    title: "Peaceful location",
    quote:
      "We recently visited this resort for a boys' outing. The biggest highlight is definitely its location — well-situated, peaceful, and offers a nice break from the usual city routine.",
  },
];

export const MANIFESTO = [
  {
    number: "01",
    kicker: "The Land",
    title: "Grown at the foot of Sinhagad.",
    body:
      "Sixteen acres of unhurried air, framed by the Sahyadris. We opened the gates so the city could exhale — a place where kids run barefoot, elders rest their eyes on the horizon, and time moves like the river.",
  },
  {
    number: "02",
    kicker: "The Hospitality",
    title: "Family-run. Guest-first.",
    body:
      "Every room is turned down by hand. Every plate leaves the kitchen warm. Our team knows regulars by name and welcomes first-timers like old friends — because a farmhouse only feels like home when the people do.",
  },
  {
    number: "03",
    kicker: "The Moments",
    title: "For picnics, parties & pauses.",
    body:
      "From a five-year-old's first birthday to a company off-site under string-lights — we host the days you remember for a lifetime. The pool, the rain-dance, the banquet, the bonfire — all yours.",
  },
];
