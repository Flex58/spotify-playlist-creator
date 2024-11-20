import "./styles.css";
import getToken from "./functions/getToken";
import getRefreshToken from "./functions/getRefreshToken.js";
import logOut from "./functions/logOut.js";
import renderLogIn from "./renderFunctions/renderLogIn.js";

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get("code");
const accessToken = localStorage.getItem("access_token");
const container = document.querySelector("#content");
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
    date.setHours(date.getHours() + 1);
    localStorage.setItem("token_expire", date);
    location.replace(location.href);
  }
  const top = await fetch("https://api.spotify.com/v1/recommendations?seed_tracks=4vY7JlA1ufbjYvDPxLXRHF,0LxbelR6d705yqYmshZHzw&limit=20&min_popularity=50", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  const test = await top.json();

  for (let i = 0; i < 20; i++) {
    const div = document.createElement("div");
    div.textContent =
      JSON.stringify(test.tracks[i].name) +
      " " +
      JSON.stringify(test.tracks[i].artists[0].name);
    container.appendChild(div);
  } 
  const logOutBtn = document.createElement("button");
  logOutBtn.textContent = "Log Out";
  logOutBtn.id = "logout";

  logOutBtn.addEventListener("click", () => {
    logOut();
  });

  container.appendChild(logOutBtn);

  console.log(test);
}

if (!accessToken) {
  renderLogIn();
}
