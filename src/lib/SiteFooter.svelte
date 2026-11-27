<script>
    import { onMount } from 'svelte';

    let year = $state(new Date().getFullYear());

    onMount(() => { year = new Date().getFullYear(); });
</script>

<div class="footer">
    <div class="tiny">
        <p>© <span id="year">{year}</span> Erika Gozar</p>
        <p><strong>Disclaimer:</strong> The Disney Club is an independent, fan-created community and is not affiliated with, endorsed by, sponsored by, or associated with The Walt Disney Company. All related trademarks belong to their respective owners. This is a non-commercial project and generates no profit. References to Disney-related content are made under fair use for fan and community purposes. <a href="/disclaimer">(More Info)</a></p>
        <p><a href="https://gozarproductions.com/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></p>
    </div>
</div>
