export type ManagedFeature = {
  title: string;
  body: string;
};

export type ManagedProduct = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  features: ManagedFeature[];
  coverage: { label: string; detail: string }[];
  moments: { title: string; body: string }[];
  audience: string;
  metaDescription: string;
};

export const managedProducts: ManagedProduct[] = [
  {
    slug: "monitoring",
    title: "Monitoring",
    tagline: "Always-on health checks across your stack.",
    overview:
      "ChapelCloud watches your servers, network, workstations, and critical services around the clock—so small issues get fixed before they become Sunday emergencies. Alerts are tuned for church-critical paths like streaming and check-in, not generic enterprise noise.",
    features: [
      {
        title: "24/7 health checks",
        body: "Servers, network gear, and endpoints under continuous watch—not a spreadsheet checked on Fridays.",
      },
      {
        title: "Church-critical alerts",
        body: "Streaming, check-in, giving, and Wi‑Fi priority services get thresholds that match Sunday reality.",
      },
      {
        title: "Leadership-ready visibility",
        body: "Uptime and performance summaries elders and ops leads can understand without a NOC glossary.",
      },
      {
        title: "Calendar-aware patching",
        body: "Proactive patch windows planned around Advent, Easter, camps, and capital campaigns—not random Tuesdays.",
      },
      {
        title: "Human escalation",
        body: "When something’s wrong, a person picks it up—not a ticket abyss that replies in three days.",
      },
      {
        title: "Stacked coverage",
        body: "Pairs with Help Desk and Cybersecurity so monitoring findings turn into fixes and hardening, not just charts.",
      },
    ],
    coverage: [
      {
        label: "Infrastructure",
        detail: "Servers, switches, firewalls, access points, and core network services.",
      },
      {
        label: "Endpoints",
        detail: "Staff workstations and key production machines with health and patch visibility.",
      },
      {
        label: "Sunday paths",
        detail: "Livestream encode, check-in, and other services that can’t wait until Monday.",
      },
      {
        label: "Cloud & SaaS signals",
        detail: "Where available—identity, email, and platform health that affects staff day-to-day.",
      },
    ],
    moments: [
      {
        title: "Friday night stream encoder warning",
        body: "We catch a failing disk or saturated uplink before Saturday rehearsal—not during the sermon bumper.",
      },
      {
        title: "Guest Wi‑Fi collapse at 10:05",
        body: "Monitoring surfaces AP overload; Help Desk and networking playbooks kick in while service is still running.",
      },
      {
        title: "Quiet midweek patch window",
        body: "Firmware and OS updates land when campus is empty, with verification before the next weekend.",
      },
    ],
    audience:
      "For churches that can’t afford a surprise outage on Sunday morning—and don’t have a full-time IT staff sitting on dashboards.",
    metaDescription:
      "ChapelCloud Monitoring — always-on health checks for church servers, networks, and critical Sunday services.",
  },
  {
    slug: "help-desk",
    title: "Help Desk",
    tagline: "Friendly support for staff and volunteers.",
    overview:
      "A real support line for pastors, admins, and volunteers—password resets, printer chaos, and “why won’t this connect?” answered without shame or jargon. Your people stay focused on ministry; we absorb the interrupt-driven tech work.",
    features: [
      {
        title: "Ticketed support",
        body: "Clear intake and response expectations so staff know when help is coming—not radio silence.",
      },
      {
        title: "Staff & volunteer friendly",
        body: "Help that assumes ministry context—not a tone that makes volunteers afraid to ask again.",
      },
      {
        title: "Remote assistance",
        body: "Common workstation and software issues fixed without waiting for someone to “stop by after small group.”",
      },
      {
        title: "Onboarding help",
        body: "New team members get accounts, MFA, and tools working on day one instead of week three.",
      },
      {
        title: "Church-specific knowledge",
        body: "Snippets tailored to your stack—ChMS, giving, AV quirks—so answers aren’t generic scripts.",
      },
      {
        title: "Smart escalation",
        body: "When it’s deeper than a ticket, Monitoring and Cybersecurity pick up without the staff re-explaining everything.",
      },
    ],
    coverage: [
      {
        label: "Identity & access",
        detail: "Passwords, MFA, mailbox access, and “I can’t log into…” moments.",
      },
      {
        label: "Workstations & printers",
        detail: "The daily friction that otherwise lands on a pastor or volunteer tech lead.",
      },
      {
        label: "Church platforms",
        detail: "Guidance on ChapelCloud software and common third-party tools your staff already use.",
      },
      {
        label: "Volunteer-safe support",
        detail: "Scoped help for trusted volunteers without handing them admin keys to the kingdom.",
      },
    ],
    moments: [
      {
        title: "Pastor locked out before a funeral",
        body: "Identity recovery with urgency and dignity—so pastoral care isn’t blocked by a password prompt.",
      },
      {
        title: "New hire Monday",
        body: "Laptop, email, ChMS, and Giving access ready—Help Desk walks them through without a scavenger hunt.",
      },
      {
        title: "Volunteer can’t open the schedule",
        body: "Friendly remote help that doesn’t require the volunteer coordinator to become IT support.",
      },
    ],
    audience:
      "Ideal for churches whose “IT person” is a volunteer, a pastor’s side job, or a staffer already overloaded with ministry work.",
    metaDescription:
      "ChapelCloud Help Desk — friendly IT support for church staff and volunteers when something breaks.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Hardening, training, and incident readiness.",
    overview:
      "Protect donor data, pastoral notes, and campus systems with practical security—hardening, awareness training, and a plan for when something looks wrong. Built for ministry reality, not enterprise theater that your team will ignore.",
    features: [
      {
        title: "Baseline hardening",
        body: "Workstations, email, and cloud accounts tightened to a sensible standard churches can maintain.",
      },
      {
        title: "Phishing awareness",
        body: "Training for staff and key volunteers who are most likely to be targeted with fake “pastor needs Gift Cards” mail.",
      },
      {
        title: "Access reviews",
        body: "MFA and periodic reviews for sensitive systems—finance, ChMS, and admin email especially.",
      },
      {
        title: "Endpoint protection",
        body: "Malware defense and response playbooks that don’t assume you have a security operations center.",
      },
      {
        title: "Incident readiness",
        body: "Who to call, what to unplug, and what to say—written before panic sets in.",
      },
      {
        title: "Defense in depth",
        body: "Aligned with Monitoring and Backups so detection, protection, and recovery reinforce each other.",
      },
    ],
    coverage: [
      {
        label: "People risk",
        detail: "Awareness training and habits that catch the scams tools alone will miss.",
      },
      {
        label: "Account security",
        detail: "MFA, least-privilege access, and cleanup when staff or volunteers roll off.",
      },
      {
        label: "Device posture",
        detail: "Hardening and protection on the machines that hold pastoral and donor data.",
      },
      {
        label: "Incident path",
        detail: "A rehearsed first-hour plan—not a binder nobody has opened since 2019.",
      },
    ],
    moments: [
      {
        title: "Suspicious wire request email",
        body: "Staff recognize the pattern from training and escalate instead of rushing a “urgent pastor” payment.",
      },
      {
        title: "Former volunteer still has access",
        body: "Access reviews catch stale accounts before they become a quiet liability.",
      },
      {
        title: "Ransomware scare on a finance laptop",
        body: "Endpoint playbooks and Backups coverage turn a panic into a contained restore—not a data loss crisis.",
      },
    ],
    audience:
      "Built for churches that hold sensitive people data and want security that fits ministry reality—not enterprise theater.",
    metaDescription:
      "ChapelCloud Cybersecurity — hardening, training, and incident readiness for churches and donor data.",
  },
  {
    slug: "backups",
    title: "Backups",
    tagline: "Verified recovery for data that matters.",
    overview:
      "Automated backups with restore tests you can trust—so membership records, giving history, and sermon archives survive ransomware, accidents, and failed drives. “We have backups” means nothing until someone has restored from them on purpose.",
    features: [
      {
        title: "Automated coverage",
        body: "Servers, workstations, and key SaaS data on schedules that don’t depend on someone remembering Friday.",
      },
      {
        title: "Offsite & retention",
        body: "Copies and retention policies you can explain to elders in plain language.",
      },
      {
        title: "Scheduled restore tests",
        body: "We prove recovery works—not hope—on a cadence leadership can see.",
      },
      {
        title: "Ministry-priority data",
        body: "ChMS, giving, and media archives get priority so the most painful losses are the best protected.",
      },
      {
        title: "Recovery time goals",
        body: "Clear expectations for Sunday-critical systems versus archival restores that can wait a day.",
      },
      {
        title: "Monitored failures",
        body: "Works with Monitoring so a silent backup failure never sits unnoticed until you need it.",
      },
    ],
    coverage: [
      {
        label: "People & giving data",
        detail: "Membership, pastoral care exports, and giving history that would stall ministry if lost.",
      },
      {
        label: "Staff workstations",
        detail: "Endpoints that hold sermons, budgets, and working files nobody else has copied.",
      },
      {
        label: "Servers & shared storage",
        detail: "Campus file shares, media archives, and line-of-business systems.",
      },
      {
        label: "Verified restores",
        detail: "Periodic test restores with notes your board can understand—not vibes.",
      },
    ],
    moments: [
      {
        title: "Finance laptop dies Thursday",
        body: "Restore the working set before month-end close—without rebuilding from email attachments.",
      },
      {
        title: "Ransomware on a shared drive",
        body: "Clean recovery from offline copies with a known-good restore point, not ransom negotiation.",
      },
      {
        title: "Accidental ChMS purge",
        body: "Recover membership and giving history from a tested backup instead of reconstructing from paper.",
      },
    ],
    audience:
      "For churches that know a lost database or wiped laptop would stall ministry—and want recovery that’s been proven, not assumed.",
    metaDescription:
      "ChapelCloud Backups — verified backup and recovery for church membership, giving, and media data.",
  },
];

export function getManagedProduct(slug: string): ManagedProduct | undefined {
  return managedProducts.find((p) => p.slug === slug);
}

export function getRelatedManaged(slug: string): ManagedProduct[] {
  return managedProducts.filter((p) => p.slug !== slug);
}
