'use strict';

function stkphonevalidator(phoneNumber) {
    // Check if it's a non-empty string
    if (typeof phoneNumber !== 'string' || phoneNumber.trim() === '') {
        return false;
    }
    // Check if it begins with '254' and has a maximum length of 12 characters
    return /^254\d{9}$/.test(phoneNumber);
}

module.exports = {
    stkphonevalidator,
};