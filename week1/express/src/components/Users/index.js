const UsersService = require('./service');

async function findOne(req, res) {
    const user = await UsersService.findOne(req.params.id);

    return res.status(200).json({
        data: user,
    });
}

async function create(req, res) {
    const user = await UsersService.create(req.body);

    return res.status(201).json({
        data: user,
    });
}

async function deleteUser(req, res) {
    const user = await UsersService.deleteUser();

    return res.status(201).json({
        data: user,
    });
}

async function update(req, res) {
    const user = await UsersService.updateUser(req.params.id, req.body, { new: true });

    return res.status(201).json({
        data: user,
    });
}

module.exports = {
    findOne,
    create,
    deleteUser,
    update,
};
