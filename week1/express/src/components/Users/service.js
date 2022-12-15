

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */

function findOne() {
    return {
        id: "123456",
        userName: "Vlad",
        age: "24",
        ip: "343645654534",
    };
}

function create() {
    return {
        message: 'Created',
    };
}

function deleteUser() {
    return {
        message: 'Delete',
    };
}

function updateUser() {
    return {
        message: 'Updated',
    };
}


module.exports = {
    create,
    findOne,
    deleteUser,
    updateUser,
};
