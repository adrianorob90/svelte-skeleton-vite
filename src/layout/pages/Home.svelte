<script lang="ts">
    import { useLocation, useFocus } from 'svelte-navigator';
    import { users } from '@/store/users';

    const location = useLocation();
    const registerFocus = useFocus();

    $: console.log($location);
</script>

<div id="home-wrapper" class="h-20 w-full flex items-center justify-center ">
    <h1>HOME</h1>
</div>

<div class="h-20 w-full flex items-center justify-center space-x-4">
    <h1>Users {($users || []).slice(0, 10).map(u => u.name)}</h1>
</div>

<style>
    #home-wrapper {
        background-color: yellow;
    }
</style>
