import "./styles.css";
import getToken from "./functions/getToken";
import getRefreshToken from "./functions/getRefreshToken.js";
import renderLogIn from "./renderFunctions/renderLogIn.js";
import renderMain from "./renderFunctions/renderMain.js";

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get("code");
const accessToken = localStorage.getItem("access_token");
const date = new Date();

if (code) {
  await getToken(code);

  const url = new URL(window.location.href);
  url.searchParams.delete("code");

  const updatedUrl = url.search ? url.href : url.href.replace("?", "");
  window.history.replaceState({}, document.title, updatedUrl);
  location.replace(location.href);
}

if (accessToken) {
  const expireDate = new Date(localStorage.getItem("token_expire"));
  if (date > expireDate) {
    await getRefreshToken();
  }
  renderMain()
}

if (!accessToken) {
  renderLogIn();
}
