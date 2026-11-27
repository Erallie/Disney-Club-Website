<script>
    let { icon, title, children } = $props();
</script>

<div class="crown">
    <div class="ico" aria-hidden="true">{icon}</div>
    <div>
        <b>{title}</b>
        <span>{@render children()}</span>
    </div>
</div>
