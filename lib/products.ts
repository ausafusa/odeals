export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  title: string;
  category: "Beauty" | "Gadgets" | "Home & Kitchen";
  categorySlug: "beauty" | "gadgets" | "home-kitchen";
  image: string;
  shortBenefits: string;
  benefits: string[];
  amazonUrl: string;
  youtubeShortUrl?: string;
  tagline: string;
  trending: boolean;
  whyWePickedIt: string;
  bestFor: string[];
  thingsToKnow: string[];
  editorialSummary: string;
  faqs: ProductFaq[];
};

export type Category = {
  slug: Product["categorySlug"];
  title: Product["category"];
  heading: string;
  description: string;
  intro: string;
  seoDescription: string;
};

export const categories: Category[] = [
  {
    slug: "beauty",
    title: "Beauty",
    heading: "Beauty essentials for calm, polished routines",
    description:
      "Discover globally inspired beauty tools and routine upgrades chosen for comfort, simplicity, and everyday practicality.",
    intro:
      "Our beauty picks focus on clean design, easier routines, and reliable everyday use instead of exaggerated promises.",
    seoDescription:
      "Explore beauty product recommendations on ODeals, including skincare tools and vanity essentials selected for convenience and mobile-first browsing.",
  },
  {
    slug: "gadgets",
    title: "Gadgets",
    heading: "Useful gadgets that fit modern homes and workspaces",
    description:
      "Browse compact gadgets selected for flexible daily use, clean setups, and simple value without unnecessary clutter.",
    intro:
      "These gadget recommendations are meant for people who want practical upgrades that look good and feel easy to use.",
    seoDescription:
      "Shop gadget recommendations on ODeals, from desk-friendly power accessories to portable entertainment finds and modern home tech.",
  },
  {
    slug: "home-kitchen",
    title: "Home & Kitchen",
    heading: "Smart home and kitchen tools for modern living",
    description:
      "Discover top-rated home and kitchen gadgets chosen for everyday convenience, smart design, and real home use.",
    intro:
      "Our home and kitchen picks focus on practical tools that save time, reduce effort, and make daily life easier for everyone.",
    seoDescription:
      "Explore home and kitchen product recommendations on ODeals, including blenders, appliances, and home gadgets selected for everyday use.",
  },
];

