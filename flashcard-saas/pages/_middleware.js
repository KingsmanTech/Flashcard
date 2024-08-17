import { withClerkMiddleware } from '@clerk/nextjs';

export default withClerkMiddleware({
  // Define your paths or any middleware-specific settings here
  // This example ensures that only authenticated users can access certain paths
  publicRoutes: ['/sign-in', '/sign-up'],
});
