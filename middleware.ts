import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe', "/sign-in(.)",
"/sign-up(.)",
"/api/webhooks(.*)"]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
// "/sign-in(.)",
// "/sign-up(.)",
// "/api/webhooks(.*)",
// "/", "/api/webhooks/clerk", "/api/webhooks/stripe"
// ]);

// export default clerkMiddleware((auth, request) => {
// if (!isPublicRoute(request)) {
// auth().protect();
// }
// });

// export const config = {
// matcher: ["/((?!.\..|_next).)", "/", "/(api|trpc)(.)"],
// };