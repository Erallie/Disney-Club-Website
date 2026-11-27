<script lang="ts">
    import { tick } from 'svelte';
    import SiteHeader from '#lib/SiteHeader.svelte';
    import SiteFooter from '#lib/SiteFooter.svelte';
    import ExpectationCard from '#lib/ExpectationCard.svelte';
    import EventRule from '#lib/EventRule.svelte';
    import GalleryPhoto from '#lib/GalleryPhoto.svelte';
    import { gallery, type GalleryEntry } from '#lib/site-content.ts';

    let dialog: HTMLDialogElement;
    let selectedPhoto = $state<GalleryEntry | null>(null);

    async function openPhoto(photo: GalleryEntry) {
        selectedPhoto = photo;
        await tick();
        dialog.showModal();
    }

    function dismissFromBackdrop(event: PointerEvent) {
        if (event.target === dialog) dialog.close();
    }

    function backToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<svelte:head>
    <title>The Disney Club</title>
    <meta name="description" content="The Disney Club is a VRChat group where we hang out and lose glass slippers which nobody can find. Join us for lavish parties with beautiful music, breathtaking performances, and a new King and Queen announced each time. Get ready to experience some Disney Magic!" />

    <meta property="og:title" content="The Disney Club" />
    <meta property="og:description" content="The Disney Club is a VRChat group where we hang out and lose glass slippers which nobody can find. Join us for lavish parties with beautiful music, breathtaking performances, and a new King and Queen announced each time. Get ready to experience some Disney Magic!" />
    <meta property="og:url" content="https://disney.gozarproductions.com" />
    <meta property="og:site_name" content="The Disney Club" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://disney.gozarproductions.com/files/website-preview.webp" />
    <meta property="og:image:width" content="1919" />
    <meta property="og:image:height" content="719" />
    <meta property="og:image:type" content="image/webp" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@ErikaGozar" />
    <meta name="twitter:creator" content="@ErikaGozar" />
    <meta name="twitter:title" content="The Disney Club" />
    <meta name="twitter:description" content="The Disney Club is a VRChat group where we hang out and lose glass slippers which nobody can find. Join us for lavish parties with beautiful music, breathtaking performances, and a new King and Queen announced each time. Get ready to experience some Disney Magic!" />
    <meta name="twitter:image" content="https://disney.gozarproductions.com/files/website-preview.webp" />
</svelte:head>

<SiteHeader home />

<section id="overview" aria-label="Overview">
    <article class="card">
        <div class="cardPad">
            <h2 class="h2">Welcome to the Ballroom</h2>
            <p class="lead">
                <strong>The Disney Club</strong> is a <a href="https://hello.vrchat.com/" target="_blank" rel="noopener">VRChat</a> group where we hang out and lose glass slippers which nobody can find.
                Join us for lavish parties with beautiful <strong>music</strong>, breathtaking <strong>performances</strong>, and a new
                <strong>King and Queen</strong> announced each time. Get ready to experience some <strong>Disney Magic!</strong>
            </p>

            <div class="divider"></div>

            <div class="callouts center-iframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2z_1kXLcG7s?si=2rS4j-4NdhRPQrbL" title="YouTube video player" style="border: 0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </article>

    <div class="cardPad sideStat">
        <iframe title="The Disney Club Discord" src="https://discord.com/widget?id=1051870694364942366&theme=dark" width="350" height="500" style="border: 0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
</section>

<section id="event" aria-label="Event">
    <div class="card">
        <div class="cardPad">
            <h2 class="h2">Upcoming Event</h2>
            <p class="lead">We have an event roughly once every 2-4 months. Here's our next one:</p>
            <div class="center-iframe">
                <img class="upcoming-event-image" src="/files/Christmas Ball 2026.webp" alt="Christmas Ball 2026">
            </div>

            <div class="event">
                <p>Deck yourselves in your merriest, most elegant winter gowns and join us on <strong>Saturday, December 19th</strong> at <strong>12pm PST / 3pm EST / 9pm CET</strong> for another <strong><a href="https://discord.gg/CRhYxCUZeC?event=1566964435338264626" target="_blank" rel="noopener">Disney Christmas Ball</a></strong>, with <strong>3 hours</strong> filled with jolly dancing, snowy Disney carols and seasonal showtunes <strong>DJ'ed live</strong> by DjDeadZed, <strong>live dance performances</strong> by the Luminaries, and <strong>live music performances</strong> by GoldenFox, Venus de Graan, and as always, yours truly! <em>(tips hat)</em></p>

                <p>Bring all your friends, join the group <a href="https://vrc.group/DISNEY.3803" target="_blank" rel="noopener"><strong>The Disney Club</strong></a> via the group code <a href="https://vrc.group/DISNEY.3803" target="_blank" rel="noopener"><code>DISNEY.3803</code></a>, and join our group instance for a wonderfully festive night full of Disney magic and holiday cheer!</p>

                <p>RSVP in the <a href="https://discord.gg/CRhYxCUZeC?event=1566964435338264626" target="_blank" rel="noopener">event</a> in our Discord.</p>
            </div>
        </div>
    </div>
</section>

