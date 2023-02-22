import { writable } from 'svelte/store';

const createComplexA = () => {
    console.log('bbbbbbbbb a');
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        updateA: () => update(s => s + 1)
    };
};

const createComplexB = () => {
    console.log('bbbbbbbbb b');

    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        updateB: () =>
            update(s => {
                s.push('B');
                return s;
            })
    };
};

const createComplexC = () => {
    console.log('bbbbbbbbb c');

    const { subscribe, set, update } = writable('');

    return {
        subscribe,

        updateC: () => update(s => s + 'C')
    };
};

export const complexA = createComplexA();
export const complexB = createComplexB();
export const complexC = createComplexC();
