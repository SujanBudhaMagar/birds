import { SidebarProps, OptionValues, UserPropsType } from "@/types";

export const SidebarData: SidebarProps[] = [
  {
    icon: "/icons/icon1.png",
    title: "Overview",
    link: "/dashboard/overview",
    allowedRoles: ["admin", "hatcherymember", "moderator"],
  },
  {
    icon: "/icons/icon2.png",
    title: "User Management",
    link: "/dashboard/user-management",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/icons/icon3.png",
    title: "Breed Standards",
    link: "/dashboard/breed-standards",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/icons/icon4.png",
    title: "All Hatcheries",
    link: "/dashboard/all-hatcheries",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/icons/icon4.png",
    title: "Production Data",
    link: "/dashboard/production-data",
    allowedRoles: ["moderator"],
  },
  {
    icon: "/icons/icon5.png",
    title: "Flock Details",
    link: "/dashboard/flock-details",
    allowedRoles: ["admin", "moderator"],
  },
  {
    icon: "/icons/icon6.png",
    title: "Simulation",
    link: "/dashboard/simulation",
    allowedRoles: ["admin", "moderator", "hatcherymember"],
  },
  {
    icon: "/icons/icon7.png",
    title: "Charts",
    link: "/dashboard/charts",
    allowedRoles: ["hatcherymember", "admin", "moderator"],
  },
];

export const Status: OptionValues[] = [
  { value: "active", option: "Active", disable: false },
  { value: "inactive", option: "Inactive", disable: false },
];

export const SimulationData: OptionValues[] = [
  { value: "Choose a breed", option: "chooseABreed", disable: true },
  { value: "Local", option: "Local", disable: false },
  { value: "Broiler", option: "Broiler", disable: false },
];

export const dummyUsers: UserPropsType[] = [
  {
    userId: "1",
    email: "12@explme.com",
    userName: "John doe",
    fullName: "",
    status: "active",
  },
  {
    userId: "2",
    email: "12@explme.com",
    userName: "John doe",
    fullName: "",
    status: "active",
  },
  {
    userId: "3",
    email: "12@explme.com",
    userName: "John doe",
    fullName: "",
    status: "active",
  },
  {
    userId: "4",
    email: "12@explme.com",
    userName: "John doe",
    fullName: "",
    status: "active",
  },
  {
    userId: "5",
    email: "12@explme.com",
    userName: "John doe",
    fullName: "",
    status: "active",
  },
  {
    userId: "6",
    email: "12@explme.com",
    userName: "John doe",
    fullName: "",
    status: "active",
  },
  {
    userId: "7",
    email: "12@explme.com",
    userName: "John doe",
    fullName: "",
    status: "active",
  },
];

export const predictionData = [
  {
    title: "Baseline Prediction",
    subtitle: "Using standard breed parameters",
    stats: [
      { label: "Fertile Eggs", value: 40000 },
      { label: "Hatchable Count", value: 36250 },
      { label: "Healthy Chicks", value: 32000 },
      { label: "Mortality Count", value: 2100 },
      { label: "Healthy Adults", value: 30500 },
    ],
  },
  {
    title: "Simulated Prediction",
    subtitle: "Using adjusted parameters",
    stats: [
      { label: "Fertile Eggs", value: 37250, diff: -4.7 },
      { label: "Hatchable Count", value: 33000, diff: -8.6 },
      { label: "Healthy Chicks", value: 31680, diff: -6.7 },
      { label: "Mortality Count", value: 5200, diff: 4.7 },
      { label: "Healthy Adults", value: 28000, diff: 2.2 },
    ],
  },
];
