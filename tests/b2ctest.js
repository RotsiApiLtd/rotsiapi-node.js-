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

const b2cParams = {
    amount: 10,
    phone: '254745474586',// Replace with a valid phone number
};
console.log('Request Body:', JSON.stringify(b2cParams));
console.log("Credentials :",credentials);

rotsiInstance.B2C.initiateB2C(b2cParams)
    .then(response => {
        console.log('B2C initiated successfully:', response);
    })
    .catch(error => {
        console.error('Error initiating B2C : ', error.response ? error.response.data : error.message);
        // console.error("Error 2: ",error.response.data);

    });