import getRefreshToken from "./getRefreshToken";
import userInputs from "../variables/userInputs";

const getRecommended = async () => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const top = await fetch(
      `https://api.spotify.com/v1/recommendations?seed_tracks=${userInputs.tracks[0]},${userInputs.tracks[1]},${userInputs.tracks[2]},${userInputs.tracks[3]},${userInputs.tracks[4]}&seed_artists=${userInputs.artists[0]},${userInputs.artists[1]},${userInputs.artists[2]},${userInputs.artists[3]},${userInputs.artists[4]}&limit=20&min_popularity=50`,
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
    console.log(await top.json())
    return await top.json()
  } catch (err) {
    console.log(err);
    if (err.code == 401) {
      await getRefreshToken();
    }
  }
};

export default getRecommended;
