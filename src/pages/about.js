import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/css/main.css"
import style from "../assets/css/index.module.css"
import SEO from "../api/seo"

//Github ReadMe
import marked from "marked"
//let marked = require("marked")

var storedText

fetch(
  "https://raw.githubusercontent.com/zalnaRs/zalnaRs/master/README.md"
).then(function (response) {
  response.text().then(function (text) {
    storedText = text
  })
})

export default function About() {
  return (
    <div>
      <SEO title="About" />
      <NavBar />
      <main style={{ padding: 32 }}>
        <center>
          <h1 style={{ margin: 12 }}>About me</h1>
          <div
            style={{
              background: "#f8f8f8",
              padding: 12,
              borderRadius: 24,
              listStyle: "none",
            }}
            dangerouslySetInnerHTML={{ __html: marked(storedText) }}
          />
        </center>
      </main>
      <footer>
        <div>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center!important",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <a href="https://discord.gg/ydwXQXC">
              <img src="/static/Discord.png" width={30} />
            </a>
            <a href="https://github.com/zalnaRs">
              <img src="/static/Github.png" width={30} />
            </a>
          </span>

          <p>
            Powered by: <a href="https://vercel.com/">Vercel</a>!
          </p>
          <p>Made by: zalnaRs!</p>
        </div>
      </footer>
    </div>
  )
}
