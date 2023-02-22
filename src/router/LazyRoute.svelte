<script>
    import { Route } from 'svelte-navigator';
    import Lazy from '../layout/components/Lazy.svelte';
    import RouteGuard from './RouteGuard.svelte';

    export let component;
    let props;
    let meta;

    $: {
        // eslint-disable-next-line no-shadow
        const { component, meta: metaProp, ...restProps } = $$props;
        props = restProps;
        meta = metaProp;
    }
</script>

<Route {...props}>
    <RouteGuard isPrivate={(meta || {}).isPrivate === true}>
        <Lazy {component}>
            <div class="w-full h-20 flex items-center justify-center ">Lazy Fallback element </div>
        </Lazy>
    </RouteGuard>
</Route>
