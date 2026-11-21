let user = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
];


const getAllUsers =  () => {
    return user;
}

const createUser = async (userData) => {
    const nextId = user.length > 0 ? Math.max(...user.map(item => item.id)) + 1 : 1;
    const newUser = { id: nextId, ...userData };
    user.push(newUser);
    return newUser;
};

const getUserById = async (userId) => {
    return user.find(user => user.id === parseInt(userId));
};

const updateUser = async (userId, userData) => {
    const userIndex = user.findIndex(user => user.id === parseInt(userId));
    if (userIndex === -1) 
        return null;
    user[userIndex] = { ...user[userIndex], ...userData };
    return user[userIndex];
};

const deleteUser = async (userId) => {
    const userIndex = user.findIndex(user => user.id === parseInt(userId));
    if (userIndex === -1) 
        return null;
    const deletedUser = user.splice(userIndex, 1);
    return deletedUser[0];
};

export { getAllUsers, createUser, getUserById, updateUser, deleteUser };