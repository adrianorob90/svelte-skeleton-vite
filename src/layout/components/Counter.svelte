<script lang="ts">
    export let ciaone = 1;
    let count: number = 0;
    const increment = () => {
        count += 1;
    };
</script>

<button on:click={increment} class=" bg-red-800 p-2 text-white">
    count is {count} e ciaone è {ciaone}
</button>
