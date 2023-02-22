import { writable } from 'svelte/store';

const createUsersCount = () => {
    const { subscribe, set } = writable(0);

    return {
        subscribe,
        setValue: (value: number) => {
            set(value);
        }
    };
};

export const usersCount = createUsersCount();
