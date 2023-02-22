import singleSpaSvelte from 'single-spa-svelte';
import './index.css';
import App from './App.svelte';

const svelteLifecycles = singleSpaSvelte({
    component: App
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
