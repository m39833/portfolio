export type Project = {
    id: string;
    name: string;
    description: string;
    hasInfoPage: boolean;
    media: ProjectMedia;
    links: ProjectLinks;
    tags: ProjectTag[];
};

export type ProjectMedia = {
    type: "image" | "video";
    src: string;
};

export type ProjectLinkType = "website" | "demo" | "source" | "info";
export type ProjectLinks = Partial<Record<ProjectLinkType, string>>;

export type ProjectTag = string;

export const PROJECTS: Project[] = [
    {
        id: "duolingo-bot",
        name: "Duolingo Bot",
        description:
            "A CLI tool to quickly gain resources and boost account stats in Duolingo. Features commands for xp, gems, streak, and a profile monitor.",
        hasInfoPage: true,
        media: {
            type: "image",
            src: "/project-media/duolingo-bot.png"
        },
        links: {},
        tags: ["Rust"]
    },
    {
        id: "flock",
        name: "Flock",
        description:
            "An all-in-one platform designed to simplify the visa and career journey for international students and early-career professionals.",
        hasInfoPage: false,
        media: {
            type: "image",
            src: "/project-media/flock.png"
        },
        links: {
            website: "https://sachacks2025-intlstudents.vercel.app",
            source: "https://github.com/PowerOfAPoint/sachacks2025-intlstudents"
        },
        tags: ["Next.js", "PostgreSQL", "Docker", "Hackathon"]
    },
    {
        id: "animehauz",
        name: "Animehauz",
        description: "Ecommerce platform featuring anime products and collectibles.",
        hasInfoPage: false,
        media: {
            type: "image",
            src: "/project-media/animehauz.png"
        },
        links: {
            website: "https://animehauz.com"
        },
        tags: ["Next.js", "PostgreSQL", "PayloadCMS", "Stripe"]
    }
];
