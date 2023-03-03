const urlCRUD = 'https://reqres.in/api/users';


const getUsers = async (userId) => {
    const response = await fetch(`${urlCRUD}/${userId}`);
    const {data} = await response.json();
    return data;
}

const createUser = async (user) => {
    const response = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

const updateUser = async (userId, user) => {
    const response = await fetch(`${urlCRUD}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

const deleteUser = async (userId) => {
    const {ok, status} = await fetch(`${urlCRUD}/${userId}`, {
        method: 'DELETE',
    });
    return {ok, status};
}

export {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}