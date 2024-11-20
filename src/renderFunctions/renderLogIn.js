import getUserAuth from "../functions/getUserAuth";

const renderLogIn = () => {
  const container = document.querySelector("#content");
  const login = document.createElement("button");
  login.id = "button";
  login.textContent = "Log In";

  login.addEventListener("click", async () => {
    await getUserAuth();
  });

  container.appendChild(login);
};

export default renderLogIn;
