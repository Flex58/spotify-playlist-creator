import clientId from "../variables/clientID";

const getRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");

  const body = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  });

  const response = await body.json();
  localStorage.setItem("access_token", response.access_token);
  if (response.refresh_token) {
    localStorage.setItem("refresh_token", response.refresh_token);
  }
  if (response.access_token) {
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 1);
    localStorage.setItem("token_expire", expiry);
  }
};

export default getRefreshToken;
