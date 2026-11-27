<script>
    let { number, title, children } = $props();
</script>

<div class="stat">
    <div class="value">{number}. {title}</div>
    <div class="tiny">{@render children()}</div>
</div>
