import "./styles.css"
import getUserAuth from "./functions/getUserAuth"
import getToken from "./functions/getToken"

const urlParams = new URLSearchParams(window.location.search)
let code = urlParams.get('code')

if (code) {
    const token = await getToken(code)
    localStorage.setItem("access_token", token.access_token)
    
    const url = new URL(window.location.href);
    url.searchParams.delete("code");

    const updatedUrl = url.search ? url.href : url.href.replace('?', '');
    window.history.replaceState({}, document.title, updatedUrl);


    const container = document.querySelector("#test")

    const top = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token.access_token
        },
    })

    const test = await top.json()

    for (let i = 0; i < 20; i++) {
        const div = document.createElement("div")
        div.textContent =  await JSON.stringify(test.items[i].name) + " " + await JSON.stringify(test.items[i].artists[0].name)
        container.appendChild(div)
    }
    console.log(test)
}
else {
    const login = document.querySelector("#login")

    login.addEventListener("click", async () => {
        await getUserAuth()
        getToken()
    })
}
