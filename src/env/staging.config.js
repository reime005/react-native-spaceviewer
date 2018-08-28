const keys = require('./keys');
const values = require('./values');

module.exports = {
    [keys.env]: values.env.stag,
    [keys.apiHost]: "staging.somehost.com"
}