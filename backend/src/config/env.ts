import "dotenv/config";

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined || value === "") {
    throw new Error(`Missing env ${name}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 3000),
  tiktokUsername: (process.env.TIKTOK_USERNAME ?? "").replace(/^@/, ""),
  frontendUrl: required("FRONTEND_URL", "http://localhost:5173"),
};
