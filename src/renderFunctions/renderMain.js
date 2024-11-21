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
    if (trackInput.value != "" & trackInput.value != " ") {
      let test = setTimeout(async () => {
        renderSearch(await getSearch("track", trackInput.value));
      }, 500);
      while (test--) {
        clearTimeout(test);
      }
    }
  });

  container.appendChild(trackLabel);
  container.appendChild(trackInput);

  const logOutBtn = document.createElement("button");
  logOutBtn.textContent = "Log Out";
  logOutBtn.id = "logout";

  logOutBtn.addEventListener("click", () => {
    logOut();
  });

  container.appendChild(logOutBtn);

};

export default renderMain;
