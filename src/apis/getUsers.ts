import { getBaseApi } from '@/apis/baseApi';

export const getUsers = () => {
    const getUsersEndPoint = `http://5e189ce5eaa1d2001436e711.mockapi.io/users`;

    const getUsersResult = getBaseApi(getUsersEndPoint, {})
        .then((response: any) => {
            return response;
        })
        .catch(error => {
            console.log(error);
            return null;
        });
    return getUsersResult;
};

export default getUsers;
