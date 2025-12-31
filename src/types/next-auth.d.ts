import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string;
    tokens?: {
      accessToken: string;
      refreshToken: string;
    };
    accessTokenExpires?: number;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string;
      tokens?: {
        accessToken: string;
        refreshToken: string;
      };
      accessTokenExpires?: number;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    tokens?: {
      accessToken: string;
      refreshToken: string;
    };
    accessTokenExpires?: number;
  }
}
