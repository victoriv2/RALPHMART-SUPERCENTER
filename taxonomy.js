if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fn, scope) {
    for (var i = 0, len = this.length; i < len; ++i) {
      if (i in this) fn.call(scope, this[i], i, this);
    }
  };
}
if (!Array.prototype.filter) {
  Array.prototype.filter = function(fn, scope) {
    var res = [];
    for (var i = 0, len = this.length; i < len; ++i) {
      if (i in this && fn.call(scope, this[i], i, this)) res.push(this[i]);
    }
    return res;
  };
}
if (!Array.prototype.map) {
  Array.prototype.map = function(fn, scope) {
    var res = [];
    for (var i = 0, len = this.length; i < len; ++i) {
      if (i in this) res.push(fn.call(scope, this[i], i, this));
    }
    return res;
  };
}

window.RALPHMART_TAXONOMY = window.NKEMMART_TAXONOMY = {
  vehicles: {
    id: "vehicles",
    name: "Vehicles",
    icon: "images/categories/cat_vehicles.jpg?v=3",
    count: "447 910",
    subcategories: [
      { id: "vehicle-parts", name: "Vehicle Parts & Accessories", count: "215 891", icon: "images/subcategories/vehicles_parts.jpg?v=3", keywords: ["part", "tyre", "tire", "battery", "accessory", "rim", "brake", "engine", "wiper", "mirror"] },
      { id: "cars", name: "Cars", count: "108 400", icon: "images/subcategories/vehicles_cars.jpg?v=3", keywords: ["car", "toyota", "honda", "benz", "lexus", "hyundai", "sedan", "suv"] },
      { id: "motorcycles-scooters", name: "Motorcycles & Scooters", count: "3 929", icon: "images/subcategories/vehicles_motorcycles.jpg?v=3", keywords: ["motorcycle", "scooter", "bike", "bajaj", "haojue"] },
      { id: "buses-microbuses", name: "Buses & Microbuses", count: "7 322", icon: "images/subcategories/vehicles_buses.jpg?v=3", keywords: ["bus", "microbus", "hiace", "coaster", "van"] },
      { id: "trucks-trailers", name: "Trucks & Trailers", count: "10 132", icon: "images/subcategories/vehicles_trucks.jpg?v=3", keywords: ["truck", "trailer", "tipper", "tanker", "mack"] }
    ]
  },
  property: {
    id: "property",
    name: "Real Estate & Properties",
    icon: "images/categories/cat_property.jpg?v=3",
    count: "248 190",
    subcategories: [
      { id: "houses-apartments-rent", name: "Houses & Apartments for Rent", count: "98 420", icon: "images/subcategories/home_furniture.jpg?v=3", keywords: ["rent", "flat", "apartment", "duplex", "self contain", "mini flat", "2 bedroom", "3 bedroom", "house for rent", "lekki", "ikeja", "abuja"] },
      { id: "houses-apartments-sale", name: "Houses & Apartments for Sale", count: "74 150", icon: "images/subcategories/home_decor.jpg?v=3", keywords: ["sale", "buy house", "duplex for sale", "mansion", "terrace", "bungalow", "detached duplex", "semi detached"] },
      { id: "land-plots-sale", name: "Land & Plots for Sale", count: "48 900", icon: "images/subcategories/other_services.jpg?v=3", keywords: ["land", "plot", "dry land", "commercial land", "farmland", "estate land", "ibeju lekki", "epe", "hectares", "acres"] },
      { id: "commercial-property", name: "Commercial Property", count: "16 340", icon: "images/subcategories/home_office_furniture.jpg?v=3", keywords: ["commercial", "office space", "shop", "warehouse", "plaza", "showroom", "office for rent"] },
      { id: "short-let-apartments", name: "Short Let & Serviced Apartments", count: "10 380", icon: "images/subcategories/home_kitchen_dining.jpg?v=3", keywords: ["short let", "serviced apartment", "daily stay", "vacation rental", "airbnb", "luxury shortlet"] }
    ]
  },
  appliances: {
    id: "appliances",
    name: "Appliances",
    icon: "images/categories/cat_appliances.jpg?v=3",
    count: "182 340",
    subcategories: [
      { id: "kitchen-appliances", name: "Small Kitchen Appliances", count: "89 420", icon: "images/subcategories/appliances_kitchen.jpg?v=3", keywords: ["blender", "air fryer", "kettle", "microwave", "toaster", "juicer"] },
      { id: "large-appliances", name: "Large Home Appliances", count: "51 200", icon: "images/subcategories/appliances_large.jpg?v=3", keywords: ["refrigerator", "freezer", "washing machine", "dryer", "cooker"] },
      { id: "climate-control", name: "Heating, Cooling & Air", count: "28 320", icon: "images/subcategories/appliances_climate.jpg?v=3", keywords: ["fan", "air conditioner", "ac", "heater", "purifier"] },
      { id: "garment-care", name: "Irons & Garment Care", count: "13 400", icon: "images/subcategories/appliances_garment.jpg?v=3", keywords: ["iron", "steam iron", "garment steamer", "ironing board"] }
    ]
  },
  phones: {
    id: "phones",
    name: "Phones & Tablets",
    icon: "images/categories/cat_phones.jpg?v=3",
    count: "329 150",
    subcategories: [
      { id: "smartphones", name: "Mobile Phones & Smartphones", count: "198 400", icon: "images/subcategories/phones_smartphones.jpg?v=3", keywords: ["phone", "iphone", "samsung", "infinix", "tecno", "xiaomi", "redmi"] },
      { id: "tablets", name: "Tablets & iPads", count: "42 610", icon: "images/subcategories/phones_tablets.jpg?v=3", keywords: ["tablet", "ipad", "tab", "kindle"] },
      { id: "mobile-accessories", name: "Phone Accessories & Chargers", count: "65 240", icon: "images/subcategories/phones_accessories.jpg?v=3", keywords: ["charger", "power bank", "powerbank", "cable", "case", "screen protector"] },
      { id: "smart-watches", name: "Smart Watches & Trackers", count: "22 900", icon: "images/subcategories/phones_smartwatches.jpg?v=3", keywords: ["smartwatch", "apple watch", "fitness band", "band"] }
    ]
  },
  "health-beauty": {
    id: "health-beauty",
    name: "Health & Beauty",
    icon: "images/categories/cat_health_beauty.jpg?v=3",
    count: "210 580",
    subcategories: [
      { id: "skin-care", name: "Skin Care & Moisturizers", count: "94 300", icon: "images/subcategories/health_skincare.jpg?v=3", keywords: ["cream", "lotion", "serum", "sunscreen", "cleanser", "soap"] },
      { id: "hair-care", name: "Hair Care, Wigs & Styling", count: "54 210", icon: "images/subcategories/health_haircare.jpg?v=3", keywords: ["hair", "wig", "shampoo", "conditioner", "clipper", "dryer"] },
      { id: "fragrances", name: "Perfumes & Deodorants", count: "38 470", icon: "images/subcategories/health_fragrances.jpg?v=3", keywords: ["perfume", "fragrance", "spray", "cologne", "body spray"] },
      { id: "makeup", name: "Makeup & Cosmetics", count: "23 600", icon: "images/subcategories/health_makeup.jpg?v=3", keywords: ["makeup", "lipstick", "powder", "foundation", "eyeliner", "mascara"] }
    ]
  },
  "home-office": {
    id: "home-office",
    name: "Home & Office",
    icon: "images/categories/cat_home_office.jpg?v=3",
    count: "154 900",
    subcategories: [
      { id: "home-furniture", name: "Living Room & Bedroom Furniture", count: "62 100", icon: "images/subcategories/home_furniture.jpg?v=3", keywords: ["chair", "sofa", "bed", "mattress", "table", "wardrobe"] },
      { id: "office-furniture", name: "Office Furniture & Desk Chairs", count: "31 540", icon: "images/subcategories/home_office_furniture.jpg?v=3", keywords: ["office chair", "desk", "filing cabinet", "bookshelf"] },
      { id: "home-decor", name: "Decor, Lighting & Curtains", count: "41 820", icon: "images/subcategories/home_decor.jpg?v=3", keywords: ["curtain", "lamp", "light", "clock", "carpet", "rug", "decor"] },
      { id: "kitchen-dining", name: "Cookware & Dining", count: "19 440", icon: "images/subcategories/home_kitchen_dining.jpg?v=3", keywords: ["pot", "pan", "plate", "cutlery", "dish rack", "flask"] }
    ]
  },
  electronics: {
    id: "electronics",
    name: "Electronics",
    icon: "images/categories/cat_electronics.jpg?v=3",
    count: "278 190",
    subcategories: [
      { id: "televisions", name: "Televisions & Smart TVs", count: "98 400", icon: "images/subcategories/electronics_tv.jpg?v=3", keywords: ["tv", "smart tv", "television", "hisense", "samsung tv", "lg tv"] },
      { id: "audio-sound", name: "Audio, Speakers & Soundbars", count: "81 320", icon: "images/subcategories/electronics_audio.jpg?v=3", keywords: ["speaker", "soundbar", "sound system", "bluetooth speaker", "home theatre", "subwoofer"] },
      { id: "cameras-optics", name: "Cameras & Photography", count: "32 170", icon: "images/subcategories/electronics_cameras.jpg?v=3", keywords: ["camera", "dslr", "lens", "tripod", "canon", "nikon"] },
      { id: "power-solar", name: "Generators, Inverters & Solar", count: "66 300", icon: "images/subcategories/electronics_solar.jpg?v=3", keywords: ["generator", "inverter", "solar panel", "battery", "ups", "stabilizer"] }
    ]
  },
  fashion: {
    id: "fashion",
    name: "Fashion",
    icon: "images/categories/cat_fashion.jpg?v=3",
    count: "389 450",
    subcategories: [
      { id: "mens-clothing", name: "Men's Clothing & Shoes", count: "142 800", icon: "images/subcategories/fashion_mens.jpg?v=3", keywords: ["shirt", "trousers", "men shoe", "sneakers", "suit", "loafers", "polo"] },
      { id: "womens-clothing", name: "Women's Clothing & Dresses", count: "165 300", icon: "images/subcategories/fashion_womens.jpg?v=3", keywords: ["dress", "gown", "skirt", "heels", "blouse", "handbag", "women shoes"] },
      { id: "watches-jewelry", name: "Watches, Bags & Jewelry", count: "53 150", icon: "images/subcategories/fashion_watches_jewelry.jpg?v=3", keywords: ["watch", "wristwatch", "bag", "necklace", "earring", "bracelet", "wallet"] },
      { id: "kids-fashion", name: "Kids & Teens Fashion", count: "28 200", icon: "images/subcategories/fashion_kids.jpg?v=3", keywords: ["kids clothing", "children clothes", "school bag", "kids shoes"] }
    ]
  },
  supermarket: {
    id: "supermarket",
    name: "Groceries & Supermarket",
    icon: "images/categories/cat_supermarket.jpg?v=3",
    count: "115 800",
    subcategories: [
      { id: "food-cupboard", name: "Food Cupboard & Grains", count: "48 900", icon: "images/subcategories/supermarket_food.jpg?v=3", keywords: ["groceries", "grocery", "rice", "beans", "oil", "pasta", "flour", "sugar", "salt"] },
      { id: "drinks-beverages", name: "Beverages, Milk & Drinks", count: "33 450", icon: "images/subcategories/supermarket_drinks.jpg?v=3", keywords: ["groceries", "grocery", "milk", "juice", "tea", "coffee", "wine", "water", "milo"] },
      { id: "cleaning-laundry", name: "Household Cleaning & Laundry", count: "21 350", icon: "images/subcategories/supermarket_cleaning.jpg?v=3", keywords: ["detergent", "bleach", "soap", "sponge", "air freshener", "tissue"] },
      { id: "canned-packaged", name: "Canned & Packaged Goods", count: "12 100", icon: "images/subcategories/supermarket_packaged.jpg?v=3", keywords: ["groceries", "grocery", "sardine", "corned beef", "canned", "biscuits", "snacks"] }
    ]
  },
  computing: {
    id: "computing",
    name: "Computing",
    icon: "images/categories/cat_computing.jpg?v=3",
    count: "194 600",
    subcategories: [
      { id: "laptops", name: "Laptops & Notebooks", count: "98 420", icon: "images/subcategories/computing_laptops.jpg?v=3", keywords: ["laptop", "hp", "dell", "lenovo", "macbook", "asus", "acer"] },
      { id: "desktops-monitors", name: "Desktops, Monitors & All-in-One", count: "38 200", icon: "images/subcategories/computing_desktops.jpg?v=3", keywords: ["desktop", "monitor", "cpu", "pc", "all-in-one"] },
      { id: "computer-accessories", name: "Computer Accessories & Keyboards", count: "41 180", icon: "images/subcategories/computing_accessories.jpg?v=3", keywords: ["mouse", "keyboard", "hard drive", "ssd", "flash drive", "ram", "charger"] },
      { id: "networking-printers", name: "Printers, Scanners & Networking", count: "16 800", icon: "images/subcategories/computing_printers.jpg?v=3", keywords: ["printer", "router", "wifi", "modem", "scanner", "toner"] }
    ]
  },
  baby: {
    id: "baby",
    name: "Baby Products",
    icon: "images/categories/cat_baby.jpg?v=3",
    count: "87 400",
    subcategories: [
      { id: "diapering-wipes", name: "Diapers, Wipes & Potty", count: "39 100", icon: "images/subcategories/baby_diapers.jpg?v=3", keywords: ["diaper", "pampers", "wipes", "potty"] },
      { id: "baby-feeding", name: "Feeding & Nursing Bottles", count: "24 800", icon: "images/subcategories/baby_feeding.jpg?v=3", keywords: ["feeding bottle", "formula", "breast pump", "high chair", "pacifier"] },
      { id: "baby-gear", name: "Strollers, Walkers & Car Seats", count: "14 200", icon: "images/subcategories/baby_gear.jpg?v=3", keywords: ["stroller", "walker", "car seat", "baby cot", "carrier"] },
      { id: "toys-games", name: "Toys, Puzzles & Educational Games", count: "9 300", icon: "images/subcategories/baby_toys.jpg?v=3", keywords: ["toy", "puzzle", "doll", "playmat", "teddy"] }
    ]
  },
  gaming: {
    id: "gaming",
    name: "Gaming",
    icon: "images/categories/cat_gaming.jpg?v=3",
    count: "93 250",
    subcategories: [
      { id: "consoles", name: "PlayStation, Xbox & Nintendo Consoles", count: "38 400", icon: "images/subcategories/gaming_consoles.jpg?v=3", keywords: ["playstation", "ps5", "ps4", "xbox", "nintendo", "console"] },
      { id: "video-games", name: "Video Game Discs & Digital Titles", count: "29 150", icon: "images/subcategories/gaming_videogames.jpg?v=3", keywords: ["fifa", "fc 24", "gta", "cod", "game disc", "mortal kombat"] },
      { id: "gaming-accessories", name: "Controllers, Headsets & Wheels", count: "25 700", icon: "images/subcategories/gaming_accessories.jpg?v=3", keywords: ["controller", "gamepad", "gaming headset", "racing wheel", "charging dock"] }
    ]
  },
  other: {
    id: "other",
    name: "Other categories",
    icon: "images/categories/cat_other.jpg?v=3",
    count: "142 800",
    subcategories: [
      { id: "services", name: "Commercial & Home Services", count: "52 400", icon: "images/subcategories/other_services.jpg?v=3", keywords: ["service", "repair", "installation", "cleaning service"] },
      { id: "sports-fitness", name: "Sports, Gym & Fitness", count: "39 100", icon: "images/subcategories/other_sports.jpg?v=3", keywords: ["treadmill", "dumbbell", "gym", "football", "fitness"] },
      { id: "books-stationery", name: "Books, Crafts & Stationery", count: "28 300", icon: "images/subcategories/other_books.jpg?v=3", keywords: ["book", "stationery", "pen", "notebook", "art"] },
      { id: "pets-animals", name: "Pets, Pet Food & Accessories", count: "23 000", icon: "images/subcategories/other_pets.jpg?v=3", keywords: ["dog", "cat", "pet food", "cage", "puppy"] }
    ]
  }
};

