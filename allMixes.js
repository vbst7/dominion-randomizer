const allMixes = [
  {
    name: "Allies",
    cards: [
      // Adventures
      "Amulet", "Ferry", "Lost Arts", "Pathfinding", "Plan", "Seaway", "Training",
      // Allies
      "Architects' Guild", "Augurs", "Band of Nomads", "Barbarian", "Bauble", "Broker", "Capital City", "Carpenter", "Cave Dwellers", "Circle of Witches", "City-state", "Clashes", "Coastal Haven", "Contract", "Courier", "Crafters' Guild", "Desert Guides", "Emissary", "Family of Inventors", "Fellowship of Scribes", "Forest Dwellers", "Forts", "Galleria", "Gang of Pickpockets", "Guildmaster", "Highwayman", "Hunter", "Importer", "Innkeeper", "Island Folk", "League of Bankers", "League of Shopkeepers", "Market Towns", "Marquis", "Merchant Camp", "Modify", "Mountain Folk", "Odysseys", "Order of Astrologers", "Order of Masons", "Peaceful Cult", "Plateau Shepherds", "Royal Galley", "Sentinel", "Skirmisher", "Specialist", "Swap", "Sycophant", "Town", "Townsfolk", "Trappers' Lodge", "Underling", "Wizards", "Woodworkers' Guild",
      // Cornucopia & Guilds
      "Fairgrounds", "Horn of Plenty", "Menagerie",
      // Dark Ages
      "Count", "Death Cart", "Fortress", "Knights", "Marauder", "Mystic", "Squire", "Vagrant",
      // Empires
      "Castles", "Catapult / Rocks", "Encampment / Plunder", "Gladiator / Fortune", "Museum", "Patrician / Emporium", "Settlers / Bustling Village", "Temple", "Wild Hunt",
      // Hinterlands
      "Cartographer", "Scheme", "Spice Merchant",
      // Intrigue
      "Baron", "Courtier", "Lurker", "Mill", "Minion", "Nobles", "Pawn", "Steward", "Wishing Well",
      // Menagerie
      "Alliance", "Coven", "Falconer", "March", "Scrap", "Transport", "Way of the Butterfly", "Way of the Horse", "Way of the Pig",
      // Nocturne
      "Necromancer",
      // Promos
      "Sauna / Avanto",
      // Prosperity
      "City",
      // Renaissance
      "Experiment", "Lackeys", "Mountain Village", "Patron", "Sinister Plot", "Treasurer",
      // Seaside
      "Treasury",
    ]
  },
  {
    name: "Seaside",
    cards: [
      // Adventures
      "Amulet", "Artificer", "Bridge Troll", "Dungeon", "Expedition", "Gear", "Haunted Woods", "Hireling", "Messenger", "Mission", "Pilgrimage", "Ranger", "Relic", "Save", "Scouting Party", "Travelling Fair",
      // Allies
      "Contract", "Forts", "Highwayman", "Odysseys", "Royal Galley",
      // Base
      "Artisan", "Bandit", "Vassal",
      // Cornucopia & Guilds
      "Horn of Plenty", "Merchant Guild",
      // Cornucopia (removed)
      "Farming Village",
      // Dark Ages
      "Armory",
      // Empires
      "Archive", "Enchantress", "Patrician / Emporium", "Villa",
      // Hinterlands
      "Develop",
      // Intrigue
      "Courtyard", "Patrol", "Secret Passage",
      // Menagerie
      "Barge", "Camel Train", "Coven", "Delay", "Demand", "Gamble", "Goatherd", "Hunting Lodge", "Mastermind", "Pursue", "Seize the Day", "Supplies", "Transport", "Village Green", "Way of the Frog", "Way of the Seal", "Way of the Squirrel", "Way of the Turtle",
      // Nocturne
      "Cemetery", "Cobbler", "Crypt", "Den of Sin", "Ghost Town", "Secret Cave", "Tracker",
      // Promos
      "Church", "Summon",
      // Renaissance
      "Cargo Ship", "City Gate", "Innovation", "Piazza", "Research", "Sinister Plot", "Star Chart",
      // Seaside
      "Astrolabe", "Bazaar", "Blockade", "Caravan", "Corsair", "Cutpurse", "Fishing Village", "Haven", "Island", "Lighthouse", "Lookout", "Merchant Ship", "Monkey", "Native Village", "Outpost", "Pirate", "Sailor", "Salvager", "Sea Chart", "Sea Witch", "Smugglers", "Tactician", "Tide Pools", "Treasure Map", "Treasury", "Warehouse", "Wharf",
    ]
  },
  {
    name: "Rising Sun",
    cards: [
      // Adventures
      "Artificer", "Bridge Troll", "Coin of the Realm", "Duplicate", "Guide", "Hireling", "Inheritance", "Lost Arts", "Messenger", "Pathfinding", "Ratcatcher", "Royal Carriage", "Seaway", "Training", "Transmogrify",
      // Alchemy
      "Alchemist",
      // Allies
      "Augurs", "Forts", "Modify", "Townsfolk",
      // Base
      "Laboratory", "Market", "Throne Room",
      // Cornucopia & Guilds
      "Baker", "Carnival", "Footpad", "Hamlet", "Horn of Plenty", "Menagerie", "Shop",
      // Dark Ages
      "Hermit", "Scavenger",
      // Empires
      "Advance", "Annex", "Baths", "City Quarter", "Donate", "Engineer", "Mountain Pass", "Overlord", "Triumph", "Wedding",
      // Hinterlands
      "Haggler", "Highway", "Trail", "Weaver",
      // Intrigue
      "Mill",
      // Menagerie
      "Coven", "Snowy Village",
      // Nocturne
      "Blessed Village", "Changeling", "Conclave", "Cursed Village", "Devil's Workshop", "Pixie", "Tormentor", "Tracker",
      // Plunder
      "Jewelled Egg", "Mining Road", "Shaman",
      // Prosperity
      "Charlatan",
      // Renaissance
      "Cargo Ship", "Exploration", "Innovation", "Sinister Plot",
      // Rising Sun
      "Alley", "Amass", "Approaching Army", "Aristocrat", "Artist", "Asceticism", "Biding Time", "Bureaucracy", "Change", "Continue", "Craftsman", "Credit", "Daimyo", "Divine Wind", "Enlightenment", "Fishmonger", "Flourishing Trade", "Foresight", "Gather", "Gold Mine", "Good Harvest", "Great Leader", "Growth", "Harsh Winter", "Imperial Envoy", "Kind Emperor", "Kintsugi", "Kitsune", "Litter", "Mountain Shrine", "Ninja", "Panic", "Poet", "Practice", "Progress", "Rapid Expansion", "Receive Tribute", "Rice", "Rice Broker", "River Shrine", "Riverboat", "Ronin", "Root Cellar", "Rustic Village", "Samurai", "Sea Trade", "Sickness", "Snake Witch", "Tanuki", "Tea House",
    ]
  },
  {
    name: "Renaissance",
    cards: [
      // Adventures
      "Ball", "Borrow", "Coin of the Realm", "Duplicate", "Ferry", "Gear", "Giant", "Guide", "Hireling", "Inheritance", "Lost Arts", "Miser", "Page", "Pathfinding", "Peasant", "Pilgrimage", "Plan", "Ranger", "Ratcatcher", "Royal Carriage", "Save", "Seaway", "Training", "Transmogrify", "Wine Merchant",
      // Alchemy
      "Alchemist",
      // Base
      "Festival", "Laboratory", "Market", "Militia", "Village",
      // Cornucopia & Guilds
      "Baker", "Butcher", "Candlestick Maker", "Merchant Guild", "Plaza",
      // Dark Ages
      "Junk Dealer",
      // Empires
      "Annex", "Archive", "Capital", "City Quarter", "Donate", "Engineer", "Gladiator / Fortune", "Mountain Pass", "Overlord", "Royal Blacksmith", "Tax", "Triumph", "Wedding",
      // Hinterlands
      "Scheme",
      // Menagerie
      "Bargain", "Cavalry", "Delay", "Demand", "Groom", "Hostelry", "Livery", "Paddock", "Ride", "Scrap", "Sleigh", "Stampede", "Supplies", "Way of the Turtle",
      // Nocturne
      "Crypt", "Fool",
      // Promos
      "Summon",
      // Prosperity
      "Worker's Village",
      // Renaissance
      "Academy", "Acting Troupe", "Barracks", "Border Guard", "Canal", "Capitalism", "Cargo Ship", "Cathedral", "Citadel", "City Gate", "Crop Rotation", "Ducat", "Experiment", "Exploration", "Fair", "Flag Bearer", "Fleet", "Guildhall", "Hideout", "Improve", "Innovation", "Inventor", "Lackeys", "Mountain Village", "Old Witch", "Pageant", "Patron", "Piazza", "Priest", "Recruiter", "Research", "Road Network", "Scepter", "Scholar", "Sculptor", "Seer", "Sewers", "Silk Merchant", "Silos", "Sinister Plot", "Spices", "Star Chart", "Swashbuckler", "Treasurer", "Villain",
      // Seaside
      "Bazaar", "Haven", "Island", "Native Village", "Treasury",
    ]
  },
  {
    name: "Prosperity",
    cards: [
      // Adventures
      "Borrow", "Coin of the Realm", "Ferry", "Magpie", "Quest", "Raid", "Relic", "Storyteller", "Trade", "Travelling Fair",
      // Allies
      "Architects' Guild", "Augurs", "Band of Nomads", "Carpenter", "Cave Dwellers", "Circle of Witches", "City-state", "Coastal Haven", "Crafters' Guild", "Desert Guides", "Family of Inventors", "Fellowship of Scribes", "Forest Dwellers", "Gang of Pickpockets", "Island Folk", "League of Bankers", "League of Shopkeepers", "Market Towns", "Mountain Folk", "Order of Astrologers", "Order of Masons", "Peaceful Cult", "Plateau Shepherds", "Specialist", "Trappers' Lodge", "Woodworkers' Guild",
      // Base
      "Bandit", "Council Room", "Mine",
      // Cornucopia & Guilds
      "Horn of Plenty",
      // Dark Ages
      "Bandit Camp", "Counterfeit", "Forager",
      // Empires
      "Aqueduct", "Arena", "Banquet", "Battlefield", "Castles", "Chariot Race", "Conquest", "Crown", "Delve", "Dominate", "Encampment / Plunder", "Farmers' Market", "Gladiator / Fortune", "Groundskeeper", "Mountain Pass", "Palace", "Patrician / Emporium", "Sacrifice", "Salt the Earth", "Tax", "Temple", "Tomb", "Triumph", "Wedding", "Wild Hunt", "Windfall",
      // Hinterlands
      "Cauldron",
      // Menagerie
      "Alliance", "Animal Fair", "Bargain", "Camel Train", "Commerce", "Desperation", "Destrier", "Enclave", "Fisherman", "Populate", "Reap", "Supplies", "Way of the Camel", "Way of the Monkey", "Wayfarer",
      // Nocturne
      "Crypt", "Tragic Hero",
      // Plunder
      "Buried Treasure", "Cursed", "Figurine", "Foray", "Fortune Hunter", "Invasion", "Jewelled Egg", "King's Cache", "Landing Party", "Looting", "Mining Road", "Pendant", "Peril", "Pickaxe", "Prosper", "Rich", "Search", "Secluded Shrine", "Tools", "Trickster", "Wealthy Village",
      // Prosperity
      "Anvil", "Bank", "Bishop", "Charlatan", "City", "Clerk", "Collection", "Crystal Ball", "Expand", "Forge", "Grand Market", "Hoard", "Investment", "King's Court", "Magnate", "Mint", "Monument", "Peddler", "Quarry", "Rabble", "Tiara", "Vault", "War Chest", "Watchtower", "Worker's Village",
      // Renaissance
      "Canal", "Guildhall", "Pageant", "Silos", "Treasurer",
      // Seaside
      "Astrolabe",
    ]
  },
  {
    name: "Nocturne",
    cards: [
      // Adventures
      "Bridge Troll", "Giant", "Page", "Peasant", "Pilgrimage",
      // Alchemy
      "Golem",
      // Base
      "Artisan",
      // Cornucopia & Guilds
      "Fairgrounds", "Herald", "Horn of Plenty", "Hunting Party", "Jester", "Menagerie", "Remake", "Young Witch",
      // Cornucopia (removed)
      "Tournament",
      // Dark Ages
      "Graverobber", "Hermit", "Ironmonger", "Knights", "Marauder", "Market Square", "Squire",
      // Empires
      "Archive", "Castles", "Chariot Race", "Defiled Shrine", "Encampment / Plunder", "Gladiator / Fortune", "Museum", "Orchard", "Windfall",
      // Hinterlands
      "Border Village",
      // Intrigue
      "Courtier", "Mill", "Wishing Well",
      // Menagerie
      "Animal Fair", "Bargain", "Bounty Hunter", "Commerce", "Demand", "Enhance", "Falconer", "Hostelry", "Populate", "Ride", "Scrap", "Snowy Village", "Stampede", "Way of the Camel", "Way of the Mouse",
      // Nocturne
      "Bard", "Blessed Village", "Cemetery", "Changeling", "Cobbler", "Conclave", "Crypt", "Cursed Village", "Den of Sin", "Devil's Workshop", "Druid", "Exorcist", "Faithful Hound", "Fool", "Ghost Town", "Guardian", "Idol", "Leprechaun", "Monastery", "Necromancer", "Night Watchman", "Pixie", "Pooka", "Raider", "Sacred Grove", "Secret Cave", "Shepherd", "Skulk", "Tormentor", "Tracker", "Tragic Hero", "Vampire", "Werewolf",
      // Promos
      "Black Market",
      // Renaissance
      "Acting Troupe", "Citadel", "Piazza", "Scepter", "Sculptor", "Treasurer",
    ]
  },
  {
    name: "No Terminals",
    cards: [
      // Adventures
      "Artificer", "Ball", "Ferry", "Magpie", "Pathfinding", "Pilgrimage", "Plan", "Ratcatcher", "Raze", "Relic", "Seaway", "Storyteller", "Training", "Transmogrify", "Treasure Trove",
      // Alchemy
      "Alchemist", "Apothecary", "Apprentice", "Scrying Pool", "Vineyard",
      // Base
      "Gardens", "Laboratory", "Market", "Merchant", "Poacher",
      // Cornucopia & Guilds
      "Advisor", "Candlestick Maker", "Fairgrounds", "Horn of Plenty", "Hunting Party", "Menagerie",
      // Dark Ages
      "Counterfeit", "Forager", "Junk Dealer", "Market Square",
      // Empires
      "Archive", "Capital", "Chariot Race", "Charm", "Forum", "Groundskeeper", "Museum", "Obelisk", "Orchard", "Patrician / Emporium", "Tower", "Triumphal Arch",
      // Hinterlands
      "Cartographer", "Farmland", "Highway",
      // Intrigue
      "Lurker", "Minion", "Upgrade", "Wishing Well",
      // Menagerie
      "Banish", "Bargain", "Bounty Hunter", "Commerce", "Coven", "Demand", "Destrier", "Goatherd", "Populate", "Pursue", "Ride", "Sanctuary", "Stockpile", "Supplies", "Way of the Horse", "Way of the Mole", "Way of the Pig",
      // Nocturne
      "Changeling", "Cobbler", "Crypt", "Den of Sin", "Guardian", "Monastery", "Night Watchman", "Pixie", "Raider", "Shepherd", "Vampire",
      // Promos
      "Church",
      // Prosperity
      "Bank", "Grand Market", "Peddler", "Quarry",
      // Prosperity (removed)
      "Loan",
      // Renaissance
      "Border Guard", "Cathedral", "Crop Rotation", "Ducat", "Experiment", "Research", "Seer", "Silos", "Sinister Plot", "Spices",
      // Seaside
      "Caravan", "Lookout", "Treasury",
    ]
  },
  {
    name: "Intrigue",
    cards: [
      // Adventures
      "Amulet", "Artificer", "Borrow", "Distant Lands", "Gear", "Inheritance", "Peasant", "Raze", "Save", "Scouting Party", "Transmogrify",
      // Alchemy
      "University", "Vineyard",
      // Base
      "Artisan", "Cellar", "Sentry", "Vassal",
      // Cornucopia & Guilds
      "Advisor", "Herald", "Jester", "Stonemason",
      // Cornucopia (removed)
      "Farming Village",
      // Dark Ages
      "Band of Misfits", "Count", "Ironmonger", "Mystic", "Procession", "Squire", "Vagrant", "Wandering Minstrel",
      // Empires
      "Aqueduct", "Archive", "Castles", "City Quarter", "Crown", "Defiled Shrine", "Donate", "Groundskeeper", "Mountain Pass", "Sacrifice", "Wild Hunt",
      // Hinterlands
      "Crossroads", "Tunnel",
      // Hinterlands (removed)
      "Silk Road",
      // Intrigue
      "Baron", "Bridge", "Conspirator", "Courtier", "Diplomat", "Duke", "Ironworks", "Lurker", "Masquerade", "Mill", "Mining Village", "Minion", "Nobles", "Patrol", "Pawn", "Replace", "Secret Passage", "Steward", "Swindler", "Torturer", "Upgrade", "Wishing Well",
      // Intrigue (removed)
      "Harem",
      // Nocturne
      "Cemetery", "Changeling", "Druid", "Exorcist", "Necromancer", "Pixie", "Secret Cave", "Shepherd", "Tragic Hero",
      // Prosperity
      "Hoard", "Quarry", "Rabble", "Vault",
      // Prosperity (removed)
      "Trade Route",
      // Renaissance
      "Academy", "Border Guard", "Capitalism", "City Gate", "Crop Rotation", "Innovation", "Piazza", "Road Network", "Sinister Plot", "Star Chart",
      // Seaside
      "Island",
    ]
  },
  {
    name: "Hinterlands",
    cards: [
      // Adventures
      "Artificer", "Ball", "Duplicate", "Lost City", "Pilgrimage", "Plan", "Port", "Scouting Party", "Transmogrify", "Travelling Fair",
      // Alchemy
      "Apprentice",
      // Allies
      "Architects' Guild", "Band of Nomads", "Broker", "Capital City", "Cave Dwellers", "Circle of Witches", "City-state", "Coastal Haven", "Crafters' Guild", "Desert Guides", "Family of Inventors", "Fellowship of Scribes", "Forest Dwellers", "Gang of Pickpockets", "Guildmaster", "Hunter", "Innkeeper", "Island Folk", "League of Bankers", "League of Shopkeepers", "Market Towns", "Mountain Folk", "Odysseys", "Order of Astrologers", "Order of Masons", "Peaceful Cult", "Plateau Shepherds", "Skirmisher", "Swap", "Sycophant", "Trappers' Lodge", "Woodworkers' Guild",
      // Base
      "Gardens",
      // Cornucopia & Guilds
      "Jester", "Merchant Guild",
      // Empires
      "Advance", "Basilica", "Battlefield", "Conquest", "Forum", "Labyrinth", "Ritual", "Triumph", "Villa",
      // Hinterlands
      "Berserker", "Border Village", "Cartographer", "Cauldron", "Crossroads", "Develop", "Farmland", "Fool's Gold", "Guard Dog", "Haggler", "Highway", "Inn", "Jack of All Trades", "Margrave", "Nomads", "Oasis", "Scheme", "Souk", "Spice Merchant", "Stables", "Trader", "Trail", "Tunnel", "Weaver", "Wheelwright", "Witch's Hut",
      // Intrigue
      "Diplomat",
      // Menagerie
      "Animal Fair", "Black Cat", "Cavalry", "Falconer", "Hostelry", "Hunting Lodge", "Livery", "Populate", "Sheepdog", "Sleigh", "Village Green", "Way of the Butterfly", "Way of the Horse", "Way of the Mole", "Way of the Owl", "Way of the Squirrel",
      // Nocturne
      "Blessed Village", "Cemetery", "Faithful Hound", "Monastery", "Skulk",
      // Plunder
      "Buried Treasure", "Deliver", "Figurine", "Foray", "Gondola", "Grotto", "Hasty", "Mapmaker", "Mirror", "Nearby", "Pious", "Rich", "Secluded Shrine", "Shy", "Stowaway", "Taskmaster", "Tireless", "Wealthy Village",
      // Promos
      "Summon",
      // Prosperity
      "Collection", "Watchtower",
      // Renaissance
      "Academy", "Crop Rotation", "Experiment", "Guildhall", "Innovation", "Scholar", "Silos",
    ]
  },
  {
    name: "Hand",
    cards: [
      // Adventures
      "Artificer", "Borrow", "Expedition", "Guide", "Haunted Woods", "Quest", "Raid", "Relic", "Save", "Scouting Party",
      // Alchemy
      "Apprentice",
      // Base
      "Artisan", "Council Room", "Festival", "Library",
      // Cornucopia & Guilds
      "Candlestick Maker", "Hamlet", "Menagerie", "Plaza", "Soothsayer",
      // Cornucopia (removed)
      "Horse Traders",
      // Dark Ages
      "Count", "Forager", "Hermit", "Mystic", "Pillage", "Poor House", "Squire", "Storeroom",
      // Empires
      "Castles", "City Quarter", "Encampment / Plunder", "Forum", "Legionary", "Royal Blacksmith", "Villa", "Windfall",
      // Hinterlands
      "Crossroads", "Inn", "Jack of All Trades", "Oasis", "Stables", "Tunnel",
      // Hinterlands (removed)
      "Embassy",
      // Intrigue
      "Baron", "Courtier", "Diplomat", "Ironworks", "Lurker", "Masquerade", "Mill", "Minion", "Shanty Town", "Torturer",
      // Menagerie
      "Banish", "Bounty Hunter", "Coven", "Goatherd", "Hunting Lodge", "Paddock", "Toil", "Village Green", "Way of the Mole", "Way of the Mule", "Way of the Owl", "Way of the Squirrel",
      // Nocturne
      "Conclave", "Cursed Village", "Exorcist", "Faithful Hound", "Idol", "Secret Cave", "Tragic Hero",
      // Promos
      "Church",
      // Prosperity
      "Bishop", "Vault", "Watchtower",
      // Renaissance
      "Capitalism", "Cathedral", "City Gate", "Crop Rotation", "Flag Bearer", "Patron", "Research", "Road Network", "Scepter", "Scholar", "Silos", "Sinister Plot",
      // Seaside
      "Cutpurse", "Lighthouse", "Native Village", "Outpost", "Tactician", "Warehouse",
    ]
  },
  {
    name: "Friendly",
    cards: [
      // Adventures
      "Distant Lands", "Lost Arts", "Lost City", "Magpie", "Messenger", "Port", "Royal Carriage", "Seaway", "Transmogrify", "Travelling Fair",
      // Base
      "Council Room", "Gardens", "Laboratory", "Poacher",
      // Cornucopia & Guilds
      "Advisor", "Horn of Plenty", "Hunting Party", "Stonemason",
      // Dark Ages
      "Forager", "Graverobber", "Hermit", "Rats",
      // Empires
      "Aqueduct", "Arena", "Bandit Fort", "Basilica", "Baths", "Battlefield", "Chariot Race", "Colonnade", "Defiled Shrine", "Encampment / Plunder", "Farmers' Market", "Fountain", "Gladiator / Fortune", "Groundskeeper", "Keep", "Labyrinth", "Mountain Pass", "Museum", "Obelisk", "Orchard", "Palace", "Patrician / Emporium", "Salt the Earth", "Settlers / Bustling Village", "Tax", "Temple", "Tomb", "Tower", "Triumphal Arch", "Villa", "Wall", "Wild Hunt", "Wolf Den",
      // Hinterlands
      "Border Village", "Fool's Gold", "Trader",
      // Hinterlands (removed)
      "Embassy",
      // Intrigue
      "Bridge", "Diplomat", "Lurker", "Masquerade", "Nobles",
      // Menagerie
      "Animal Fair", "Bargain", "Camel Train", "Cavalry", "Destrier", "Falconer", "Goatherd", "Invest", "Paddock", "Seize the Day", "Sheepdog", "Sleigh", "Stockpile", "Village Green", "Way of the Worm",
      // Nocturne
      "Blessed Village", "Changeling", "Den of Sin", "Fool", "Necromancer", "Sacred Grove", "Tragic Hero",
      // Prosperity
      "Bishop", "City", "Peddler", "Vault", "Watchtower", "Worker's Village",
      // Prosperity (removed)
      "Contraband", "Trade Route",
      // Renaissance
      "Academy", "Border Guard", "Experiment", "Flag Bearer", "Hideout", "Patron", "Silk Merchant", "Swashbuckler", "Treasurer",
      // Seaside
      "Fishing Village", "Smugglers",
      // Seaside (removed)
      "Embargo",
    ]
  },
  {
    name: "Finicky Village",
    cards: [
      // Adventures
      "Artificer", "Distant Lands", "Duplicate", "Guide", "Magpie", "Messenger", "Ranger",
      // Alchemy
      "Golem",
      // Allies
      "Architects' Guild", "Band of Nomads", "Broker", "Carpenter", "Cave Dwellers", "Circle of Witches", "City-state", "Coastal Haven", "Contract", "Crafters' Guild", "Desert Guides", "Family of Inventors", "Fellowship of Scribes", "Forest Dwellers", "Gang of Pickpockets", "Highwayman", "Island Folk", "League of Bankers", "League of Shopkeepers", "Market Towns", "Modify", "Mountain Folk", "Order of Astrologers", "Order of Masons", "Peaceful Cult", "Plateau Shepherds", "Trappers' Lodge", "Woodworkers' Guild",
      // Base
      "Artisan", "Chapel", "Council Room",
      // Cornucopia & Guilds
      "Butcher", "Fairgrounds", "Horn of Plenty", "Merchant Guild", "Remake",
      // Dark Ages
      "Catacombs", "Forager", "Hermit", "Poor House", "Vagrant",
      // Empires
      "Castles", "Farmers' Market", "Forum", "Patrician / Emporium", "Sacrifice",
      // Hinterlands
      "Crossroads", "Haggler", "Margrave", "Nomads", "Souk", "Trail", "Wheelwright",
      // Intrigue
      "Bridge", "Diplomat", "Steward", "Torturer", "Upgrade", "Wishing Well",
      // Menagerie
      "Barge", "Cavalry", "Delay", "Displace", "Gamble", "March", "Scrap", "Snowy Village", "Toil", "Way of the Monkey", "Way of the Mule", "Way of the Pig", "Way of the Squirrel",
      // Nocturne
      "Cemetery", "Druid", "Exorcist", "Skulk", "Tragic Hero",
      // Plunder
      "First Mate", "Flagship", "Gondola", "Grotto", "Inspiring", "Landing Party", "Launch", "Prepare", "Reckless", "Rush", "Taskmaster",
      // Promos
      "Prince", "Summon",
      // Prosperity
      "Clerk", "Crystal Ball",
      // Renaissance
      "Acting Troupe", "Barracks", "Cargo Ship", "City Gate", "Old Witch", "Patron", "Piazza", "Scepter", "Scholar", "Sculptor",
      // Seaside
      "Monkey", "Smugglers", "Tactician", "Warehouse", "Wharf",
    ]
  },
  {
    name: "Dark Ages",
    cards: [
      // Adventures
      "Bonfire", "Page", "Peasant", "Plan", "Raze", "Trade", "Transmogrify",
      // Alchemy
      "Apprentice",
      // Base
      "Remodel",
      // Cornucopia & Guilds
      "Fairgrounds", "Horn of Plenty", "Hunting Party", "Menagerie", "Remake", "Stonemason",
      // Cornucopia (removed)
      "Tournament",
      // Dark Ages
      "Armory", "Band of Misfits", "Bandit Camp", "Catacombs", "Count", "Counterfeit", "Death Cart", "Feodum", "Forager", "Fortress", "Graverobber", "Hermit", "Hunting Grounds", "Ironmonger", "Marauder", "Market Square", "Pillage", "Procession", "Rats", "Rogue", "Squire", "Vagrant",
      // Empires
      "Advance", "Castles", "Catapult / Rocks", "Farmers' Market", "Museum", "Ritual", "Sacrifice", "Tomb", "Triumph", "Windfall",
      // Hinterlands
      "Develop", "Farmland",
      // Intrigue
      "Diplomat", "Lurker", "Mining Village", "Replace", "Upgrade",
      // Nocturne
      "Cemetery", "Changeling", "Conclave", "Cursed Village", "Devil's Workshop", "Druid", "Exorcist", "Leprechaun", "Necromancer", "Pixie", "Secret Cave", "Tormentor", "Tragic Hero", "Vampire", "Werewolf",
      // Promos
      "Dismantle",
      // Prosperity
      "Peddler", "Watchtower",
      // Renaissance
      "Acting Troupe", "Improve", "Innovation", "Priest", "Recruiter", "Research", "Sewers", "Silk Merchant", "Swashbuckler", "Treasurer",
      // Seaside
      "Salvager", "Treasure Map",
      // Seaside (removed)
      "Embargo",
    ]
  },
  {
    name: "Alt VP",
    cards: [
      // Adventures
      "Distant Lands", "Duplicate", "Inheritance", "Magpie", "Save", "Treasure Trove",
      // Alchemy
      "Vineyard",
      // Allies
      "Augurs", "Capital City", "Clashes", "Forts", "Hunter", "Odysseys",
      // Base
      "Bureaucrat", "Gardens", "Militia", "Sentry", "Witch",
      // Cornucopia & Guilds
      "Fairgrounds", "Hamlet", "Horn of Plenty", "Jester", "Joust",
      // Dark Ages
      "Count", "Feodum", "Forager", "Hunting Grounds", "Ironmonger", "Knights", "Storeroom", "Vagrant",
      // Empires
      "Annex", "Aqueduct", "Arena", "Basilica", "Baths", "Battlefield", "Castles", "City Quarter", "Colonnade", "Conquest", "Defiled Shrine", "Dominate", "Enchantress", "Forum", "Fountain", "Gladiator / Fortune", "Groundskeeper", "Keep", "Labyrinth", "Mountain Pass", "Museum", "Obelisk", "Orchard", "Palace", "Ritual", "Sacrifice", "Salt the Earth", "Tomb", "Tower", "Triumph", "Triumphal Arch", "Wedding", "Wild Hunt",
      // Hinterlands
      "Crossroads", "Farmland", "Fool's Gold", "Haggler", "Inn", "Tunnel", "Wheelwright", "Witch's Hut",
      // Intrigue
      "Baron", "Courtier", "Diplomat", "Duke", "Farm", "Ironworks", "Mill", "Nobles", "Patrol", "Replace",
      // Menagerie
      "Alliance", "Banish", "Bounty Hunter", "Coven", "Displace", "Enclave", "Falconer", "Hunting Lodge", "Sanctuary", "Transport", "Way of the Butterfly", "Way of the Worm",
      // Nocturne
      "Cemetery", "Shepherd",
      // Plunder
      "Avoid", "Fawning", "Invasion", "Maroon", "Scrounge",
      // Promos
      "Marchland",
      // Prosperity
      "Charlatan", "Hoard", "King's Court", "Vault", "Worker's Village",
      // Renaissance
      "Crop Rotation", "Fleet", "Hideout", "Road Network",
      // Rising Sun
      "Alley",
      // Seaside
      "Island", "Sea Witch", "Wharf",
    ]
  },
  {
    name: "Cornucopia & Guilds",
    cards: [
      // Adventures
      "Amulet", "Borrow", "Page", "Peasant", "Pilgrimage",
      // Alchemy
      "University",
      // Allies
      "Architects' Guild", "Augurs", "Band of Nomads", "Cave Dwellers", "Circle of Witches", "City-state", "Clashes", "Coastal Haven", "Crafters' Guild", "Desert Guides", "Family of Inventors", "Fellowship of Scribes", "Forest Dwellers", "Forts", "Gang of Pickpockets", "Hunter", "Island Folk", "League of Bankers", "League of Shopkeepers", "Market Towns", "Mountain Folk", "Odysseys", "Order of Astrologers", "Order of Masons", "Peaceful Cult", "Plateau Shepherds", "Townsfolk", "Trappers' Lodge", "Wizards", "Woodworkers' Guild",
      // Cornucopia & Guilds
      "Advisor", "Baker", "Butcher", "Candlestick Maker", "Carnival", "Fairgrounds", "Farmhands", "Farrier", "Ferryman", "Footpad", "Hamlet", "Herald", "Horn of Plenty", "Hunting Party", "Infirmary", "Jester", "Journeyman", "Joust", "Menagerie", "Merchant Guild", "Plaza", "Remake", "Shop", "Soothsayer", "Stonemason", "Young Witch",
      // Dark Ages
      "Bandit Camp", "Death Cart", "Hermit", "Knights", "Marauder",
      // Empires
      "Castles", "Encampment / Plunder", "Gladiator / Fortune", "Museum", "Orchard", "Settlers / Bustling Village",
      // Intrigue
      "Courtier",
      // Menagerie
      "Alliance", "Bargain", "Bounty Hunter", "Commerce", "Demand", "Desperation", "Enclave", "Falconer", "Hostelry", "Livery", "Paddock", "Populate", "Ride", "Scrap", "Stampede",
      // Nocturne
      "Cemetery", "Conclave", "Devil's Workshop", "Druid", "Exorcist", "Leprechaun", "Secret Cave",
      // Plunder
      "Cursed", "Fawning", "Foray", "Inspiring", "Invasion", "Looting", "Pendant", "Peril", "Pickaxe", "Prepare", "Prosper", "Sack of Loot", "Wealthy Village",
      // Promos
      "Black Market", "Marchland", "Sauna / Avanto",
      // Prosperity
      "Investment",
      // Renaissance
      "Capitalism", "Ducat", "Exploration", "Guildhall", "Hideout", "Pageant", "Patron", "Silk Merchant", "Spices", "Swashbuckler",
      // Seaside
      "Fishing Village",
    ]
  }
];

window.dominionMixes = allMixes;
