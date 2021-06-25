class Auth {
  isAuthenticated() {
    let token = localStorage.getItem('access_token');

    if (token) return true

    return false
  }
}

export default new Auth()