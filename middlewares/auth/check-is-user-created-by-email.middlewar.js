const { ErrorHandler, errors } = require('../../error');
const { userServices } = require('../../serrvice');

module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;

        const user = await userServices.getUserByEmail(email);

        if (!user) {
            throw new ErrorHandler(errors.USER_NOT_CREATED.massage, errors.USER_NOT_CREATED.code);
        }
        req.user = user;
        next();
    } catch (e) {
        next(e);
    }
};
