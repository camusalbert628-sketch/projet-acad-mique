import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "mock-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-client-secret",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.nom,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async signIn({ account }) {
      if (account?.provider === "google") {
        // Here you would check if user exists or create them
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        token.role = user.role || "USER"; // Default Google users to USER role
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        session.user.id = token.id as string;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  events: {
    async signIn({ user }) {
      try {
        if (user.id && !user.id.includes("google")) {
            await prisma.connectionHistory.create({
            data: {
                userId: user.id
            }
            });
        }
      } catch (error) {
        console.error("Failed to log connection history:", error);
      }
    }
  },
  pages: {
    signIn: '/auth',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-key-for-dev",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
