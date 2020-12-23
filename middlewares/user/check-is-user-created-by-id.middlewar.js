const { userServices } = require('../../serrvice');
const { ErrorHandler, errors } = require('../../error');

module.exports = async (req, res, next) => {
    try {
        const { userId } = req.params;

        const user = await userServices.getUserById(userId);

        if (!user) {
            throw new ErrorHandler(errors.USER_NOT_CREATED.massage, errors.USER_NOT_CREATED.code);
        }
        next();
    } catch (e) {
        next(e);
    }
};
