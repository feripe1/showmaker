import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import { prisma } from '../../../lib/prisma';

export default NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session, user }) {
      console.log(new Date());

      const posts = (await prisma.post.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        where: {
          userId: user.id,
        },
        include: {
          likedBy: true,
        },
      })) as Post[];

      return {
        ...session,
        user: { posts: posts, ...user } as User,
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
