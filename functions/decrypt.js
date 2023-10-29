const { sendResponse } = require('../responses/index.js');

function decrypt(body) {
  const decryptName = body.reverseName;
  const splitString = decryptName.split('');
  const correctMessage = splitString.reverse().join('');

  return sendResponse(200, { correctMessage });
}

module.exports = { decrypt };
