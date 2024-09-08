<a href="https://www.rotsi.co.ke/">
  <img src="https://avatars.githubusercontent.com/u/157684324?s=200&v=4" alt="Rotsi API Ltd." align="right">
</a>

# ROTSI API &middot; Node.js SDK
[![Inline docs](https://inch-ci.org/github/dwyl/hapi-auth-jwt2.svg?branch=master)](https://github.com/RotsiApiLtd/rotsiapi-node.js-#readme)
[![NPM](https://img.shields.io/npm/v/rotsiapi?logo=npm&color=red)](https://www.npmjs.com/package/rotsiapi)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](http://makeapullrequest.com)
[![Activity](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/RotsiApiLtd/rotsiapi-node.js-/commits/main/)
> The official Node.js SDK for the ROTSI API.

A wrapper that provides convenient access to the ROTSI API for applications written in [Node.js](https://nodejs.org/en)

## Install

You can install the package from [npm](https://www.npmjs.com/package/rotsiapi) by running: 

```bash
$ npm i rotsiapi
```

## Usage

The package needs to be configured with your app `username` and `secret_key`, which you can get from the [dashboard](https://dashboard.rotsi.co.ke/)


```javascript
// Import the npm package.
const Rotsi = require('rotsiapi'); 

const username = 'xxxxxxxx';
const secretKey = 'xxxxxxxxxxxxxxxxxxxxxxx';

// Include additional options if needed.
const credentials = {
    secretKey: secretKey,
    username: username,
};

const rotsiInstance = Rotsi(credentials);

const stkParams = {
    amount: 1,
    phone: '254711222333', 
};
rotsiInstance.STK.initiateSTK(stkParams)
    .then(response => {
        console.log('STK initiated successfully:', response);
    })
    .catch(error => {
        console.error('Error initiating STK: ', error.response ? error.response.data : error.message);
    });
```

## Initialization

Initialize the SDK as a requirement by defining `require('rotsiapi')(credentials)`.  
After initialization, you can get instances of offered services as follows:

- [SMS Service](https://github.com/RotsiApiLtd/rotsiapi-node.js-/blob/main/lib/bulksms.js) : `Rotsi.BULKSMS`

- [STK Service](https://github.com/RotsiApiLtd/rotsiapi-node.js-/blob/main/lib/stk.js) : `Rotsi.STK`

- [KRA REMIT TAX Service](https://github.com/RotsiApiLtd/rotsiapi-node.js-/blob/main/lib/kra.js) : `Rotsi.KRA`

- [B2C Service](https://github.com/RotsiApiLtd/rotsiapi-node.js-/blob/main/lib/b2c.js) : `Rotsi.B2C`

- [SINGLE INVOICE Service](https://github.com/RotsiApiLtd/rotsiapi-node.js-/blob/main/lib/singleinvoice.js) : `Rotsi.SINGLEINVOICE`

- [BUYGOODS Service](https://github.com/RotsiApiLtd/rotsiapi-node.js-/blob/main/lib/buygoods.js) : `Rotsi.BUYGOODS`

- [PAYBILL Service](https://github.com/RotsiApiLtd/rotsiapi-node.js-/blob/main/lib/paybill.js) : `Rotsi.PAYBILL`

- [CANCEL SINGLE INVOICE Service](https://github.com/RotsiApiLtd/rotsiapi-node.js-/blob/main/lib/cancelsingleinvoice.js) : `Rotsi.CANCELSINGLEINVOICE`

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

or on Windows...

```bash
$ npm install
$ npm run test-windows
```


## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/RotsiApiLtd/rotsiapi-node.js-/issues).
