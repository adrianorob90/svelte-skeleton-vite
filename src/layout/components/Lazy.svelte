<script>
    import { onMount } from 'svelte';

    export let component;

    let showFallback = true;
    let loadedComponent = null;
    let props;
    $: {
        // eslint-disable-next-line no-shadow
        const { component, ...restProps } = $$props;
        props = restProps;
    }

    onMount(() => {
        component().then(module => {
            loadedComponent = module.default;
            showFallback = false;
        });
    });
</script>

{#if loadedComponent}
    <svelte:component this={loadedComponent} {...props} />
{:else if showFallback}
    <slot />
{/if}
