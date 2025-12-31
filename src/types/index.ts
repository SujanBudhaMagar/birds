export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  accessTokenExpires: number;
}
type UserRole = "admin" | "moderator" | "hatcherymember";

export interface LogInProps {
  email: string;
  password: string;
}
