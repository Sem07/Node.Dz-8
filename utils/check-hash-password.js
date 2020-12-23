const bcrypt = require('bcrypt');

const { ErrorHandler, errors: { WRONG_EMAIL_OR_PASS } } = require('../error');

module.exports = async (hashedPassword, password) => {
    const isPasswordTheSame = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordTheSame) {
        throw new ErrorHandler(WRONG_EMAIL_OR_PASS.message, WRONG_EMAIL_OR_PASS.code);
    }
};
