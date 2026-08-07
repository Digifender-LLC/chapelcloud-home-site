export type HardwareFeature = {
  title: string;
  body: string;
};

export type HardwareProduct = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  features: HardwareFeature[];
  deliverables: { step: string; title: string; body: string }[];
  spaces: string[];
  audience: string;
  metaDescription: string;
};

export const hardwareProducts: HardwareProduct[] = [
  {
    slug: "sanctuary-av",
    title: "Sanctuary AV",
    tagline: "Audio, cameras, and streaming built for worship.",
    overview:
      "ChapelCloud designs and installs sanctuary audio, cameras, and streaming systems that stay clear on Sunday—and simple enough for volunteer teams to run week after week. We tune for your room, not a showroom demo, and leave behind documentation your next tech director can actually use.",
    features: [
      {
        title: "Worship-tuned audio",
        body: "Speaker and mixer layouts planned for speech intelligibility and music—not nightclub SPLs that fight the sermon.",
      },
      {
        title: "Camera packages",
        body: "IMAG and multi-camera streaming setups sized for your sanctuary geometry and volunteer skill level.",
      },
      {
        title: "Livestream paths",
        body: "Encoding, networking priority, and backup routes so a dropped stream doesn’t become the sermon’s subplot.",
      },
      {
        title: "Stage monitoring",
        body: "Monitors and talkback that keep worship teams tight without flooding the front rows.",
      },
      {
        title: "Volunteer training",
        body: "Service-flow training so the weekend team can run confidently when the “AV person” is on vacation.",
      },
      {
        title: "Managed care option",
        body: "Ongoing monitoring and support through ChapelCloud Managed when you want eyes on the stack year-round.",
      },
    ],
    deliverables: [
      {
        step: "01",
        title: "Room survey",
        body: "We walk the sanctuary, measure coverage needs, and map cable paths before anyone orders gear.",
      },
      {
        step: "02",
        title: "Design & procure",
        body: "A clear bill of materials and signal flow—approved with your team before install week.",
      },
      {
        step: "03",
        title: "Install & train",
        body: "Install, commission, and train volunteers on the actual Sunday workflow, not a theoretical diagram.",
      },
    ],
    spaces: [
      "Main sanctuary / worship center",
      "Overflow and chapel rooms",
      "Control booth and production suite",
      "Streaming encode and network closet",
    ],
    audience:
      "For churches upgrading aging sanctuary sound, adding cameras, or stabilizing a livestream that keeps dropping mid-sermon.",
    metaDescription:
      "ChapelCloud Sanctuary AV — audio, cameras, and streaming systems designed for worship spaces and volunteer teams.",
  },
  {
    slug: "networking",
    title: "Networking",
    tagline: "Wi‑Fi and wired infrastructure that scales.",
    overview:
      "Campus networks that handle check-in, streaming, guest Wi‑Fi, and staff offices without fighting for bandwidth during peak Sunday traffic. We segment traffic, document the fabric, and leave you with a network that still makes sense when the next admin inherits it.",
    features: [
      {
        title: "Site survey & planning",
        body: "Coverage mapping across multi-building campuses—including the weird drywall and brick surprises churches always have.",
      },
      {
        title: "Segmented networks",
        body: "Guest, staff, and AV traffic separated so a lobby full of phones doesn’t starve the livestream.",
      },
      {
        title: "Sunday-peak capacity",
        body: "Access points and switching sized for the hour everyone arrives at once—not average Tuesday load.",
      },
      {
        title: "Remote management",
        body: "Secure admin access and firmware hygiene without leaving consumer gear on default passwords.",
      },
      {
        title: "Bandwidth priority",
        body: "Policy that protects streaming, check-in, and staff tools when the campus fills up.",
      },
      {
        title: "Handoff documentation",
        body: "Diagrams and credentials your team can actually pass to the next person—not tribal knowledge in someone’s head.",
      },
    ],
    deliverables: [
      {
        step: "01",
        title: "Survey & heatmaps",
        body: "Walk the campus, measure dead zones, and identify collision points between AV and office traffic.",
      },
      {
        step: "02",
        title: "Architecture",
        body: "Switching, VLANs, SSIDs, and firewall rules designed for church reality—not a generic SMB template.",
      },
      {
        step: "03",
        title: "Cutover & tune",
        body: "Install, migrate, and tune during low-impact windows; verify Sunday load before we call it done.",
      },
    ],
    spaces: [
      "Sanctuary and production network",
      "Lobby and guest Wi‑Fi",
      "Staff offices and meeting rooms",
      "Kids/student wing coverage",
    ],
    audience:
      "Ideal for campuses where guest Wi‑Fi fails, offices share one overloaded link, or AV and office traffic collide every weekend.",
    metaDescription:
      "ChapelCloud Networking — campus Wi‑Fi and wired infrastructure built for Sunday peaks and growing campuses.",
  },
  {
    slug: "workstations",
    title: "Workstations",
    tagline: "Staff machines configured for church workflows.",
    overview:
      "Laptops and desktops provisioned for pastoral, admin, and media roles—hardened, backed up, and ready for ChapelCloud software from day one. Stop buying one-off machines that drift into insecurity and “it works on my laptop” chaos.",
    features: [
      {
        title: "Role-based profiles",
        body: "Pastors, admins, and media editors get machines built for their tools—not a generic retail SKU.",
      },
      {
        title: "Standard images",
        body: "ChapelCloud apps, browsers, and security baselines baked in before the box hits the desk.",
      },
      {
        title: "Asset lifecycle",
        body: "Tagging and replacement planning so you’re not surprised by five-year-old machines dying mid-budget season.",
      },
      {
        title: "Peripheral kits",
        body: "Office, reception, and production kits that match the role—monitors, docks, headsets, card readers.",
      },
      {
        title: "Fast onboarding",
        body: "New hires productive in hours with accounts, MFA, and apps already waiting—not a scavenger hunt.",
      },
      {
        title: "Managed option",
        body: "Optional monitoring and help desk so day-two issues don’t land on a volunteer’s personal phone.",
      },
    ],
    deliverables: [
      {
        step: "01",
        title: "Role inventory",
        body: "Map who needs what—pastoral care privacy, finance access, media horsepower—before ordering.",
      },
      {
        step: "02",
        title: "Image & ship",
        body: "Build standard images, procure hardware, and stage machines with your identity and security stack.",
      },
      {
        step: "03",
        title: "Desk-side handoff",
        body: "Deploy, verify backups and MFA, and walk staff through the first-day workflow.",
      },
    ],
    spaces: [
      "Pastoral and counseling offices",
      "Admin and finance desks",
      "Media / production edit seats",
      "Reception and check-in stations",
    ],
    audience:
      "Built for churches tired of one-off laptop purchases, uneven security, and “it works on my machine” friction across the staff team.",
    metaDescription:
      "ChapelCloud Workstations — staff computers configured, secured, and supported for real church workflows.",
  },
  {
    slug: "displays",
    title: "Displays",
    tagline: "Lobby, classroom, and stage screens that last.",
    overview:
      "Commercial-grade screens and mounting for lobbies, kids spaces, classrooms, and stages—planned for sightlines, brightness, and long service life. Consumer TVs look fine in the store; they burn out and fail mid-service in church duty cycles.",
    features: [
      {
        title: "Lobby & wayfinding",
        body: "Screens and simple content updates so guests find rooms, events, and campuses without a scavenger hunt.",
      },
      {
        title: "Classroom & kids",
        body: "Sized and mounted for the room—safe cabling, appropriate brightness, durable enough for weekly use.",
      },
      {
        title: "Stage & IMAG",
        body: "Confidence monitors and IMAG displays placed for pastors and musicians, not just for the photo op.",
      },
      {
        title: "Mounting & power",
        body: "Structural mounts, clean cabling, and power that won’t brown out when everything turns on at once.",
      },
      {
        title: "Content workflows",
        body: "Update paths that don’t require a full AV degree—or a single volunteer who “knows the password.”",
      },
      {
        title: "Service & refresh",
        body: "Paths for panels aging out of warranty so you’re not improvising with a living-room TV on a cart.",
      },
    ],
    deliverables: [
      {
        step: "01",
        title: "Sightline walk",
        body: "Mark viewing angles, ambient light, and mount points before anyone picks a panel size off a spreadsheet.",
      },
      {
        step: "02",
        title: "Specify & install",
        body: "Commercial panels, mounts, and signal paths installed to last through years of Sunday cycles.",
      },
      {
        step: "03",
        title: "Content handoff",
        body: "Show your team how to update lobby loops and classroom content without calling a contractor every week.",
      },
    ],
    spaces: [
      "Main lobby and entrances",
      "Kids and classroom wings",
      "Stage and confidence monitors",
      "Overflow and multipurpose rooms",
    ],
    audience:
      "For churches refreshing lobby TVs, equipping classrooms, or adding stage screens without buying consumer panels that burn out.",
    metaDescription:
      "ChapelCloud Displays — durable lobby, classroom, and stage screens with proper mounting and content workflows.",
  },
];

export function getHardwareProduct(slug: string): HardwareProduct | undefined {
  return hardwareProducts.find((p) => p.slug === slug);
}

export function getRelatedHardware(slug: string): HardwareProduct[] {
  return hardwareProducts.filter((p) => p.slug !== slug);
}
