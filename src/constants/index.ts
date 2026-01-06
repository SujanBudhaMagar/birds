import { SidebarProps, OptionValues } from "@/types";

export const SidebarData: SidebarProps[] = [
  {
    icon: "/admin/adminIcon1.png",
    title: "Overview",
    link: "/dashboard/overview",
    allowedRoles: ["admin"],
  },
  {
    icon: "/admin/adminIcon2.png",
    title: "User Management",
    link: "/dashboard/user-management",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/admin/adminIcon3.png",
    title: "Breed Standards",
    link: "/dashboard/breed-standards",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/admin/adminIcon4.png",
    title: "All Hatcheries",
    link: "/dashboard/all-hatcheries",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/admin/adminIcon5.png",
    title: "Production Data",
    link: "/dashboard/production-data",
    allowedRoles: ["moderator"],
  },
  {
    icon: "/admin/adminIcon5.png",
    title: "Flock Details",
    link: "/dashboard/flock-details",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/admin/adminIcon5.png",
    title: "Simulation",
    link: "/dashboard/simulation",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/admin/adminIcon5.png",
    title: "Charts",
    link: "/dashboard/charts",
    allowedRoles: ["hatcherymember"],
  },
];

export const Status: OptionValues[] = [
  { value: "active", option: "Active", disable: false },
  { value: "inactive", option: "Inactive", disable: false },
];
