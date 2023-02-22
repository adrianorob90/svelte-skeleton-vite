<script>
    import { onMount } from 'svelte';
    import { useNavigate, useLocation, useFocus } from 'svelte-navigator';

    export let isPrivate = false;

    let isChecking = true;
    let user = null;

    const navigate = useNavigate();
    const location = useLocation();
    const registerFocus = useFocus();

    const navigateToLogin = () => {
        navigate('/login', {
            state: { from: $location.pathname },
            replace: true
        });
    };
    if (isPrivate) {
        onMount(async () => {
            try {
                await new Promise(resolve =>
                    setTimeout(() => {
                        user = true;
                        resolve(true);
                    }, 2000)
                );
            } catch {
                navigateToLogin();
            } finally {
                isChecking = false;
            }
        });
    }

    $: if (isPrivate) {
        if (!user && !isChecking) {
            navigateToLogin();
        }
    }
</script>

RouteGuard isPrivate: {isPrivate}

{#if (isPrivate && user && !isChecking) || !isPrivate}
    <slot {registerFocus} />
{/if}

{#if isPrivate && isChecking}
    <div class="w-full h-20 flex items-center justify-center ">RouteGuard Fallback element </div>
{/if}
