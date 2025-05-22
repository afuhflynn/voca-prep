import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      mapProfileToUser: (profile) => {
        return {
          name: profile.name,
          username: profile.login,
          bio: profile.bio,
          emailVerified: true,
          provider: "github",
          providerAccountId: profile.id,
          image: profile.avatar_url,
        };
      },
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      mapProfileToUser: (profile) => {
        return {
          name: profile.name,
          username: profile.given_name + profile.family_name,
          emailVerified: true,
          bio: "",
          provider: "github",
          providerAccountId: profile.aud,
          image: profile.picture,
        };
      },
    },
  },
  secret: process.env.BETTER_AUTH_SECRET!,
  plugins: [nextCookies()],
});
