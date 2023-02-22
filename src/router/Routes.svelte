<script lang="ts">
    import { Route } from 'svelte-navigator';
    import routes from './routes';
    import LazyRoute from './LazyRoute.svelte';
</script>

<!-- {#each routes as route (route.path)}
    <Route path={route.path} component={route.component} />
{/each} -->

{#each routes as route (route.path)}
    <!-- <LazyRoute path={route.path} component={route.component} /> -->
    <LazyRoute {...route} />
{/each}
