<script lang="ts">
    import { onMount, beforeUpdate, afterUpdate } from 'svelte';
    import { complex } from '@/store/complex';
    import { complexA, complexB, complexC } from '@/store/complex2';
    import Complex from '@/layout/components/Complex.svelte';

    onMount(() => console.log('Store Page on Mount'));
    beforeUpdate(() => console.log('Store Page beforeUpdate'));
    afterUpdate(() => console.log('Store Page afterUpdate'));
</script>

<div class="h-20 w-full flex items-center justify-center ">STORE</div>

<div>{JSON.stringify($complex)}</div>

<div class="h-20 w-full flex items-center justify-center space-x-4">
    <button on:click={complex.updateA} class=" bg-slate-500 p-2 text-white">updateA</button>
    <button on:click={complex.updateB} class=" bg-slate-500 p-2 text-white">updateB</button>
    <button on:click={complex.updateC} class=" bg-slate-500 p-2 text-white">updateC</button>
</div>

<div class="h-20 w-full flex items-center  justify-center space-x-4">
    <Complex value={$complex.a} />
    <Complex value={$complex.b} />
    <Complex value={$complex.c} />
</div>

<div>{JSON.stringify($complexA)}</div>
<div>{JSON.stringify($complexB)}</div>
<div>{JSON.stringify($complexC)}</div>

<div class="h-20 w-full flex items-center justify-center space-x-4">
    <button on:click={complexA.updateA} class=" bg-slate-500 p-2 text-white">updateA</button>
    <button on:click={complexB.updateB} class=" bg-slate-500 p-2 text-white">updateB</button>
    <button on:click={complexC.updateC} class=" bg-slate-500 p-2 text-white">updateC</button>
</div>

<div class="h-20 w-full flex items-center  justify-center space-x-4">
    <Complex value={$complexA} />
    <Complex value={$complexB} />
    <Complex value={$complexC} />
</div>
