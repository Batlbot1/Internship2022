const UsersService = require('./service');

async function findOne(req, res) {
    try {
        const user = await UsersService.findOne(req.params.id);

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function create(req, res) {
    try {
        const user = await UsersService.create(req.body);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function deleteUser(req, res) {
    try {
        const user = await UsersService.findByIdAndDelete(req.params.id);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function update(req, res) {
    try {
        const user = await UsersService.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    findOne,
    create,
    deleteUser,
    update,
};
