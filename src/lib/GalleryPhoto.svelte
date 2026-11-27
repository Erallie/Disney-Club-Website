<script lang="ts">
    import type { GalleryEntry } from '#lib/site-content.ts';

    interface Props {
        photo: GalleryEntry;
        onOpen: (photo: GalleryEntry) => void;
    }

    let { photo, onOpen }: Props = $props();
</script>

<button class="tile" type="button" aria-haspopup="dialog" onclick={() => onOpen(photo)}>
    <img alt="" src={photo.src}>
    <span class="cap">{photo.caption}</span>
</button>
