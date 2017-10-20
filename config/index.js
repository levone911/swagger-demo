const common = {
    port: process.env.PORT || 3001
}

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`).default;

export default Object.assign({}, common, config);
