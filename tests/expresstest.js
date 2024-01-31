// Import your npm package
const Rotsi = require('rotsiapi'); 

// Set your API credentials
const username = 'bluezee';
const secretKey = '30b241e1e9459417bee84681d159d181';

// Set additional options if needed
const credentials = {
    secretKey: secretKey,
    username: username,
};

// Create an instance of Rotsi
const rotsiInstance = Rotsi(credentials);

const expressParams = {
    amount: 10,
    recipient: '174379', // Replace with a valid phone number
};
console.log('Request Body:', JSON.stringify(expressParams));
console.log("Credentials :",credentials);

rotsiInstance.EXPRESSCHECKOUT.initiateExpress(expressParams)
    .then(response => {
        console.log('Express Checkout initiated successfully:', response);
    })
    .catch(error => {
        console.error('Error initiating Express Checkout: ', error.response ? error.response.data : error.message);
        // console.error("Error 2: ",error.response.data);

    });