const keys = require('./keys');
const values = require('./values');

module.exports = {
    [keys.env]: values.env.dev,
    [keys.apiHost]: "dev.somehost.com"
}