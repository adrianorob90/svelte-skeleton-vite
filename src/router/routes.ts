const routes = [
    {
        path: '/',
        component: () => import('../layout/pages/Home.svelte')
    },
    {
        path: '/ciao',
        component: () => import('../layout/pages/Ciao.svelte')
    },
    {
        path: '/store',
        component: () => import('../layout/pages/Store.svelte')
    },
    {
        path: '/account',
        component: () => import('../layout/pages/Account.svelte'),
        meta: {
            isPrivate: true
        }
    },
    {
        path: '/login',
        component: () => import('../layout/pages/Login.svelte')
    },
    {
        path: '/hello/:param1/:param2',
        component: () => import('../layout/pages/Hello.svelte')
    },
    {
        path: '*',
        component: () => import('../layout/pages/Home.svelte')
    }
];

export default routes;
