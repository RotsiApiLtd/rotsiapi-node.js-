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

const kraParams = {
    amount: 10,
    phone: '254745474586',// Replace with a valid phone number
    prnNumber: 'Test',
    recipient: '600000',// Replace with a valid shortcode
};
console.log('Request Body:', JSON.stringify(kraParams));
console.log("Credentials :",credentials);

rotsiInstance.KRA.initiateKRA(kraParams)
    .then(response => {
        console.log('B2C initiated successfully:', response);
    })
    .catch(error => {
        console.error('Error initiating B2C : ', error.response ? error.response.data : error.message);
        // console.error("Error 2: ",error.response.data);

    });