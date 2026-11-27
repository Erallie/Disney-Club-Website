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
        discordThreads: [
            {
                label: "Airbee's Group Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1563836178892071015/1563836178892071015"
            },
            {
                label: "Saya's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1564079990914683072/1564079990914683072"
            },
            {
                label: "Manie The Bat's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1564085318506909846/1564085318506909846"
            },
            {
                label: "Gideon's Photo",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1563694214674387126/1563694214674387126"
            }
        ]
    },
    {
        caption: "The Waltz of the Tides",
        src: "/files/gallery/The Waltz of the Tides.webp",
        discordThreads: [
            {
                label: "Mimmi Peppermint's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1528359966635851899/1528359966635851899"
            },
            {
                label: "Busterbleede's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1528461794539077642/1528461794539077642"
            },
            {
                label: "Saya's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1528481268688490566/1528481268688490566"
            },
            {
                label: "Hapyr's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1529061507990818926/1529061507990818926"
            }
        ]
    },
    {
        caption: "Royal Soarin' Soirée",
        src: "/files/gallery/royal-soarin-soiree.webp",
        discordThreads: [
            {
                label: "EnderEmpress' VOD",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1498367065596367049/1498367065596367049"
            },
            {
                label: "omfg hello's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1497710399850676387/1497710399850676387"
            }
        ]
    },
    {
        caption: "Disney Christmas Ball 2025",
        src: "/files/gallery/Christmas Ball 2025.webp",
        discordThreads: [
            {
                label: "Cassie's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1452165495838212236/1452165495838212236"
            },
            {
                label: "SmetsQueen's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1452090597992169635/1452090597992169635"
            },
            {
                label: "Busterbleede's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1452328073772138707/1452328073772138707"
            },
            {
                label: "Kaerun's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1452391101502586972/1452391101502586972"
            },
            {
                label: "Saya's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1452792876395270224/1452792876395270224"
            },
            {
                label: "Hapyr's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1453014070490959994/1453014070490959994"
            },
            {
                label: "Aphrodite's Favorite Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1452265068170444906/1452265068170444906"
            },
            {
                label: "Overflow Group Picture",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1452077299666255962/1452077299666255962"
            }
        ]
    },
    {
        caption: "Disney Villain's Gala 2025",
        src: "/files/gallery/Villains Gala 2025.webp",
        discordThreads: [
            {
                label: "Saya's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1429522428094316686/1429522428094316686"
            },
            {
                label: "Busterbleede's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1429466858456617132/1429466858456617132"
            },
            {
                label: "Hapyr's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1429242041493098629/1429242041493098629"
            },
            {
                label: "Kaerun's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1429574525984444496/1429574525984444496"
            },
            {
                label: "Lost Girl Nala's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1430272717311185007/1430272717311185007"
            },
            {
                label: "Aphrodite's Photo",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1429377068038099057/1429377068038099057"
            }
        ]
    },
    {
        caption: "Disney Nature's Dance",
        src: "/files/gallery/Nature's Dance.webp",
        discordThreads: [
            {
                label: "SmetsQueen's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1403893276100133054/1403893276100133054"
            },
            {
                label: "Bitsy Mouse's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1403890175485939884/1403890175485939884"
            },
            {
                label: "Saya's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1404119756608634991/1404119756608634991"
            },
            {
                label: "Aphrodite's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1404201998361821185/1404201998361821185"
            },
            {
                label: "Sound of Raindrops' Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1404159605054898336/1404159605054898336"
            },
            {
                label: "Busterbleede's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1403866090555048066/1403866090555048066"
            }
        ]
    },
    {
        caption: "Royal Sidekick Ball",
        src: "/files/gallery/Royal Sidekick Ball.webp",
        discordThreads: [
            {
                label: "Omnired's King and Queen Pics",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1375979782524633190/1375979782524633190"
            },
            {
                label: "Busterbleede's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1378434322503045180/1378434322503045180"
            },
            {
                label: "Kana's Highlight Video",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1376008778562011198/1376008778562011198"
            }
        ]
    },
    {
        caption: "Disney Christmas Ball 2024",
        src: "/files/gallery/Christmas Ball 2024.webp",
        discordThreads: [
            {
                label: "Ziggy The Rabbit's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1320201204080574594/1320201204080574594"
            },
            {
                label: "Kaerun's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1320228185681690625/1320228185681690625"
            },
            {
                label: "DustBunny's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1320201570570469376/1320201570570469376"
            },
            {
                label: "IWieldKeys' Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1322763354745344000/1322763354745344000"
            },
            {
                label: "Katherine Catgirl's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1324404504040308967/1324404504040308967"
            },
            {
                label: "Sweetbees7's Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1339744185024253965/1339744185024253965"
            }
        ]
    },
    {
        caption: "Disney Villain's Gala 2024",
        src: "/files/gallery/Villains Gala 2024.webp",
        discordThreads: [
            {
                label: "IWieldKeys' Photos",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1302384069862228020/1302384069862228020"
            },
            {
                label: "Mimmi in the Disney Ballroom",
                url: "https://discord.com/channels/1051870694364942366/1300824150922756226/threads/1301188103431786516/1301188103431786516"
            }
        ]
    },
    {
        caption: "Disney Ball 2022",
        src: "/files/gallery/Disney Ball 2022.webp",
        discordThreads: []
    }
];
