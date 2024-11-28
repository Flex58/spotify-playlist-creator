import getRecommended from "../functions/getRecommended";
import getSearch from "../functions/getSearch";
import logOut from "../functions/logOut";
import validateUserInputs from "../functions/validateUserInputs";
import userInputs from "../variables/userInputs";
import clearScreen from "./clearScreen";
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
      }, 200);
      while (test--) {
        clearTimeout(test);
      }
    }
  });

  const trackExcludeInput = document.createElement("input");
  trackExcludeInput.id = "tracksExclude";
  const trackExcludeLabel = document.createElement("label");
  trackExcludeLabel.for = "tracksExclude";
  trackExcludeLabel.textContent = "Exclude Track";

  trackExcludeInput.addEventListener("keyup", () => {
    if (trackExcludeInput.value != " ") {
      let test = setTimeout(async () => {
        renderSearch(
          await getSearch("track", trackExcludeInput.value),
          "exclude",
        );
      }, 200);
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
      }, 200);
      while (test--) {
        clearTimeout(test);
      }
    }
  });

  const artistExcludeInput = document.createElement("input");
  artistExcludeInput.id = "artistsExclude";
  const artistExcludeLabel = document.createElement("label");
  artistExcludeLabel.for = "artistsExclude";
  artistExcludeLabel.textContent = "Exclude Artist";

  artistExcludeInput.addEventListener("keyup", () => {
    if (artistExcludeInput.value != " ") {
      let test = setTimeout(async () => {
        renderSearch(await getSearch("artist", artistExcludeInput.value), "exclude");
      }, 200);
      while (test--) {
        clearTimeout(test);
      }
    }
  });

  container.appendChild(trackLabel);
  container.appendChild(trackInput);

  container.appendChild(artistLabel);
  container.appendChild(artistInput);

  container.appendChild(trackExcludeLabel);
  container.appendChild(trackExcludeInput);

  container.appendChild(artistExcludeLabel);
  container.appendChild(artistExcludeInput);

  const getPlaylist = document.createElement("button");
  getPlaylist.textContent = "Get Playlist";
  getPlaylist.id = "getPlaylist";

  getPlaylist.addEventListener("click", async () => {
    if (validateUserInputs()) {
      clearScreen("trackList");
      await getRecommended();
      userInputs.tracks = [];
      userInputs.artists = [];
    }
  });

  container.appendChild(getPlaylist);

  const logOutBtn = document.createElement("button");
  logOutBtn.textContent = "Log Out";
  logOutBtn.id = "logout";

  logOutBtn.addEventListener("click", () => {
    logOut();
  });

  container.appendChild(logOutBtn);
};

export default renderMain;
