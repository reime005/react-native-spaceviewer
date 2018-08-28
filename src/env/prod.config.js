const keys = require('./keys');
const values = require('./values');

module.exports = {
    [keys.env]: values.env.prod,
    [keys.apiHost]: "prod.somehost.com"
}