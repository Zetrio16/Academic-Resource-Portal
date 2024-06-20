const crypto = require('crypto');  // Include the native crypto module
// author: mnmustafa110
// Function to hash the password using native crypto
function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
}

// Function to compare passwords using native crypto
function comparePasswords(inputPassword, hashedPassword) {
    const [salt, originalHash] = hashedPassword.split(':');
    const hash = crypto.pbkdf2Sync(inputPassword, salt, 10000, 64, 'sha512').toString('hex');
    return hash === originalHash;
}

function generate_random_pass(){
let chars = '0123456789abcdefghijklmnopqrstuvwxyz@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let pwordLength = 12;
let password = '';
const array = new Uint32Array(chars.length);
crypto.getRandomValues(array);
for (let i = 0; i < pwordLength; i++) {
  password += chars[array[i] % chars.length];
}
return password;
}
module.exports={hashPassword,comparePasswords,generate_random_pass}