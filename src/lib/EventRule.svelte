<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        number: number;
        title: string;
        children: Snippet;
    }

    let { number, title, children }: Props = $props();
</script>

<div class="stat">
    <div class="value">{number}. {title}</div>
    <div class="tiny">{@render children()}</div>
</div>
