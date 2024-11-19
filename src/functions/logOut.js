const logOut = () => {
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("access_token")
    localStorage.removeItem("token_expire")
    location.replace(location.href)
}

export default logOut