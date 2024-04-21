import { GetServerSidePropsContext } from 'next';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
const prisma = new PrismaClient();

export async function getUser(context: GetServerSidePropsContext) {
    try {
        const session = await getServerSession(authOptions);
        const sessionUsername = session?.user.username;
      
        if (!sessionUsername) {
          console.error('Session username not found.');
          return {
            props: {},
          };
        }
      
        const user = await prisma.user.findFirst({
          where: {
            username: sessionUsername,
          },
        });
      
        if (!user) {
          console.error('User not found.');
          return {
            props: {},
          };
        }

        return {
          props: {
            user,
          },
        };
    } catch (error) {
        console.error('Error fetching user:', error);
        return {
          props: {},
        };
    } finally {
        await prisma.$disconnect();
    }
}
