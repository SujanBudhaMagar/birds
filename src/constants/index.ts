import { AdminSidebarProps, OptionValues } from "@/types";

export const AdminSidebar: AdminSidebarProps[] = [
  {
    icon: "/admin/adminIcon1.png",
    title: "Overview",
    link: "/dashboard/overview",
  },
  {
    icon: "/admin/adminIcon2.png",
    title: "User Management",
    link: "/dashboard/user-management",
  },
  {
    icon: "/admin/adminIcon3.png",
    title: "Breed Standards",
    link: "/dashboard/breed-standards",
  },
  {
    icon: "/admin/adminIcon4.png",
    title: "All Hatcheries",
    link: "/dashboard/all-hatcheries",
  },
  {
    icon: "/admin/adminIcon5.png",
    title: "Flock Details",
    link: "/dashboard/flock-details",
  },
];

export const Status: OptionValues[] = [
  { value: "active", option: "Active", disable: false },
  { value: "inactive", option: "Inactive", disable: false },
];
