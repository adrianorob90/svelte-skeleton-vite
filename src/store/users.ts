import getUsers from '@/apis/getUsers';
import { writable } from 'svelte/store';
import { usersCount } from '@/store/usersCount';

const createUsers = () => {
    const { subscribe, set } = writable(null);

    return {
        subscribe,
        fetch: async () => {
            const users = await getUsers();
            set(users);
            usersCount.setValue((users || []).length);
        }
    };
};

export const users = createUsers();
