import clearScreen from "./clearScreen";
import userInputs from "../variables/userInputs";

const renderSearch = (response) => {
  const container = document.querySelector("#trackList");
  if (response) {
    if (response.tracks) {
      clearScreen(container.id);
      const length = response.tracks.items.length;
      for (let i = 0; i < length; i++) {
        const div = document.createElement("div");
        div.id = i;
        const image = document.createElement("img");
        const title = document.createElement("div");
        const artist = document.createElement("div");

        image.src = response.tracks.items[i].album.images[2].url;
        title.textContent = response.tracks.items[i].name;
        artist.textContent = response.tracks.items[i].artists[0].name;

        div.addEventListener("click", () => {
          userInputs.setTrack(response.tracks.items[i].id);
          response.tracks.items.splice(i, 1);
          clearScreen(container.id);
          renderSearch(response);
        });

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(artist);
        container.appendChild(div);
      }
    } else {
      clearScreen(container.id);
      const length = response.artists.items.length;
      for (let i = 0; i < length; i++) {
        const imageLength = response.artists.items[i].images.length - 1;
        const div = document.createElement("div");
        div.id = i;
        const image = document.createElement("img");
        const artist = document.createElement("div");
        if (response.artists.items[i].images.length != 0) {
          image.src = response.artists.items[i].images[imageLength].url;
        }
        artist.textContent = response.artists.items[i].name;

        div.addEventListener("click", () => {
          userInputs.setArtist(response.artists.items[i].id);
          response.artists.items.splice(i, 1);
          clearScreen(container.id);
          renderSearch(response);
        });

        div.appendChild(image);
        div.appendChild(artist);
        container.appendChild(div);
      }
    }
  } else {
    clearScreen(container.id);
  }
};

export default renderSearch;
