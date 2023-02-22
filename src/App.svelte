<script lang="ts">
    import Counter from './layout/components/Counter.svelte';
    import Routes from './router/Routes.svelte';
    import { Link, Router } from 'svelte-navigator';

    const links = [
        { href: '/', label: 'Home' },
        { href: '/hello/12/34', label: 'Hello' },
        { href: '/ciao', label: 'Ciao' },
        { href: '/404', label: '404' },
        { href: '/account', label: 'Account' },
        { href: '/login', label: 'Login' },
        { href: '/store', label: 'Store' }
    ];

    const getBasepath = (): string => {
        const splittedPathname = window.location.pathname.split('/');
        const brand = splittedPathname[1] || '';
        return `/${['', 'ke'].indexOf(brand) != -1 ? brand : ''}`;
    };

    const basepath = getBasepath();
</script>

<main>
    <Router {basepath}>
        <br />
        <header class="text-center border border-black m-3">
            <h1 class="font-bold">NAVIGATION</h1>
            {#each links as link}
                <Link to={link.href} class="block p-1 text-sm bg-black text-white m-1">
                    {link.label}
                </Link>
            {/each}
        </header>
        <br />
        <div class="text-center border border-black m-3">
            <p class="font-bold">ROUTER</p>
            <Routes />
        </div>

        <div class="text-center border border-black m-3">
            <p class="font-bold">EXAMPLE COMPONENT COUNTER</p>
            <Counter ciaone={4} />
        </div>
    </Router>
</main>
