export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: string;
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  accessTokenExpires: number;
}

export interface LogInProps {
  email: string;
  password: string;
}

export interface UserRoleContextType {
  role: string | null;
  status: "loading" | "authenticated" | "unauthenticated";
}

export type Role = "admin" | "moderator" | "hatcherymember";

export interface SidebarProps {
  icon: string;
  title: string;
  link: string;
  allowedRoles: Role[];
}
export interface AccountProps {
  icon: React.JSX.Element;
  title: string;
  link: string;
}

export interface HeaderProps {
  title: string;
  des: string;
  button: string;
  onClick: () => void;
  onClick1?: () => void;
  button2?: string;
}

export interface FlockPropsType {
  noOfMaleChicks: string;
  noOfFemaleChicks: string;
  breed: string;
  purposeOfSelection: string;
  source: string;
  dateOfPlacement: string;
  dateOfBirth: string;
  dateOfShipment: string;
}

export interface FlockModalProps {
  closeForm: () => void;
  onSubmit: (data: FlockPropsType) => void;
}

export interface UserPropsType {
  userId: string;
  userName: string;
  fullName: string;
  email: string;
  status: string;
}

export interface UserDataProps {
  data: UserPropsType[];
  metadata: {
    currentLimit: number;
    currentPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface InputField {
  name: string;
  title: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  value: string | number;
}

export interface OptionProps {
  value: string;
  title: string;
  name: string;
  options: OptionValues[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export interface OptionValues {
  value: string;
  option: string;
  disable?: boolean;
}

export interface UserModalProps {
  closeForm: () => void;
  onSubmit: (data: UserPropsType) => void;
  title: string;
  des: string;
}

export interface HatcheryPropsType {
  hatcheryId: string;
  registeredNumber: string;
  name: string;
  address: string;
  owner: string;
  contact: string;
  status: string;
  yearEstd: string;
}
export interface HatcheryModalProps {
  closeForm: () => void;
  onSubmit: (data: HatcheryPropsType) => void;
  title: string;
  des: string;
}

export interface BreedProps {
  breedID: string;
  breedName: string;
  fertility: string;
  infertility: string;
  eggDamageRate: string;
  hatchability: string;
  mortality: string;
  healthyChicks: string;
  unhealthyChicks: string;
  healthyAdultRate: string;
  unhealthyAdultRate: string;
}
