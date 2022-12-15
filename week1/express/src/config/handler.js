const res = require("express/lib/response");

function handler(func) {
    try {
        return func;
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    handler,
};