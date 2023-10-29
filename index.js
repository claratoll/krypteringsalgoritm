const { sendResponse } = require('./responses/index.js');
const { encrypt } = require('./functions/encrypt.js');
const { decrypt } = require('./functions/decrypt.js');

exports.handler = async (event, context) => {
  const { method, path } = event.requestContext.http;

  let message = JSON.parse(event.body);

  // let encryptedData;

  if (method === 'POST' && path === '/encrypt') {
    console.log(message);
    encryptedData = encrypt(message);

    console.log(encryptedData);
    return encryptedData;
  } /* else if (method === 'GET' && path === '/decrypt') {
    if (encryptedData) {
      const decryptedData = decrypt(encryptedData); // Dekrypterar det sparade objektet
      return decryptedData;
    } else {
      return 'No data to decrypt'; // Om det inte finns något att dekryptera
    }
  }
*/
  return sendResponse(400, { message: 'error' });
};
