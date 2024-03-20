// @/controllers/auth.ts
// an object containing authentication settings
import type { AuthOptions } from 'next-auth';
// credential authentication provider
import Credentials from 'next-auth/providers/credentials';

import { sql } from '@vercel/postgres';
import { TUser } from '@/models/types';
// import bcrypt from 'bcrypt';

// function that queries the user from the database
async function getUser(email:string):Promise<TUser|undefined> {
  try {
    const user = await sql<TUser>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
};

// authentication configuration (AuthOptions) for next-auth
export const authConfig:AuthOptions = {
  // are used for various authorization methods
  providers: [
    // to authenticate with credentials
    Credentials({
      credentials: {
        email: { label:'email', type:'email', required:true },
        password: { label:'password', type:'password', required:true },
      },
      // authorization logic
      async authorize(credentials) {
        // verification of credentials
        if (!credentials?.email || !credentials.password) return null;

        // user search by email
        const currentUser = await getUser(credentials.email);
        if (!currentUser) return null;

        // to check if the passwords match
        // const passwordsMatch = await bcrypt.compare(credentials.password, currentUser.password);

        if (currentUser.password === credentials.password) {
          // removing password before data recovery
          const { password, ...userWithoutPass } = currentUser;
          // returning user object without password
          return userWithoutPass as TUser;
        }
        // if password is incorrect
        return null;
      }
    })
  ],
  // setting up user login page
  pages: {
    signIn: '/auth/signin'
  }
};