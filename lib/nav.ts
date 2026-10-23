export type NavLink = {
  label: string;
  href: string;
  description: string;
};

export type NavGroup = {
  id: string;
  label: string;
  href: string;
  blurb: string;
  links: NavLink[];
};

export const navGroups: NavGroup[] = [
  {
    id: "software",
    label: "Software",
    href: "/#software",
    blurb: "Platforms that keep ministry running smoothly.",
    links: [
      {
        label: "Church Management",
        href: "/software/church-management",
        description: "People, membership, and pastoral care in one place.",
      },
      {
        label: "Giving",
        href: "/software/giving",
        description: "Online & recurring gifts with clear reporting.",
      },
      {
        label: "Communications",
        href: "/software/communications",
        description: "Email, text, and announcements that actually land.",
      },
      {
        label: "Volunteer",
        href: "/software/volunteer",
        description: "Scheduling, check-in, and team coordination.",
      },
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    href: "/#hardware",
    blurb: "Reliable kit for the sanctuary, office, and campus.",
    links: [
      {
        label: "Sanctuary AV",
        href: "/hardware/sanctuary-av",
        description: "Audio, cameras, and streaming built for worship.",
      },
      {
        label: "Networking",
        href: "/hardware/networking",
        description: "Wi‑Fi and wired infrastructure that scales.",
      },
      {
        label: "Workstations",
        href: "/hardware/workstations",
        description: "Staff machines configured for church workflows.",
      },
      {
        label: "Displays",
        href: "/hardware/displays",
        description: "Lobby, classroom, and stage screens that last.",
      },
    ],
  },
  {
    id: "managed",
    label: "Managed",
    href: "/managed",
    blurb: "Ongoing stewardship so your team can focus on people.",
    links: [
      {
        label: "Care overview",
        href: "/managed",
        description: "Remote network, security, and training care.",
      },
      {
        label: "Monitoring",
        href: "/managed/monitoring",
        description: "Always-on health checks across your stack.",
      },
      {
        label: "Help Desk",
        href: "/managed/help-desk",
        description: "Friendly support for staff and volunteers.",
      },
      {
        label: "Cybersecurity",
        href: "/managed/cybersecurity",
        description: "Hardening, training, and incident readiness.",
      },
      {
        label: "Backups",
        href: "/managed/backups",
        description: "Verified recovery for data that matters.",
      },
    ],
  },
];
