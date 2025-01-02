// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)',
//   ],
// };





// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// // Create route matcher for protected routes
// const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])
// const isPublicRoute = createRouteMatcher(['/api/webhooks/clerk'])

// export default clerkMiddleware(async (auth, req) => {
//   // Protect the /dashboard route
//   if (isProtectedRoute(req)) {
//     await auth.protect()  // Ensure only signed-in users can access
//   }

//   // Allow /api/webhooks/clerk as a public route without authentication
//   if (isPublicRoute(req)) {
//     return; // No authentication needed, proceed as usual
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//     // Protect the /dashboard route
//     '/dashboard(.*)',
//     // Public route for /api/webhooks/clerk
//     '/api/webhooks/clerk',
//   ],
// }



import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [ '/api/webhooks/clerk']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};