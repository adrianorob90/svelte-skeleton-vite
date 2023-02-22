const baseApi = async (url: string, request: RequestInit): Promise<unknown> => {
    const result = await fetch(`${url}`, {
        ...request
    })
        .then(async response => {
            const debug = true;

            const data = await response
                .json()
                .then((json: any) => Promise.resolve(json))
                .catch(() => Promise.resolve(null));

            debug ? console.log('status', response.status, 'data', data) : null;

            if (response.status < 200 || response.status >= 300) {
                throw new Error((data || {}).message || (data || {}).errorMessage || response.statusText);
            }

            return data;
        })
        .catch((error: any) => {
            throw error;
        });

    return result;
};

export const postBaseApi = async (url: string, request: RequestInit): Promise<unknown> => {
    const result = baseApi(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...request.headers
        },
        ...request
    });

    return result;
};

export const getBaseApi = async (url: string, request: RequestInit): Promise<unknown> => {
    const result = baseApi(url, {
        method: 'GET',
        headers: {
            ...request.headers
        },
        ...request
    });

    return result;
};

export const putBaseApi = async (url: string, request: RequestInit): Promise<unknown> => {
    const result = baseApi(url, {
        method: 'PUT',
        headers: {
            ...request.headers
        },
        ...request
    });

    return result;
};

export const deleteBaseApi = async (url: string, request: RequestInit): Promise<unknown> => {
    const result = baseApi(url, {
        method: 'DELETE',
        headers: {
            ...request.headers
        },
        ...request
    });

    return result;
};
