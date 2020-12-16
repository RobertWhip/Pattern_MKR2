/* або авторизація PIN кодом (вірний PIN – 4 цифри, задається
літералом)
*/

const Login = require('./Login');

module.exports = class PINLogin extends Login {
    authorize(data) {
        const pin = new RegExp("^[0-9][0-9][0-9][0-9]$");
        if (!pin.test(data)) {
            throw 'Invalid PIN';
        } 
        
        super.authorize(data);
    }
}