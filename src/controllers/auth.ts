// @/controllers/auth.ts
// an object containing authentication settings
import type { AuthOptions, User } from 'next-auth';
// credential authentication provider
import Credentials from 'next-auth/providers/credentials';
import { trustedUsers } from '@/services/users-data';

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
        const currentUser = trustedUsers.find(user => user.email === credentials.email);

        if (currentUser && currentUser.password === credentials.password) {
          // removing password before data recovery
          const { password, ...userWithoutPass } = currentUser;
          // returning user object without password
          return userWithoutPass as User;
        }
        // if user is not found or password is incorrect
        return null;
      }
    })
  ],
  // setting up user login page
  pages: {
    signIn: '/auth/signin'
  }
};

