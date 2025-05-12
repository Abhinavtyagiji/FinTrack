import { PrismaClient } from "@prisma/client";
console.log("✅ Initializing PrismaClient...");
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}