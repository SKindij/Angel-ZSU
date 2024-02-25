// @/views/AuthUI/Providers.tsx
// this file is intended for use in browser
'use client';

// provides access to user session data in application
import { SessionProvider } from 'next-auth/react';

// provider wraps nested components
export const Providers = ({ children }:{ children:React.ReactNode }) => {
  // to ensure access to session data for all children
  return <SessionProvider>{children}</SessionProvider>;
};