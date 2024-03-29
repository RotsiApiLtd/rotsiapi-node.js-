'use strict';
const axios = require('axios');
const Common = require('./common');
const { phonevalidator } = require('./utils');

class KRA {
    constructor(options) {
        this.options = options;
    }

    initiateKRA(params) {
        const validationError = this._validateKRAParams(params);
        if (validationError) {
            return Promise.reject(validationError);
        }
    
        const body = {
            amount: params.amount,
            recipientSC: params.recipient,
            username: this.options.username,
            AccountReference: params.prnNumber,
            Requester: params.phone,
        };
        const secret_key= this.options.secretKey;
    
        const url = Common.KRA_URL;
        console.log(url);
    
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+secret_key,
        };

        return axios.post(url, body, { headers })
            .then(response => {
                // console.log('KRA Response:', response.data);
                return response.status === 200 ? response.data : Promise.reject(response.data);
            })
            .catch(error => {
                // console.error('KRA Request Error:', error.response ? error.response.data : error.message);
                return Promise.reject(error.response.data);
            });
            
    }
    
    _validateKRAParams(params) {
        if (!params.amount || !Number.isInteger(params.amount)) {
            return new Error('Amount must be a string');
        }      
        if (!params.amount || params.amount < 10) {
            return new Error('Amount must be greater than or equal to 10 KES');
        }
        if (!params.phone || typeof params.phone !== 'string') {
            return new Error('Phone number must be a string');
        }
        if (!params.phone || !phonevalidator(params.phone)) {
            return new Error('Phone number must be format is 254xxxxxxxxx');
        }    
        if (!params.recipient || typeof params.recipient !== 'string'){
            return new Error('Invalid Recipient shortcode'); 
        }
        if (!params.prnNumber || typeof params.prnNumber !== 'string'){
            return new Error('Invalid Account Reference'); 
        }
        if (!this.options.username || typeof this.options.username !== 'string') {
            return new Error('Username must be a string');
        }
        return null;
    }
}

module.exports = KRA;