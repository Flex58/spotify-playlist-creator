import getRefreshToken from "./getRefreshToken";

const getSearch = async (type, search) => {
    const accessToken = localStorage.getItem("access_token")
    try {
      if (!search) {
        throw new Error("Empty Search term")
      }
        const body = await fetch(
          `https://api.spotify.com/v1/search?q=${search}&type=${type}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          },
        );
        if (body.status != 200) {
          const error = new Error(body.status);
          error.code = body.status;
          throw error;
        }
        const response = await body.json();
        console.log(response)
        return response
      } catch (err) {
        console.log(err);
        if (err.code == 401) {
          await getRefreshToken();
        }
      }
}

export default getSearch