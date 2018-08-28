var validatejs = require("validate.js");

export const fieldNames = {
    EMAIL: 'email',
    PASSWORD: 'password',
};

export const constraints = {
    [fieldNames.EMAIL]: {
        presence: {
            allowEmpty: false,
            message: '^Please enter an email address'
        },
        email: {
            message: '^Please enter a valid email address'
        }
    },

    [fieldNames.PASSWORD]: {
        presence: {
            allowEmpty: false,
            message: '^Please enter a password'
        },
        length: {
            minimum: 6,
            message: '^Your password must be at least 6 characters'
        }
    }
}

export const validate = (fieldName, value) => {
    const result = validatejs({ [fieldName]: value }, constraints);

    // If there is an error message, return it!
    if (result && result[fieldName]) {
    // Return only the field error message if there are multiple
        return result[fieldName][0];
    }

    return '';
}

export const validateAll = (fields) => {
    return validatejs(fields, constraints);
}

export default validate;