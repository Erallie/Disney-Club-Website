export interface DiscordThread {
    label: string;
    url: string;
}

export interface GalleryEntry {
    caption: string;
    src: string;
    discordThreads: DiscordThread[];
}

export const navigation = [
    { id: "overview", icon: "💠", label: "Overview" },
    { id: "event", icon: "🎭", label: "Upcoming Event" },
    { id: "expectations", icon: "👑", label: "What to Expect" },
    { id: "rules", icon: "📜", label: "Rules" },
    { id: "gallery", icon: "📸", label: "Gallery" },
    { id: "join", icon: "✨", label: "Join" }
];

// Add { label: "Photographer name", url: "Discord thread link" } to the event’s discordThreads list.
export const gallery: GalleryEntry[] = [
    {
        caption: "Disney Villain's Gala 2026",
        src: "/files/gallery/Villains Gala 2026.webp",
        discordThreads: []
    },
    {
        caption: "The Waltz of the Tides",
        src: "/files/gallery/The Waltz of the Tides.webp",
        discordThreads: []
    },
    {
        caption: "Royal Soarin' Soirée",
        src: "/files/gallery/royal-soarin-soiree.webp",
        discordThreads: []
    },
    {
        caption: "Disney Christmas Ball 2025",
        src: "/files/gallery/Christmas Ball 2025.webp",
        discordThreads: []
    },
    {
        caption: "Disney Villain's Gala 2025",
        src: "/files/gallery/Villains Gala 2025.webp",
        discordThreads: []
    },
    {
        caption: "Disney Nature's Dance",
        src: "/files/gallery/Nature's Dance.webp",
        discordThreads: []
    },
    {
        caption: "Royal Sidekick Ball",
        src: "/files/gallery/Royal Sidekick Ball.webp",
        discordThreads: []
    },
    {
        caption: "Disney Christmas Ball 2024",
        src: "/files/gallery/Christmas Ball 2024.webp",
        discordThreads: []
    },
    {
        caption: "Disney Villain's Gala 2024",
        src: "/files/gallery/Villains Gala 2024.webp",
        discordThreads: []
    },
    {
        caption: "Disney Ball 2022",
        src: "/files/gallery/Disney Ball 2022.webp",
        discordThreads: []
    }
];
