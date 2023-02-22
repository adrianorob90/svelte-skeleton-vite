import { writable } from 'svelte/store';

const createComplex = () => {
    const { subscribe, set, update } = writable({
        a: 0,
        b: [],
        c: ''
    });

    return {
        subscribe,
        updateA: () =>
            update(s => {
                s.a++;
                return s;
            }),
        updateB: () =>
            update(s => {
                s.b.push('B');
                return s;
            }),
        updateC: () =>
            update(s => {
                s.c = s.c + 'C';
                return s;
            })
    };
};

export const complex = createComplex();
