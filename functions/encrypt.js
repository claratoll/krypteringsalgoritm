const { sendResponse } = require('../responses/index.js');

function encrypt(body) {
  const encryptName = body.message;
  const splitString = encryptName.split('');
  const reverseName = splitString.reverse().join('');

  return sendResponse(200, { reverseName });
}

module.exports = { encrypt };
