import store from './../store/store'

// this is for login-signup pages
export const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isTokenExists) {
        next()
        return
    }
    next('/dashboard')
}

// this is for inner pages
export const ifAuthenticated = (to, from, next) => {
    if (store.getters.isTokenExists) {
        next()
        return
    }
    next('/auth/login')
}
