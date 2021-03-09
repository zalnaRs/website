import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import "../assets/css/main.css"
import style from "../assets/css/index.module.css"
import SEO from "../api/seo"

export default function Home() {
  return (
    <div>
      <SEO title="Home" />
      <NavBar />
      <main>
        <center>
          <header
            id="home"
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 150,
              flexDirection: "column",
            }}
          >
            <h1
              className={style.smalltext}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Im
            </h1>
            <h1
              className={style.bigtext}
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease"
            >
              zalnaRs
            </h1>
            <div className={style.responsive} style={{ display: "flex" }}>
              <h1
                className={style.smalltext}
                data-sal="slide-up"
                data-sal-delay="600"
                data-sal-easing="ease"
              >
                from
              </h1>
              <h1
                className={style.smalltext}
                style={{ marginLeft: 12 }}
                data-sal="slide-up"
                data-sal-delay="700"
                data-sal-easing="ease"
              >
                the
              </h1>
              <h1
                className={style.bigtext}
                style={{ marginLeft: 12 }}
                data-sal="slide-up"
                data-sal-delay="800"
                data-sal-easing="ease"
              >
                That
              </h1>
              <h1
                className={style.bigtext}
                style={{ marginLeft: 12 }}
                data-sal="slide-up"
                data-sal-delay="900"
                data-sal-easing="ease"
              >
                Cake
              </h1>
              <h1
                className={style.bigtext}
                style={{ marginLeft: 12 }}
                data-sal="slide-up"
                data-sal-delay="1000"
                data-sal-easing="ease"
              >
                Id
              </h1>
              <h1
                className={style.bigtext}
                style={{ marginLeft: 12 }}
                data-sal="slide-up"
                data-sal-delay="1000"
                data-sal-easing="ease"
              >
                TEAM
              </h1>
            </div>
          </header>
          <section
            style={{
              marginTop: 300,
            }}
            id="projects"
          >
            <h1 data-sal="slide-up">Projects</h1>
            <div data-sal="slide-up" className="container">
              <div data-sal-delay="100" data-sal="slide-up" className="card">
                <img src={"img/zz.png"} width={30} alt="zz_img" />
                ZryteZene
                <p style={{ fontSize: 16 }}>
                  A Free music streaming services providing fast server respond,
                  Fast music buffering.
                </p>
                <a href="https://zrytezene.xyz" className="button">
                  Open
                </a>
              </div>
              <div data-sal-delay="200" data-sal="slide-up" className="card">
                Random number Generator
                <a
                  href="https://zalnars.github.io/randomnumber"
                  className="button"
                >
                  Open
                </a>
                <a
                  style={{ marginTop: 8 }}
                  href="https://github.com/zalnaRs/randomnumber"
                >
                  Github
                </a>
              </div>
              <div data-sal-delay="300" data-sal="slide-up" className="card">
                OffAd
                <p style={{ fontSize: 16 }}>
                  Easy, secure, fast way to block ads and trackers, Take back
                  your privacy!
                </p>
                <a href="https://github.com/zalnaRs/OffAD" className="button">
                  Github
                </a>
              </div>
            </div>
    <div data-sal-delay="400" data-sal="slide-up" className="card">
                ControllerAsInput
                <p style={{ fontSize: 16 }}>
                  ControllerAsInput is allowing to use a Xbox controller as mouse!
                </p>
                <a
                  href="https://zalnars.github.io/ControllerAsInput"
                  className="button"
                >
                  Website
                </a>
                <a
                  style={{ marginTop: 8 }}
                  href="https://github.com/zalnaRs/ControllerAsInput"
                >
                  Github
                </a>
              </div>
          </section>
        </center>
      </main>
      <Footer />
    </div>
  )
}
