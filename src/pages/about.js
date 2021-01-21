import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import "../assets/css/main.css"
import style from "../assets/css/index.module.css"
import SEO from "../api/seo"

//Github ReadMe
import marked from "marked"
import "whatwg-fetch"
//let marked = require("marked")

var storedText = "failed"
if (typeof XMLHttpRequest !== "undefined") {
  fetch(
    "https://raw.githubusercontent.com/zalnaRs/zalnaRs/master/README.md"
  ).then(function (response) {
    response.text().then(function (text) {
      storedText = text
    })
  })
}

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
      <Footer />
    </div>
  )
}
