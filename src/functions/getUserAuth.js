import generateRandomString from "./generateRandomString";
import sha256 from "./sha256.js";
import base64encode from "./base64encode";
import clientId from "../variables/clientID";
import redirectUri from "../variables/redirectUri.js";

const getUserAuth = async () => {
  const codeVerifier = generateRandomString(64);

  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const scope =
    "user-read-private user-read-email playlist-modify-private playlist-modify-public user-top-read user-read-recently-played user-library-read";

  const authUrl = new URL("https://accounts.spotify.com/authorize");

  window.localStorage.setItem("code_verifier", codeVerifier);

  const params = {
    response_type: "code",
    client_id: clientId,
    scope,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();

};


export default getUserAuth
