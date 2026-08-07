export type SoftwareFeature = {
  title: string;
  body: string;
};

export type SoftwareProduct = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  features: SoftwareFeature[];
  workflows: { title: string; body: string }[];
  audience: string;
  metaDescription: string;
};

export const softwareProducts: SoftwareProduct[] = [
  {
    slug: "church-management",
    title: "Church Management",
    tagline: "People, membership, and pastoral care in one place.",
    overview:
      "ChapelCloud ChMS keeps your congregation’s records clear and connected—so staff and pastors can find the right person, note, or group without hunting across spreadsheets. Households stay linked, pastoral care stays private, and check-in feeds the same source of truth your communications and volunteer teams already use.",
    features: [
      {
        title: "Households & membership",
        body: "Profiles that mirror how people actually relate—households, membership status, and history that doesn’t fragment when someone remarries or moves campuses.",
      },
      {
        title: "Pastoral care notes",
        body: "Permissioned notes for pastors and elders so care stays continuous without leaking into volunteer views.",
      },
      {
        title: "Groups & attendance",
        body: "Classes, small groups, and ministry teams with attendance that rolls up into meaningful pastoral and leadership reports.",
      },
      {
        title: "Check-in & visitors",
        body: "Weekend check-in that captures visitors cleanly and kicks off follow-up without a clipboard pile at the welcome desk.",
      },
      {
        title: "Role-based access",
        body: "Staff, elders, and volunteers see only what they need—sensitive fields stay locked down.",
      },
      {
        title: "Reports & exports",
        body: "Leadership dashboards and clean exports for compliance, annual reports, and board meetings.",
      },
    ],
    workflows: [
      {
        title: "Sunday visitor becomes a known name",
        body: "Check-in captures the household, Communications can send a welcome sequence, and pastoral care sees the visit without a separate spreadsheet.",
      },
      {
        title: "Small-group season kickoff",
        body: "Leaders pull rosters from the same people database Giving and Volunteer already trust—no re-keying emails before launch week.",
      },
      {
        title: "Membership milestone reviews",
        body: "Elders review status, care notes, and group involvement in one place before membership classes or annual reviews.",
      },
    ],
    audience:
      "Ideal for growing churches that have outgrown spreadsheets and need one trusted source of truth for people and pastoral care.",
    metaDescription:
      "ChapelCloud Church Management — membership, pastoral care, groups, and check-in for growing congregations.",
  },
  {
    slug: "giving",
    title: "Giving",
    tagline: "Online & recurring gifts with clear reporting.",
    overview:
      "Make generosity simple for your congregation and transparent for your finance team. Online giving, recurring gifts, fund designations, and donor statements live in one flow—so Sunday generosity doesn’t become Monday spreadsheet archaeology for the treasurer.",
    features: [
      {
        title: "One-time & recurring gifts",
        body: "Donors set it once and give with confidence—web and mobile paths that feel familiar, not fintech-obscure.",
      },
      {
        title: "Funds & campaigns",
        body: "General fund, building, missions, and seasonal campaigns stay separated without confusing the giver at checkout.",
      },
      {
        title: "Donor statements",
        body: "Year-end receipts and on-demand statements that match what finance expects—and what donors need for taxes.",
      },
      {
        title: "Finance dashboards",
        body: "Treasurers and committees see trends, fund balances, and anomalies without waiting on a custom report request.",
      },
      {
        title: "Mobile-friendly giving",
        body: "Works for Sunday prompts, midweek appeals, and the person who finally decides to give from the parking lot.",
      },
      {
        title: "Household sync",
        body: "Gifts attach to Church Management households so pastoral care and finance aren’t maintaining two donor lists.",
      },
    ],
    workflows: [
      {
        title: "Building campaign weekend",
        body: "Promote a designated fund, capture pledges and gifts, and show leadership progress without a parallel tracker.",
      },
      {
        title: "Month-end reconciliation",
        body: "Finance pulls clear ledgers and fund splits that match bank deposits—fewer “where did this $50 go?” threads.",
      },
      {
        title: "Year-end gratitude",
        body: "Statements go out cleanly; pastors can thank major givers from the same household records they already use for care.",
      },
    ],
    audience:
      "Built for churches that want reliable digital giving without confusing donors—or burying the finance team in manual reconciliation.",
    metaDescription:
      "ChapelCloud Giving — online and recurring gifts, fund tracking, and clear reporting for church finance teams.",
  },
  {
    slug: "communications",
    title: "Communications",
    tagline: "Email, text, and announcements that actually land.",
    overview:
      "Reach the right people with the right message—Sunday reminders, weather cancellations, campus updates, or a pastoral note to a specific group. Segments come from your Church Management data, so you’re not maintaining a ghost list in a separate email tool.",
    features: [
      {
        title: "Email & SMS campaigns",
        body: "One composer for digests and urgent texts—staff don’t learn two products for two channels.",
      },
      {
        title: "Templates that stay on-brand",
        body: "Weekly digests, event invites, and alert templates that keep tone and branding consistent across campuses.",
      },
      {
        title: "Audience targeting",
        body: "Pull segments from membership, groups, campuses, and volunteer roles—no CSV round-trips.",
      },
      {
        title: "Delivery insights",
        body: "See what opened, bounced, or got ignored so next week’s message gets sharper.",
      },
      {
        title: "Ministry lead workflows",
        body: "Campus and ministry leads send to their people without inheriting the whole church list.",
      },
      {
        title: "Urgent alert paths",
        body: "Weather, facility, or safety messages that prioritize speed without reinventing your normal digest process.",
      },
    ],
    workflows: [
      {
        title: "Snow-day cancellation",
        body: "Text the right campuses and email the broader list from one send—volunteers already scheduled get the update too.",
      },
      {
        title: "Weekly church digest",
        body: "Comms pulls group and event audiences from ChMS, drops in the template, and ships before Thursday noon.",
      },
      {
        title: "Pastoral care follow-up",
        body: "A care team messages a filtered set of households without exporting contacts into a personal Gmail account.",
      },
    ],
    audience:
      "For communications teams and pastors who need dependable outreach without juggling three separate messaging tools.",
    metaDescription:
      "ChapelCloud Communications — email, text, and announcements targeted to the right groups in your church.",
  },
  {
    slug: "volunteer",
    title: "Volunteer",
    tagline: "Scheduling, check-in, and team coordination.",
    overview:
      "Fill serving teams with less last-minute scrambling. Schedule roles, confirm volunteers, remind them before Sunday, and check teams in on serving mornings—all tied to the same people records as Church Management and Communications.",
    features: [
      {
        title: "Role-based schedules",
        body: "Worship, kids, hospitality, production—roles and service times that match how your campuses actually run.",
      },
      {
        title: "Invites & confirmations",
        body: "Volunteers accept, decline, or swap with a trail ministry leads can see—no mystery gaps at 7 a.m.",
      },
      {
        title: "Reminders that stick",
        body: "Automated nudges before serving weekends so “I forgot I was on” becomes rare.",
      },
      {
        title: "Serving-morning check-in",
        body: "Team leads know who’s present, who’s late, and who needs a last-minute fill.",
      },
      {
        title: "Skills & availability",
        body: "Preferences and qualifications that prevent scheduling someone into a role they can’t (or shouldn’t) fill.",
      },
      {
        title: "Ministry lead views",
        body: "Filter by campus or service time so each lead owns their roster without drowning in the whole church calendar.",
      },
    ],
    workflows: [
      {
        title: "Building next month’s kids roster",
        body: "Leads schedule by room and service, send invites, and watch confirmations land before the calendar goes public.",
      },
      {
        title: "Last-minute worship gap",
        body: "See who’s qualified and available, message a short list, and update the schedule without a group-text scramble.",
      },
      {
        title: "Volunteer appreciation Sunday",
        body: "Pull serving history from the same system to thank people accurately—not from a sticky note on the production desk.",
      },
    ],
    audience:
      "Perfect for volunteer coordinators and ministry leads who need schedules that stick and teams that show up prepared.",
    metaDescription:
      "ChapelCloud Volunteer — scheduling, check-in, and team coordination for church serving teams.",
  },
];

export function getSoftwareProduct(slug: string): SoftwareProduct | undefined {
  return softwareProducts.find((p) => p.slug === slug);
}

export function getRelatedSoftware(slug: string): SoftwareProduct[] {
  return softwareProducts.filter((p) => p.slug !== slug);
}