// Aliases for Real Estate & Properties
window.RALPHMART_TAXONOMY['real-estate'] = window.RALPHMART_TAXONOMY.property;
window.RALPHMART_TAXONOMY['realestate'] = window.RALPHMART_TAXONOMY.property;
window.RALPHMART_TAXONOMY['properties'] = window.RALPHMART_TAXONOMY.property;

// ========================================================
// RALPHMART VERIFIED MASTER CATALOG
// Accurate products with authentic prices, brands, keywords
// ========================================================
window.RALPHMART_CATALOG = window.NKEMMART_CATALOG = [];

// ========================================================
// SMART ACCURATE SEARCH & RELEVANCE ENGINE
// Multi-term token matching, brand scoring, zero hallucination
// ========================================================
window.NKEMMART_SEARCH = window.RALPHMART_SEARCH = function(rawQuery, catFilter, subFilter) {
  var catalog = window.RALPHMART_CATALOG || [];
  var q = (rawQuery || '').trim().toLowerCase();

  // Filter out hidden products set by store administrator
  var hiddenMap = {};
  try {
    var adminProds = JSON.parse(localStorage.getItem('nkemmart_admin_products')) || [];
    adminProds.forEach(function(ap) {
      if (ap && ap.status === 'hidden') hiddenMap[String(ap.id)] = true;
    });
  } catch(e) {}

  var pool = catalog.filter(function(p) {
    if (!p) return false;
    if (p.status === 'hidden' || hiddenMap[String(p.id)]) return false;
    return true;
  });

  // If filtered by category / subcategory
  if (catFilter) {
    pool = pool.filter(function(p) { return p.category === catFilter; });
  }
  if (subFilter) {
    pool = pool.filter(function(p) { return p.subcategory === subFilter; });
  }

  // If no search query, return the pool as is
  if (!q) {
    return pool.slice();
  }

  // Clean and tokenize query (strip punctuation, extract non-empty words)
  var cleanQ = q.replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  var tokens = cleanQ.split(' ').filter(function(t) { return t.length > 0; });

  if (tokens.length === 0) {
    return pool.slice();
  }

  // Joined alias lookup for compound words (e.g., "powerbank" -> "power bank", "smarttv" -> "smart tv")
  var aliases = {
    'airfryer': 'air fryer',
    'powerbank': 'power bank',
    'smarttv': 'smart tv',
    'smartwatch': 'smart watch',
    'homeappliance': 'appliances',
    'smartphone': 'smartphones'
  };
  var expandedQuery = aliases[cleanQ] ? aliases[cleanQ] : cleanQ;

  var scored = [];

  pool.forEach(function(item) {
    var titleLower = (item.title || '').toLowerCase();
    var brandLower = (item.brand || '').toLowerCase();
    var catLower = (item.category || '').toLowerCase();
    var subLower = (item.subcategory || '').toLowerCase();
    var kwCombined = (item.keywords || []).join(' ').toLowerCase();

    var score = 0;

    // 1. Exact phrase matches (highest priority)
    if (titleLower.indexOf(cleanQ) !== -1 || titleLower.indexOf(expandedQuery) !== -1) {
      score += 150;
    }
    if (brandLower === cleanQ || brandLower.indexOf(cleanQ) !== -1) {
      score += 120;
    }
    if (kwCombined.indexOf(cleanQ) !== -1 || kwCombined.indexOf(expandedQuery) !== -1) {
      score += 90;
    }
    if (catLower === cleanQ || subLower === cleanQ) {
      score += 80;
    }

    // 2. Tokenized multi-word matching
    var allTokensMatch = true;
    var tokenMatchCount = 0;

    tokens.forEach(function(tok) {
      var inTitle = titleLower.indexOf(tok) !== -1;
      var inBrand = brandLower.indexOf(tok) !== -1;
      var inKw = kwCombined.indexOf(tok) !== -1;
      var inCat = catLower.indexOf(tok) !== -1 || subLower.indexOf(tok) !== -1;

      if (inTitle || inBrand || inKw || inCat) {
        tokenMatchCount++;
        if (inTitle) score += 35;
        if (inBrand) score += 30;
        if (inKw) score += 25;
        if (inCat) score += 15;
      } else {
        allTokensMatch = false;
      }
    });

    // Bonus if all words in query match this product
    if (allTokensMatch && tokens.length > 1) {
      score += 60;
    }

    // Only include if at least one meaningful token matched and score is positive
    if (tokenMatchCount > 0 && score > 0) {
      scored.push({ item: item, score: score });
    }
  });

  // Sort descending by relevance score
  scored.sort(function(a, b) {
    return b.score - a.score;
  });

  return scored.map(function(s) { return s.item; });
};

