const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  messageEncDec(message, key, enc) {

    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabetLength = this.alphabet.length;

    let currentChar;
    let keyChar;
    let currentCharInd = 0;
    let currentKeyInd = 0;

    let keyInd = 0;
    let newInd = 0;

    let newMessage = '';

    for (let i = 0; i < message.length; i++) {

      currentChar = message[i];
      currentCharInd = this.alphabet.indexOf(currentChar);

      if (currentCharInd === -1) {
        newMessage += currentChar;
        continue;
      }

      keyChar = key[keyInd % key.length];
      currentKeyInd = this.alphabet.indexOf(keyChar);

      if (enc) {
        newInd = (currentCharInd + currentKeyInd) % alphabetLength;
      } else {
        newInd = (currentCharInd - currentKeyInd + alphabetLength) % alphabetLength;
      }

      newMessage += this.alphabet[newInd];
      keyInd++;
    }

    if (this.direct) {
      return newMessage;
    } else {
      return newMessage.split('').reverse().join('');
    }

  }

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.messageEncDec(message, key, true);
  }
  decrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.messageEncDec(message, key, false);
  }

}

module.exports = {
  VigenereCipheringMachine
};
