const jwt = require('jsonwebtoken');

const { config: { JWT_REFRESH_SECRET, JWT_SECRET } } = require('../configs');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET, { expiresIn: '30m' });
    const refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, { expiresIn: '7d' });

    return { access_token, refresh_token };
};
