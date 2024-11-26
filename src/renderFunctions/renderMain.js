import getSearch from "../functions/getSearch";
import logOut from "../functions/logOut";
import renderSearch from "./renderSearch";

const renderMain = () => {
  const container = document.querySelector("#upperContent");

  const trackInput = document.createElement("input");
  trackInput.id = "tracks";
  const trackLabel = document.createElement("label");
  trackLabel.for = "tracks";
  trackLabel.textContent = "Tracks";

  trackInput.addEventListener("keyup", () => {
    if (trackInput.value != " ") {
      let test = setTimeout(async () => {
        renderSearch(await getSearch("track", trackInput.value));
      }, 250);
      while (test--) {
        clearTimeout(test);
      }
    }
  });
  
  const artistInput = document.createElement("input");
  artistInput.id = "artists";
  const artistLabel = document.createElement("label");
  artistLabel.for = "tracks";
  artistLabel.textContent = "Artist";

  artistInput.addEventListener("keyup", () => {
    if (artistInput.value != " ") {
      let test = setTimeout(async () => {
        renderSearch(await getSearch("artist", artistInput.value));
      }, 250);
      while (test--) {
        clearTimeout(test);
      }
    }
  });

  container.appendChild(trackLabel);
  container.appendChild(trackInput);

  container.appendChild(artistLabel);
  container.appendChild(artistInput);

  const logOutBtn = document.createElement("button");
  logOutBtn.textContent = "Log Out";
  logOutBtn.id = "logout";

  logOutBtn.addEventListener("click", () => {
    logOut();
  });

  container.appendChild(logOutBtn);

};

export default renderMain;
