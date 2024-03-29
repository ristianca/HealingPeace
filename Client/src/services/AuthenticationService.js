import Api from '@/services/Api'


export default {
    register(email, password) {
        Api().post('/register', {
            email: email,
            password: password
        })
    },
    login(credentials) {
        Api().post('/login', credentials

    )}
}

