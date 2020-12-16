const PinLogin = require('./src/login/PINLogin');
const PasswordLogin = require('./src/login/PasswordLogin');
const FingerPrintLogin = require('./src/login/FingerPrintLogin');

// declare departments
const pinLogin = new PinLogin();
const passwordLogin = new PasswordLogin();
const fpLogin = new FingerPrintLogin();

pinLogin.authorize('8798');
passwordLogin.authorize('asdqeW');
fpLogin.authorize();