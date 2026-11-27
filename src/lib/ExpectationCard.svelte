<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        icon: string;
        title: string;
        children: Snippet;
    }

    let { icon, title, children }: Props = $props();
</script>

<div class="crown">
    <div class="ico" aria-hidden="true">{icon}</div>
    <div>
        <b>{title}</b>
        <span>{@render children()}</span>
    </div>
</div>
