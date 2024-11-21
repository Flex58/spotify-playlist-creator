import getRefreshToken from "./getRefreshToken";

const getRecommended = async () => {
    const container = document.querySelector("#content")
    const accessToken = localStorage.getItem("access_token");
    try {
        const top = await fetch(
          "https://api.spotify.com/v1/recommendations?seed_tracks=4vY7JlA1ufbjYvDPxLXRHF,0LxbelR6d705yqYmshZHzw&seed_artists=&limit=20&min_popularity=50",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          },
        );
        if (top.status != 200) {
          const error = new Error(top.status);
          error.code = top.status;
          throw error;
        }
        const test = await top.json();
        for (let i = 0; i < 20; i++) {
          const div = document.createElement("div");
          div.textContent =
            JSON.stringify(test.tracks[i].name) +
            " " +
            JSON.stringify(test.tracks[i].artists[0].name);
          container.appendChild(div);
        }
      } catch (err) {
        console.log(err);
        if (err.code == 401) {
          await getRefreshToken();
        }
      }
}

export default getRecommended