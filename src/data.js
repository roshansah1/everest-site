export const site = {
  name: "Vision India Roleplay",
  season: "Season 1",
  discord: "https://discord.gg/everest",
  connect: "fivem://connect/everest",
  connectCode: "everest",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
}

export const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/rules", label: "Rules" },
  { to: "/team", label: "Team" },
  { to: "/apply", label: "Applications" },
  { to: "/store", label: "Store" },
  { to: "/live", label: "Watch Live" },
  { to: "/guide", label: "Guide", tone: "lime" },
]

export const trailers = [
  {
    id: "night",
    title: "Night drive",
    kicker: "City intro",
    youtubeId: "",
    tone: "wide",
  },
  {
    id: "crew",
    title: "Crew stories",
    kicker: "How we play",
    youtubeId: "",
    tone: "glass",
  },
  {
    id: "launch",
    title: "Launch reel",
    kicker: "Opening week",
    youtubeId: "",
    tone: "set",
  },
]

export const scenes = [
  { title: "Convoy night", tone: "a" },
  { title: "Harbor meet", tone: "b" },
  { title: "Block party", tone: "c" },
  { title: "Red district", tone: "d" },
  { title: "Rooftop break", tone: "e" },
  { title: "Garage crew", tone: "f" },
  { title: "Skyline watch", tone: "g" },
]

export const quickLinks = [
  {
    title: "Store",
    text: "Priority queue, supporter perks, and city cosmetics.",
    to: "/store",
    icon: "bag",
  },
  {
    title: "Brand kit",
    text: "Explore the logo, colors, and look of Vision India Roleplay.",
    to: "/guide#brand",
    icon: "mark",
  },
  {
    title: "Applications",
    text: "Send a character pitch and wait for a whitelist review.",
    to: "/apply",
    icon: "file",
  },
  {
    title: "Discord",
    text: "Updates, tickets, and the place crews actually talk.",
    href: site.discord,
    icon: "discord",
  },
]

export const team = [
  { alias: "Summit", role: "Owner", hue: 200 },
  { alias: "Ridge", role: "Management", hue: 168 },
  { alias: "Alpine", role: "Head admin", hue: 262 },
  { alias: "Crest", role: "Developer", hue: 28 },
  { alias: "Vale", role: "Events", hue: 330 },
  { alias: "Harbor", role: "Support", hue: 210 },
  { alias: "Drift", role: "Media", hue: 12 },
  { alias: "Lantern", role: "Whitelist", hue: 46 },
]

export const streamers = []

export const products = [
  {
    name: "Priority queue",
    text: "Skip the public line when the city is full.",
    tag: "Access",
  },
  {
    name: "Supporter token",
    text: "A monthly cosmetic drop and a supporter role.",
    tag: "Cosmetic",
  },
  {
    name: "City plate",
    text: "A custom plate, reviewed by staff before it goes live.",
    tag: "Vehicle",
  },
]

export const rules = [
  {
    id: "general",
    title: "General",
    items: [
      "Check Discord before you play. A rule posted there still counts if you missed it.",
      "Use a clear microphone. If people cannot understand you, step out of the scene until it is fixed.",
      "Sexual roleplay, including suggestive scenes, is not part of this city.",
      "Do not roleplay real tragedies, terrorism, or self-harm.",
      "Stay in character unless everyone in the scene agrees to pause.",
      "Do not coach, threaten, or pile on someone to break a rule with you.",
    ],
  },
  {
    id: "character",
    title: "Character",
    items: [
      "Your character needs a name, a job or hustle, and a reason to be in the city.",
      "One active character at a time unless staff approve a second.",
      "Do not reuse a banned character under a new name.",
      "Power, money, and reputation have to be earned in scenes, not written into a backstory.",
    ],
  },
  {
    id: "scenes",
    title: "Scenes",
    items: [
      "Ask before you enter someone else's scene. A look from across the street is not an invite.",
      "Value the story over the win. Leaving because you might lose is not a scene.",
      "New life starts when your character is down and a medic, or the scene, says it is over.",
      "What you learn outside the city stays outside the city. No stream-sniping and no Discord callouts mid-scene.",
    ],
  },
  {
    id: "combat",
    title: "Combat",
    items: [
      "Initiation comes before gunfire. Robberies, hits, and turf need a clear demand and a chance to answer.",
      "Random killing, spawn camping, and shooting from a vehicle with no scene are not allowed.",
      "Fear is real. A gun in your face is not a debate.",
      "Report combat bugs in a ticket. Do not keep an item, weapon, or advantage you know is broken.",
    ],
  },
  {
    id: "vehicles",
    title: "Vehicles",
    items: [
      "Drive like the street has consequences. Ramming to win a chase with no scene is fail driving.",
      "Emergency vehicles stay with on-duty characters.",
      "Stolen cars are for the scene, not a private garage.",
      "Custom plates and liveries need the matching store item or a staff approval.",
    ],
  },
  {
    id: "staff",
    title: "Staff",
    items: [
      "Staff calls happen in a ticket, not in the middle of a scene.",
      "Clipping a report helps. Insults in the ticket do not.",
      "A staff member in admin duty is not your character's friend, boss, or enemy.",
      "Ban appeals go through the form. Arguing in general chat will close the appeal.",
    ],
  },
]

export const guideSteps = [
  {
    title: "Install FiveM",
    text: "Use a legal GTA V copy, install FiveM, and let it finish the first launch.",
  },
  {
    title: "Join Discord",
    text: "Read the announcements channel and pick up the whitelist info before you apply.",
  },
  {
    title: "Send an application",
    text: "Pitch one character. Staff read for effort, not for a perfect essay.",
  },
  {
    title: "Connect",
    text: "After you are accepted, use the Connect button or the join code in the nav.",
  },
]