<section id="expectations" aria-label="Expectations">
    <div class="card">
        <div class="cardPad">
            <h2 class="h2">What to Expect</h2>
            <p class="lead">Each ball has a magical atmosphere for everyone to enjoy!</p>

            <div class="court">
                <ExpectationCard icon={"🎶"} title={"Music & Dancing"}>
                    Beautiful music to dance to all night DJ'ed live — from high-energy danceable Disney hits to slow and passionate romantic waltzes.
                </ExpectationCard>
                <ExpectationCard icon={"🎭"} title={"Live Performances"}>
                    Live music and dance performances scattered throughout the night by friends of the ballroom and miss <a href="https://music.gozarproductions.com/performances" target="_blank" rel="noopener">Erika Gozar</a> herself!
                </ExpectationCard>
                <ExpectationCard icon={"✨"} title={"Themed Avatars"}>
                    Each event has a new theme, from sidekick companions to flowers and nature to feathery flight. Come with a new avatar for each ball!
                </ExpectationCard>
                <ExpectationCard icon={"👑"} title={"King and Queen"}>
                    Whoever is most in the spirit of the night is crowned King and Queen of the Ball!
                </ExpectationCard>
                <ExpectationCard icon={"🔍"} title={"Scavenger Hunt"}>
                    Find all 9 items scattered throughout the ballroom to unlock the <em>magical experience</em> of the world.
                </ExpectationCard>
            </div>
        </div>
    </div>
</section>

<section id="rules" aria-label="Rules">
    <div class="card">
        <div class="cardPad">
            <h2 class="h2" id="rulesTitle">Event Rules</h2>
            <EventRule number={1} title={"Be Kind and Respectful"}>
                Treat all members and staff with respect‚ and don't be a nuisance. This means no spamming‚ no trolling⁄flaming‚ no harassment‚ no blackmailing‚ no hateful comments or insults, and basically anything that is intended to hurt another person in any way, whether emotionally, mentally, or physically. In short: be a decent person.
            </EventRule>

            <EventRule number={2} title={"No NSFW"}>
                Just like the Disney films, this place is PG-13. Please keep all 18+ content in private lobbies and out of group instances.
            </EventRule>

            <EventRule number={3} title={"Avoid Annoying Avatar Features"}>
                Refrain from using avatar features that may be a nuisance to others at the event, such as shaders that mess with people's vision and animations that take up a lot of room or affect world lighting. Even people far away can usually experience these features, and it may prove annoying to those who are trying to have a conversation at a distance. We ask that you keep usage of these features to a minimum.
            </EventRule>

            <EventRule number={4} title={"You may not nominate yourself or your +1 for King and Queen"}>
                Just let others nominate you. If you are displaying the Disney spirit, people are sure to take notice. These nominations will be ignored.
            </EventRule>

            <EventRule number={5} title={"No Rallying Votes for King and Queen"}>
                In the past, we've had issues where certain individuals would go around trying to recruit people to vote for a specific couple for King and Queen. Please <strong>DO NOT</strong> do this. The King and Queen should be chosen based on people's genuine opinion, not because someone told them to. Doing this rigs the competition and is simply not fair.
            </EventRule>

            <EventRule number={6} title={"Don't Forget to Have Fun!"}>
                We're all here to have a good time. If for any reason, you find that doing what you're doing isn't fun and happy, take a break. Do something else for a bit. You can always come back when things are better.
            </EventRule>
        </div>
    </div>
</section>

<section id="gallery" aria-label="Gallery">
    <div class="card">
        <div class="cardPad">
            <h2 class="h2">Gallery of Enchanted Moments</h2>
            <p class="lead">Click an image to expand it.</p>

            <div class="gallery">
                {#each gallery as photo (photo.src)}
                    <GalleryPhoto {photo} onOpen={openPhoto} />
                {/each}
            </div>
        </div>
    </div>
</section>

<section id="join" aria-label="Join">
    <div class="card">
        <div class="cardPad">
            <h2 class="h2">Join The Disney Club</h2>
            <p class="lead">
                Ready for the magical night of your dreams? Bring your best fit, your brightest smile, and maybe… a spare slipper.
            </p>

            <div class="divider"></div>

            <div class="cta">
                <a class="btn secondary" href="https://vrc.group/DISNEY.3803" target="_blank" rel="noopener">Join Our VRChat Group</a>
                <a class="btn" id="discord" href="https://discord.gg/CRhYxCUZeC" target="_blank" rel="noopener">Join Our Discord</a>
                <button class="btn secondary" id="scrollTop" type="button" onclick={backToTop}>⬆ Back to top</button>
            </div>
        </div>
    </div>
</section>

<SiteFooter />

<dialog class="modal" bind:this={dialog} aria-labelledby="modalTitle" onpointerdown={dismissFromBackdrop} onclose={() => { selectedPhoto = null; }}>
    <div class="modalBox">
        <div class="modalTop">
            <b id="modalTitle">{selectedPhoto?.caption ?? 'Gallery'}</b>
            <form method="dialog">
                <button class="x" aria-label="Close">✕</button>
            </form>
        </div>
        {#if selectedPhoto}
            <!-- svelte-ignore a11y_no_noninteractive_tabindex (the scrolling region needs keyboard focus) -->
            <div class="modalBody" role="region" aria-label="Gallery photo and links" tabindex="0">
                <div class="modalImg">
                    <img alt={selectedPhoto.caption} src={selectedPhoto.src}>
                </div>
                {#if selectedPhoto.discordThreads?.length}
                    <section class="modalLinks" aria-labelledby="galleryDiscordTitle">
                        <h2 id="galleryDiscordTitle">More photos on Discord</h2>
                        <ul>
                            {#each selectedPhoto.discordThreads as thread}
                                <li><a href={thread.url} target="_blank" rel="noopener">{thread.label}</a></li>
                            {/each}
                        </ul>
                    </section>
                {/if}
            </div>
        {/if}
    </div>
</dialog>
