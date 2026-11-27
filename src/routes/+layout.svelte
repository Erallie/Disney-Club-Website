<script>
    import './styles.css';
    import SparkleBackground from '#lib/SparkleBackground.svelte';

    let { children } = $props();
</script>

<SparkleBackground />

<div class="wrap">
    {@render children()}
</div>
