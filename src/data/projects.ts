export interface Project {
  title: string;
  description: string;
  tags: string[];
  siteUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Dragon Traveler Wiki',
    description:
      'A community-driven English wiki for the mobile game Dragon Traveler, with databases for characters, gear, and more, a tier list and team builder, fuzzy search, and Discord/GitHub sign-in for publishing and voting on community content.',
    tags: ['React', 'TypeScript', 'Mantine', 'Cloudflare Workers', 'D1'],
    siteUrl: 'https://dtwiki.org',
    codeUrl: 'https://github.com/dragon-traveler-wiki/dragon-traveler-wiki',
  },
  {
    title: 'WikiNexus',
    description:
      'A ground-up successor to Dragon Traveler Wiki that supports multiple games. Each game is its own content package validated against shared schemas, so launching a new wiki means adding data, not forking the app.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zod', 'Turborepo'],
  },
  {
    title: 'Pokémon GO Event Calendar',
    description:
      'An event calendar for Pokémon GO with month and list views, category filtering, featured Pokémon sprites, saved and custom events, and light and dark themes.',
    tags: ['React', 'TypeScript', 'Material UI', 'FullCalendar'],
    siteUrl: 'https://pogo-calendar.github.io/pogo-calendar/',
    codeUrl: 'https://github.com/pogo-calendar/pogo-calendar',
  },
  {
    title: 'Leak Duck',
    description:
      'An hourly scraper that turns Pokémon GO raid bosses, events, field research, Team GO Rocket lineups, and egg pools into a free JSON API. It powers the event calendar.',
    tags: ['Python', 'Web Scraping', 'GitHub Actions'],
    codeUrl: 'https://github.com/pogo-calendar/leak-duck',
  },
  {
    title: 'ROM Wiki',
    description:
      'Extracts structured data from Generation IV and V Pokémon games and ROM hacks, compares each hack against its base game, and publishes normalized datasets and searchable documentation wikis.',
    tags: ['Python', 'Reverse Engineering', 'MkDocs'],
    siteUrl: 'https://zhenga8533.github.io/rom-wiki/',
  },
  {
    title: 'Farm Merge Valet',
    description:
      'A desktop app that automates Farm Merge Valley through the Chrome DevTools Protocol, reading live game state to handle harvesting, orders, and merge planning without taking over the mouse or keyboard.',
    tags: ['Python', 'Chrome DevTools Protocol', 'Desktop'],
    codeUrl: 'https://github.com/zhenga8533/farm-merge-valet',
  },
  {
    title: 'VolcAddons',
    description:
      'A Hypixel SkyBlock mod packed with quality-of-life features, backed by a companion website, a Discord community, and an API that tracks auction house and bazaar prices.',
    tags: ['JavaScript', 'Java', 'Python'],
    siteUrl: 'https://www.volca.dev',
    codeUrl: 'https://github.com/volcmc/VolcAddons',
  },
  {
    title: 'Manga Translator',
    description:
      'Detects text in manga pages with a YOLO model, reads it with OCR, and machine-translates it, available as a terminal tool and a web app backed by a Python server.',
    tags: ['Python', 'Computer Vision', 'OCR', 'React'],
  },
  {
    title: 'VS Code Arborist',
    description:
      'A VS Code extension that generates interactive directory trees with filtering, sorting, branch pruning, auto-refresh on file changes, and export.',
    tags: ['TypeScript', 'VS Code API'],
  },
  {
    title: 'PokéDB',
    description:
      'Rebuilds generation-accurate Pokémon data (types, abilities, stats, moves, and evolutions) from PokéAPI, validates it, and publishes JSON to a data branch every week.',
    tags: ['Python', 'Data Pipelines', 'GitHub Actions'],
    codeUrl: 'https://github.com/zhenga8533/pokedb',
  },
];
