const { AUTHORIZATION } = require('../../constants/constans');
const { authServices } = require('../../serrvice');
const { checkHash, jwtTokinazer } = require('../../utils');
const { ErrorHandler, errors } = require('../../error');
const { NO_CONTENT } = require('../../configs/status-codes');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const { password } = req.body;
            const { user } = req.user;

            const status = await checkHash(password, user.password);

            if (!status) {
                throw new ErrorHandler(errors.WRONG_EMAIL_OR_PASS.massage, errors.WRONG_EMAIL_OR_PASS.code);
            }
            const tokens = jwtTokinazer();
            await authServices.createTokens({ ...tokens, user_id: user.id });

            res.json(tokens);
        } catch (e) {
            next(e);
        }
    },
    logoutUser: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            await authServices.deleteByParams({ access_token });

            res.status(NO_CONTENT).json('User logout');
        } catch (e) {
            next(e);
        }
    },
    refreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get(AUTHORIZATION);

            await authServices.deleteByParams({ refresh_token });

            const tokens = jwtTokinazer();
            await authServices.createTokens({ ...tokens, user_id: req.user.id });

            res.json(tokens);
        } catch (e) {
            next(e);
        }
    }
};
