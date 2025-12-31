import { AppUser } from "@/types";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Mock user data (replace with API later)
        const mockUser = {
          id: "1",
          fullname: "Demo User",
          email: "admin@example.com",
          roles: "moderator",
          tokens: {
            accessToken: "mock-access-token",
            refreshToken: "mock-refresh-token",
          },
        };

        // Simulate credential check
        if (
          credentials.email === "admin1@example.com" &&
          credentials.password === "password123"
        ) {
          return {
            id: mockUser.id,
            name: mockUser.fullname,
            email: mockUser.email,
            role: mockUser.roles,
            tokens: mockUser.tokens,
            accessTokenExpires: Date.now() + 15 * 60 * 1000, // 15 min
          };
        }

        return null; // Invalid login
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          accessToken: user.tokens?.accessToken ?? "",
          refreshToken: user.tokens?.refreshToken ?? "",
          accessTokenExpires: (user as AppUser).accessTokenExpires,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = {
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
          role: token.role as string,
          tokens: {
            accessToken: token.accessToken as string,
            refreshToken: token.refreshToken as string,
          },
          accessTokenExpires: token.accessTokenExpires as number,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET || "mock-secret", // Required
};
