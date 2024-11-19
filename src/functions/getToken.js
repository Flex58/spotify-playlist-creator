import clientId from "../variables/clientID"
import redirectUri from "../variables/redirectUri.js"

const getToken = async (code) => {

    let codeVerifier = localStorage.getItem("code_verifier")

    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: clientId,
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
        }),
    }

    const body = await fetch("https://accounts.spotify.com/api/token", payload);
    const response = await body.json();

    localStorage.setItem("access_token", response.access_token)
    localStorage.setItem("refresh_token", response.refresh_token)
    const expiry = new Date()
    expiry.setHours(expiry.getHours() + 1)
    localStorage.setItem("token_expire", expiry)
}

export default getToken