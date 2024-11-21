import clearScreen from "./clearScreen";

const renderSearch = (response) => {
  const container = document.querySelector("#trackList");

  clearScreen(container.id)
  const length = response.tracks.items.length;
  for (let i = 0; i < length; i++) {
    const div = document.createElement("div")
    div.id = i
    const image = document.createElement("img");
    const title = document.createElement("div");
    const artist = document.createElement("div");

    image.src = response.tracks.items[i].album.images[2].url;
    title.textContent = response.tracks.items[i].name;
    artist.textContent = response.tracks.items[i].artists[0].name;

    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(artist);
    container.appendChild(div)
  }
};

export default renderSearch;
