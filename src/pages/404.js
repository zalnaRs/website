import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import "../assets/css/main.css"

import SEO from "../api/seo"

export default function Home() {
  return (
    <div>
      <SEO title="404" />
      <NavBar />
      <main>
        <header
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 150,
            flexDirection: "column",
          }}
        >
          <h1 style={{ margin: 12 }}>404</h1>
          <h2 style={{ margin: 12 }}>Page not found!</h2>
          <p style={{ fontSize: 12, margin: 12 }}>Sorry!</p>
          <a style={{ color: "black", margin: 12 }} href="https://zalnars.tk">
            Go back to the home page!
          </a>
        </header>
      </main>
      <Footer />
    </div>
  )
}
