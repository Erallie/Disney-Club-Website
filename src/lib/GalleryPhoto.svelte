<script>
    let { photo, onOpen } = $props();
</script>

<button class="tile" type="button" aria-haspopup="dialog" onclick={() => onOpen(photo)}>
    <img alt="" src={photo.src}>
    <span class="cap">{photo.caption}</span>
</button>
