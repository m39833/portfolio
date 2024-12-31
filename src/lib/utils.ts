import { dev } from "$app/environment";
import { env } from "$env/dynamic/public";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getBaseUrl() {
    if (typeof window !== "undefined") return window.location.origin;
    if (!dev && env.PUBLIC_SITE_URL) return env.PUBLIC_SITE_URL;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT ?? 4173}`;
}
