<script lang="ts">
    import type { Snippet } from 'svelte';
    import './styles.css';
    import SparkleBackground from '#lib/SparkleBackground.svelte';

    let { children }: { children: Snippet } = $props();
</script>

<SparkleBackground />

<div class="wrap">
    {@render children()}
</div>
