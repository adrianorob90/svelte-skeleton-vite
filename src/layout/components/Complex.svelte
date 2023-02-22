<script lang="ts">
    import { onMount, beforeUpdate, afterUpdate } from 'svelte';

    export let value = null;

    onMount(() => console.log('Complex Component on Mount', value));
    beforeUpdate(() => console.log('Complex Component beforeUpdate', value));
    afterUpdate(() => console.log('Complex Component afterUpdate', value));
</script>

<div>
    {value}
</div>
