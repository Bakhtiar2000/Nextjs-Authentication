export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] }; // Protects dashboard route from unauthorized user
