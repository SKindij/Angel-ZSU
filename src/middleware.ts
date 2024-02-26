// middleware.ts
// provides basic functionality
export { default } from 'next-auth/middleware';

// configuring middleware to protect certain routes
export const config = {
  // indicates routes that require user authentication
  matcher: ['/admin/:path*', ]
};
