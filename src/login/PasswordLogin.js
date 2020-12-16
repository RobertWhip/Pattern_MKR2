/* Це може бути авторизація за допомогою паролю (вірний пароль задається
літералом)
*/

const Login = require('./Login');

module.exports = class PasswordLogin extends Login {
    authorize(data) {
        const password = new RegExp("[a-zA-Z]+");
        if (!password.test(data)) {
            throw 'Invalid Password';
        } 
        
        super.authorize(data);
    }
}