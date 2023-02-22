<script lang="ts">
    import { useLocation, useParams } from 'svelte-navigator';
    import { count } from '@/store/count';
    import { users } from '@/store/users';
    import { usersCount } from '@/store/usersCount';

    const location = useLocation();
    const params = useParams();

    $: console.log($location);
</script>

<div class="h-20 w-full flex items-center justify-center ">
    HELLO {$params.param1}
    {$params.param2}
</div>

<div class="h-20 w-full flex items-center justify-center space-x-4">
    <h1>The count is {$count}</h1>
    <button on:click={count.increment}>+</button>
    <button on:click={count.decrement}>-</button>
    <button on:click={count.reset}>reset</button>
</div>

<div class="h-20 w-full flex items-center justify-center space-x-4">
    <h1>Users {$usersCount} {($users || []).slice(0, 10).map(u => u.name)}</h1>

    <button on:click={users.fetch}>fetch</button>
</div>