// ========================================================
// ALL 36 NIGERIAN STATES + FCT AND LOCAL GOVERNMENT AREAS
// Accurate Shipping Rates, Transit Schedules & LGAs
// ========================================================
window.NIGERIA_LOCATIONS = {
  "lagos": {
    name: "Lagos",
    cost: "₦ 1,500",
    time: "Within 24 - 48 Hours",
    lgas: ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa (Ikoyi / Lekki / VI)", "Ifako-Ijaiye", "Ikeja (Alausa / GRA / Airport)", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland (Yaba / Ebute Metta)", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"]
  },
  "abuja": {
    name: "Abuja (FCT)",
    cost: "₦ 2,200",
    time: "Within 48 - 72 Hours",
    lgas: ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council (AMAC)"]
  },
  "abia": {
    name: "Abia",
    cost: "₦ 2,500",
    time: "Within 48 - 72 Hours",
    lgas: ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"]
  },
  "adamawa": {
    name: "Adamawa",
    cost: "₦ 3,200",
    time: "3 - 5 Days Delivery",
    lgas: ["Demsa", "Fufore", "Ganye", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"]
  },
  "akwa-ibom": {
    name: "Akwa Ibom",
    cost: "₦ 2,500",
    time: "Within 48 - 72 Hours",
    lgas: ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat Enin", "Nsit Atai", "Nsit Ibom", "Nsit Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung Uko", "Ukanafun", "Uruan", "Urue-Offong/Oruko", "Uyo"]
  },
  "anambra": {
    name: "Anambra",
    cost: "₦ 2,200",
    time: "Within 48 - 72 Hours",
    lgas: ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"]
  },
  "bauchi": {
    name: "Bauchi",
    cost: "₦ 3,000",
    time: "3 - 5 Days Delivery",
    lgas: ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"]
  },
  "bayelsa": {
    name: "Bayelsa",
    cost: "₦ 2,600",
    time: "Within 48 - 72 Hours",
    lgas: ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"]
  },
  "benue": {
    name: "Benue",
    cost: "₦ 2,800",
    time: "3 - 4 Days Delivery",
    lgas: ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"]
  },
  "borno": {
    name: "Borno",
    cost: "₦ 3,500",
    time: "3 - 5 Days Delivery",
    lgas: ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"]
  },
  "cross-river": {
    name: "Cross River",
    cost: "₦ 2,500",
    time: "Within 48 - 72 Hours",
    lgas: ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"]
  },
  "delta": {
    name: "Delta",
    cost: "₦ 2,500",
    time: "Within 48 - 72 Hours",
    lgas: ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"]
  },
  "ebonyi": {
    name: "Ebonyi",
    cost: "₦ 2,500",
    time: "Within 48 - 72 Hours",
    lgas: ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"]
  },
  "edo": {
    name: "Edo",
    cost: "₦ 2,400",
    time: "Within 48 - 72 Hours",
    lgas: ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba Okha", "Oredo", "Orhionmwon", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"]
  },
  "ekiti": {
    name: "Ekiti",
    cost: "₦ 2,000",
    time: "Within 48 - 72 Hours",
    lgas: ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"]
  },
  "enugu": {
    name: "Enugu",
    cost: "₦ 2,500",
    time: "Within 48 - 72 Hours",
    lgas: ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"]
  },
  "gombe": {
    name: "Gombe",
    cost: "₦ 3,000",
    time: "3 - 5 Days Delivery",
    lgas: ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"]
  },
  "imo": {
    name: "Imo",
    cost: "₦ 2,400",
    time: "Within 48 - 72 Hours",
    lgas: ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Onuimo", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West"]
  },
  "jigawa": {
    name: "Jigawa",
    cost: "₦ 3,200",
    time: "3 - 5 Days Delivery",
    lgas: ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"]
  },
  "kaduna": {
    name: "Kaduna",
    cost: "₦ 2,800",
    time: "3 - 4 Days Delivery",
    lgas: ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"]
  },
  "kano": {
    name: "Kano",
    cost: "₦ 2,800",
    time: "3 - 4 Days Delivery",
    lgas: ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"]
  },
  "katsina": {
    name: "Katsina",
    cost: "₦ 3,000",
    time: "3 - 5 Days Delivery",
    lgas: ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsin Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"]
  },
  "kebbi": {
    name: "Kebbi",
    cost: "₦ 3,200",
    time: "3 - 5 Days Delivery",
    lgas: ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Danko/Wasagu", "Yauri", "Zuru"]
  },
  "kogi": {
    name: "Kogi",
    cost: "₦ 2,600",
    time: "Within 48 - 72 Hours",
    lgas: ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"]
  },
  "kwara": {
    name: "Kwara",
    cost: "₦ 2,400",
    time: "Within 48 - 72 Hours",
    lgas: ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"]
  },
  "nasarawa": {
    name: "Nasarawa",
    cost: "₦ 2,600",
    time: "Within 48 - 72 Hours",
    lgas: ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"]
  },
  "niger": {
    name: "Niger",
    cost: "₦ 2,800",
    time: "3 - 4 Days Delivery",
    lgas: ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Moya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"]
  },
  "ogun": {
    name: "Ogun",
    cost: "₦ 1,800",
    time: "Within 24 - 48 Hours",
    lgas: ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu", "Yewa North", "Yewa South"]
  },
  "ondo": {
    name: "Ondo",
    cost: "₦ 2,000",
    time: "Within 48 - 72 Hours",
    lgas: ["Akoko North-East", "Akoko North-West", "Akoko South-West", "Akoko South-East", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"]
  },
  "osun": {
    name: "Osun",
    cost: "₦ 2,000",
    time: "Within 48 - 72 Hours",
    lgas: ["Atakunmosa East", "Atakunmosa West", "Aiyedaade", "Aiyedire", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Ife Central", "Ife East", "Ife North", "Ife South", "Egbedore", "Ejigbo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"]
  },
  "oyo": {
    name: "Oyo",
    cost: "₦ 1,800",
    time: "Within 48 - 72 Hours",
    lgas: ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"]
  },
  "plateau": {
    name: "Plateau",
    cost: "₦ 2,800",
    time: "3 - 4 Days Delivery",
    lgas: ["Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"]
  },
  "rivers": {
    name: "Rivers",
    cost: "₦ 2,500",
    time: "Within 48 - 72 Hours",
    lgas: ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emohua", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"]
  },
  "sokoto": {
    name: "Sokoto",
    cost: "₦ 3,200",
    time: "3 - 5 Days Delivery",
    lgas: ["Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gawabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"]
  },
  "taraba": {
    name: "Taraba",
    cost: "₦ 3,200",
    time: "3 - 5 Days Delivery",
    lgas: ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kumi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"]
  },
  "yobe": {
    name: "Yobe",
    cost: "₦ 3,200",
    time: "3 - 5 Days Delivery",
    lgas: ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"]
  },
  "zamfara": {
    name: "Zamfara",
    cost: "₦ 3,200",
    time: "3 - 5 Days Delivery",
    lgas: ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"]
  }
};