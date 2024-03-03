import API from '@/services/Api'

export default {
    register (credentials) {
        return API().post('register', credentials)
    }
}

// AuthenticationService.register({
//     email: "string@gmail.com"
//     password: "123456"
// })