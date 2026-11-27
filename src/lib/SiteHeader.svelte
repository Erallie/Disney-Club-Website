<script>
    import { onMount } from 'svelte';
    import { navigation } from '#lib/site-content.js';

    let { home = false } = $props();
    let activeSection = $state('overview');

    onMount(() => {
        if (!home || !('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRect.height - a.intersectionRect.height)[0];

            if (visible) activeSection = visible.target.id;
        }, { rootMargin: '-35% 0px -55% 0px' });

        for (const { id } of navigation) {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        }

        return () => observer.disconnect();
    });
</script>

<header class="hero" id="top" aria-label="The Disney Club">
    <div class="heroInner">
        <div class="title-background">
            <img class="title" src="/files/Disney Text.webp" alt="The Disney Club">
        </div>
    </div>
</header>

<nav class="nav" aria-label="Site navigation">
    <ul>
        {#each navigation as { id, icon, label } (id)}
            <li>
                <a href={(home ? '' : '/') + '#' + id} class:active={home && activeSection === id}>
                    <span aria-hidden="true">{icon}</span> {label}
                </a>
            </li>
        {/each}
        <li>
            <a href="https://gozarproductions.com">
                <img class="img-icon" src="/files/gozar-productions-favicon.webp" alt=""> Back to Gozar Productions
            </a>
        </li>
    </ul>
</nav>