export const products: Product[] = [

    {
    slug: "ninja-professional-plus-food-processor",
    title: "Ninja Professional Plus Food Processor",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    image: "/products/ninja-professional-plus-food-processor.png",
    shortBenefits: "1000W motor, 9-cup bowl, and 4 Auto-iQ functions for effortless meal prep in seconds.",
    benefits: [
      "1000-Peak-Watt Motor: Powers through onions, cheese, nuts, and dough without breaking a sweat — consistent results every time.",
      "4 Auto-iQ Functions: Dedicated programs for chopping, slicing, purees, and dough take the guesswork out of every task.",
      "9-Cup Processor Bowl: Generous capacity handles family-sized batches with a food chute and pusher for continuous feeding.",
    ],
    amazonUrl: "https://amzn.to/3QoXQgD",
    youtubeShortUrl: "YOUTUBE_URL",
    tagline:
      "Chop, slice, shred, and dough — all at the touch of a button.",
    trending: false,
    whyWePickedIt:
      "The BN601 is the sweet spot between power and price. At under $100, it delivers Auto-iQ intelligence that most food processors at twice the price do not have.",
    bestFor: [
      "Meal preppers who spend hours chopping every week",
      "Home bakers who make dough regularly",
      "Anyone who wants faster, more consistent food prep",
    ],
    thingsToKnow: [
      "Comes with 3 blades: chopping blade, dough blade, and slicing/shredding disc",
      "Bowl, lid, and blades are all dishwasher safe",
      "Cord storage built into the base for neat countertop storage",
    ],
    editorialSummary:
      "The Ninja Professional Plus Food Processor turns the most tedious part of cooking — the prep — into a 10-second job. Onions chopped, cheese shredded, dough mixed, vegetables sliced: all with one machine and zero effort. The 1000-watt motor combined with Auto-iQ presets means you press one button and walk away with perfect results. For anyone who meal preps or bakes regularly, this is the single best investment under $100.",
    faqs: [
      {
        question: "Can it make bread dough?",
        answer:
          "Yes — the included dough blade and dedicated dough Auto-iQ program handle bread, pizza, and cookie dough with ease.",
      },
      {
        question: "How loud is it?",
        answer:
          "Like most food processors at this power level, it is noticeable during operation — but tasks complete in seconds, so total noise time is minimal.",
      },
      {
        question: "Can I process hot ingredients?",
        answer:
          "No — only use the processor with room temperature or cooler ingredients to avoid pressure buildup.",
      },
    ],
  },

    {
    slug: "ninja-foodi-smart-xl-6-in-1-indoor-grill",
    title: "Ninja Foodi Smart XL 6-in-1 Indoor Grill",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    image: "/products/ninja-foodi-smart-xl-6-in-1-indoor-grill.jpg",
    shortBenefits: "Smart thermometer, 6-in-1 functions, and XL capacity — perfect indoor grilling without the smoke.",
    benefits: [
      "Smart Cook System: 4 protein settings and 9 doneness levels with the Foodi Smart Thermometer — perfect results every time, no guesswork.",
      "XL Capacity: Grill up to 6 steaks or 24 hot dogs at once with 500°F Cyclonic Grilling Technology for real char-grill marks.",
      "6-in-1 Versatility: Grill, air crisp, roast, bake, broil, and dehydrate — one appliance replaces six kitchen tools.",
    ],
    amazonUrl: "https://amzn.to/4eqsE9T",
    youtubeShortUrl: "YOUTUBE_URL",
    tagline:
      "Sear, sizzle, and crisp — all indoors, all in one.",
    trending: true,
    whyWePickedIt:
      "The Ninja Foodi Smart XL is the only indoor grill with a built-in thermometer that monitors food throughout cooking. No cutting, no guessing — just perfect doneness every time.",
    bestFor: [
      "Apartment dwellers who miss outdoor grilling",
      "Families who want one appliance that does everything",
      "Anyone who wants perfectly cooked steak without a BBQ",
    ],
    thingsToKnow: [
      "Virtually smoke-free design with splatter shield and cool-air zone",
      "Dishwasher-safe grill grate, crisper basket, and cooking pot",
      "Fits up to 6 steaks — ideal for family-sized meals",
    ],
    editorialSummary:
      "The Ninja Foodi Smart XL Grill solves the biggest problem with indoor cooking — guesswork. The built-in Smart Thermometer continuously monitors internal temperature so you never overcook or undercook again. With 500°F cyclonic air combining with a 500°F grill grate, you get genuine char-grill marks and flavors without ever stepping outside. Six functions in one unit means it earns its counter space every single day.",
    faqs: [
      {
        question: "Can I really grill indoors without smoke?",
        answer:
          "Yes — the Ninja Foodi Smart XL uses a splatter shield and cool-air zone to keep smoke virtually eliminated, even when cooking at 500°F.",
      },
      {
        question: "What proteins work best with the Smart Cook System?",
        answer:
          "The system has dedicated settings for beef, poultry, pork, and fish — each with 9 customizable doneness levels from rare to well done.",
      },
      {
        question: "Is it easy to clean?",
        answer:
          "The grill grate, crisper basket, and cooking pot are all dishwasher safe.",
      },
    ],
  },
 {
    slug: "ninja-blendboss-personal-blender",
    title: "Ninja BlenBoss Personal Blender",
    category: "Gadgets",
    categorySlug: "gadgets",
    image: "/products/ninja-blendboss-personal-blender.jpg",
    shortBenefits: "Powerful blending, leakproof travel cup, and smart Auto-iQ presets for perfect smoothies every time.",
    benefits: [
      "Total Crushing Power: A 1200-peak-watt motor and heavy-duty blades effortlessly turn ice into snow.",
      "Auto-iQ Presets: Three intelligent one-touch programs use unique pulsing patterns to take the guesswork out of blending.",
      "On-the-Go Design: The 26oz cup features a built-in handle and a 100% leakproof lid with chug spout and detachable straw.",
    ],
    amazonUrl: "https://www.amazon.com/dp/APNA-AFFILIATE-LINK",
    youtubeShortUrl: "https://www.youtube.com/shorts/qQl1NMp5LPg?feature=share",
    tagline:
      "Blend it. Seal it. Take it anywhere.",
    trending: true,
    whyWePickedIt:
      "Ninja BlenBoss stands out for its powerful motor, smart presets, and truly leakproof travel cup — perfect for busy people who refuse to skip nutrition.",
    bestFor: [
      "People who want quick healthy smoothies on the go",
      "Gym-goers and fitness lovers",
      "Busy mornings when every minute counts",
    ],
    thingsToKnow: [
      "Requires standard 120V power outlet — not battery powered",
      "26oz cup included — great for single servings",
      "Dishwasher safe parts for easy cleanup",
    ],
    editorialSummary:
      "Rushing out the door every morning? Stop compromising on your health! The Ninja BlenBoss lets you blend perfect smoothies and take them to go in the exact same leakproof cup. Powerful, smart, and built for real life.",
    faqs: [
      {
        question: "Can I drink straight from the cup?",
        answer:
          "Yes, just swap the blade assembly for the included leakproof travel lid after blending.",
      },
      {
        question: "Is it battery-powered?",
        answer:
          "No, it requires a standard 120V power outlet.",
      },
    ],
  },
  {
    slug: "silkdrop-hair-wrap",
    title: "SilkDrop Hair Wrap",
    category: "Beauty",
    categorySlug: "beauty",
    image: "/products/silkdrop-hair-wrap.svg",
    shortBenefits: "Lightweight comfort, smoother overnight wear, and a cleaner post-shower routine.",
    benefits: [
      "Smooth fabric helps reduce friction while hair rests or air-dries.",
      "Lightweight wrap format feels easy to wear around the house.",
      "A simple way to make wash-day and nighttime routines feel more organized.",
    ],
    amazonUrl: "https://www.amazon.com/",
    tagline:
      "A soft hair wrap designed to support calmer mornings and a more polished beauty routine.",
    trending: true,
    whyWePickedIt:
      "We included this because hair wraps are one of the easiest beauty upgrades for shoppers who want something practical, giftable, and easy to add to their routine.",
    bestFor: [
      "Overnight hair protection",
      "After-shower routines",
      "Shoppers building a softer, more organized self-care setup",
    ],
    thingsToKnow: [
      "Material feel and fit may differ depending on hair volume and head size.",
      "This type of product is best seen as a routine accessory rather than a treatment product.",
      "Check the current listing for exact material and care instructions.",
    ],
    editorialSummary:
      "SilkDrop Hair Wrap is a low-effort upgrade that makes routines feel tidier and more intentional. It works well for people who value comfort, convenience, and a more refined bathroom shelf.",
    faqs: [
      {
        question: "Why would someone use a hair wrap like this?",
        answer:
          "It can help make post-shower and overnight routines feel neater while reducing daily handling and friction.",
      },
      {
        question: "Is this only for beauty enthusiasts?",
        answer:
          "No. It also suits shoppers who simply want a practical routine accessory that looks clean and feels comfortable.",
      },
    ],
  },
  {
    slug: "lumeblend-makeup-mirror",
    title: "LumeBlend Makeup Mirror",
    category: "Beauty",
    categorySlug: "beauty",
    image: "/products/lumeblend-makeup-mirror.svg",
    shortBenefits: "Adjustable lighting, cleaner visibility, and a vanity-friendly premium look.",
    benefits: [
      "Integrated lighting supports clearer grooming and skincare visibility.",
      "Slim shape fits well in smaller beauty corners and apartment spaces.",
      "Touch controls help the overall experience feel more modern and premium.",
    ],
    amazonUrl: "https://www.amazon.com/",
    tagline:
      "A sleek illuminated mirror for shoppers who want better routine visibility and a more refined setup.",
    trending: true,
    whyWePickedIt:
      "We picked this type of mirror because lighting and visibility can have a bigger impact on everyday routines than many shoppers expect, especially in smaller spaces.",
    bestFor: [
      "Makeup and skincare stations",
      "Small-space vanity setups",
      "Gift shoppers looking for a premium-looking beauty pick",
    ],
    thingsToKnow: [
      "Lighting brightness and size can vary by the exact listing version.",
      "It is best suited for tabletop use rather than large wall-mounted setups.",
      "Review the latest dimensions and controls before purchasing.",
    ],
    editorialSummary:
      "LumeBlend Makeup Mirror brings a cleaner, more elevated feel to beauty spaces. It is an especially useful recommendation for shoppers who care about lighting, organization, and visual polish.",
    faqs: [
      {
        question: "Why does a lighted mirror matter?",
        answer:
          "Better lighting can make grooming, makeup, and skincare routines easier to manage in a consistent way.",
      },
      {
        question: "Is this a good gift option?",
        answer:
          "Yes. It has a premium presentation and broad everyday usefulness, which makes it a versatile beauty gift category.",
      },
    ],
  },
  {
    slug: "voltclip-power-hub",
    title: "VoltClip Power Hub",
    category: "Gadgets",
    categorySlug: "gadgets",
    image: "/products/voltclip-power-hub.svg",
    shortBenefits: "Compact multi-device charging, less cable clutter, and a cleaner desk setup.",
    benefits: [
      "Supports a simpler desk or nightstand charging routine with one hub.",
      "Compact profile helps reduce visible clutter in everyday spaces.",
      "Portable enough for flexible use across home, work, or travel settings.",
    ],
    amazonUrl: "https://www.amazon.com/",
    tagline:
      "A desk-friendly charging accessory for shoppers who want convenience and a tidier everyday setup.",
    trending: true,
    whyWePickedIt:
      "We chose this product style because charging clutter is a universal frustration, and a compact hub is an easy upgrade for both home offices and bedside tables.",
    bestFor: [
      "Remote work desks",
      "Nightstands with multiple devices",
      "Travel kits that need one central charging point",
    ],
    thingsToKnow: [
      "Exact ports and power output depend on the current listing details.",
      "It is best to confirm compatibility with your specific devices before ordering.",
      "Cable management still depends on how many devices you connect at once.",
    ],
    editorialSummary:
      "VoltClip Power Hub is one of the most practical recommendations on the site because it solves a common everyday problem while keeping the setup small, clean, and easy to understand.",
    faqs: [
      {
        question: "Who should consider a charging hub like this?",
        answer:
          "It is a good fit for anyone who regularly charges multiple devices and wants a simpler, more organized setup.",
      },
      {
        question: "Is this mainly for desks?",
        answer:
          "No. It can also work well on bedside tables, kitchen counters, or in travel bags depending on the model.",
      },
    ],
  },
  {
    slug: "snapbrew-smart-mug",
    title: "SnapBrew Smart Mug",
    category: "Gadgets",
    categorySlug: "gadgets",
    image: "/products/snapbrew-smart-mug.svg",
    shortBenefits: "Longer warm-drink comfort, premium design, and a workday-friendly feel.",
    benefits: [
      "Supports a more comfortable coffee or tea routine during longer desk sessions.",
      "Looks polished enough for modern workspaces and home setups.",
      "A convenient category for shoppers who want small everyday luxuries.",
    ],
    amazonUrl: "https://www.amazon.com/",
    tagline:
      "A premium-looking mug option for people who want warm drinks to feel less interrupted during the day.",
    trending: true,
    whyWePickedIt:
      "We picked this category because temperature-retaining drinkware has broad appeal and feels especially relevant to work-from-home, commuting, and gifting audiences.",
    bestFor: [
      "Desk workers and remote teams",
      "Tea and coffee drinkers",
      "Gift-focused shoppers looking for practical premium gadgets",
    ],
    thingsToKnow: [
      "Performance can vary by usage style, beverage type, and the exact mug model.",
      "It is worth checking the current battery, charging, and care details on the Amazon listing.",
      "This is best viewed as a convenience upgrade rather than an essential appliance.",
    ],
    editorialSummary:
      "SnapBrew Smart Mug feels premium without being intimidating. It is a strong recommendation for shoppers who want a daily-use gadget that blends convenience with a polished look.",
    faqs: [
      {
        question: "Who gets the most value from a smart mug?",
        answer:
          "People who sip drinks slowly throughout work sessions or commutes tend to benefit most from this category.",
      },
      {
        question: "Is it mainly a gift item?",
        answer:
          "It works well both as a gift and as a personal convenience purchase for daily routines.",
      },
    ],
  },
  {
    slug: "airnest-mini-projector",
    title: "AirNest Mini Projector",
    category: "Gadgets",
    categorySlug: "gadgets",
    image: "/products/airnest-mini-projector.svg",
    shortBenefits: "Portable viewing, relaxed setup, and a space-saving entertainment option.",
    benefits: [
      "Small format makes it easier to move between rooms or pack for trips.",
      "Helps create a flexible viewing setup without a large permanent screen.",
      "A useful category for cozy bedrooms, casual streaming, and apartment living.",
    ],
    amazonUrl: "https://www.amazon.com/",
    tagline:
      "A compact projector category for shoppers who want a casual, flexible viewing experience at home or away.",
    trending: true,
    whyWePickedIt:
      "We featured this because mini projectors appeal to international, mobile-first audiences looking for compact entertainment options that fit smaller homes and flexible lifestyles.",
    bestFor: [
      "Movie nights in smaller spaces",
      "Portable entertainment setups",
      "Shoppers who want a compact alternative to a traditional TV-first setup",
    ],
    thingsToKnow: [
      "Image quality and brightness can vary significantly between listings.",
      "Room lighting and projection surface have a big impact on the viewing experience.",
      "Check the latest connectivity and streaming details before buying.",
    ],
    editorialSummary:
      "AirNest Mini Projector is best for shoppers who value flexibility and compact living. It is an appealing category for relaxed entertainment rather than a replacement for every large-screen use case.",
    faqs: [
      {
        question: "Is a mini projector a good choice for small spaces?",
        answer:
          "Yes. This category is often attractive for apartments, bedrooms, and rooms where a permanent screen is not ideal.",
      },
      {
        question: "What should shoppers verify before buying?",
        answer:
          "It is smart to review connectivity, brightness, and size details on the latest Amazon listing before making a decision.",
      },
    ],
  },
];

export const siteTrustBadges = [
  "Mobile-friendly picks",
  "Curated product finds",
  "Updated recommendations",
];

export const trendingProducts = products.filter((product) => product.trending);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: Product["categorySlug"]) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

function tokenizeProduct(product: Product) {
  const text = [
    product.title,
    product.tagline,
    product.shortBenefits,
    product.bestFor.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return new Set(
    text
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length > 3),
  );
}

export function getRelatedProducts(currentProduct: Product, limit = 4) {
  const currentTokens = tokenizeProduct(currentProduct);

  return products
    .filter((product) => product.slug !== currentProduct.slug)
    .map((product) => {
      const productTokens = tokenizeProduct(product);
      let score = product.category === currentProduct.category ? 4 : 0;

      productTokens.forEach((token) => {
        if (currentTokens.has(token)) {
          score += 1;
        }
      });

      return { product, score };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map((item) => item.product);
}
