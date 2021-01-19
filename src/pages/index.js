import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/css/main.css"
import style from "../assets/css/index.module.css"
import SEO from "../api/seo"

import zz_img from "../assets/img/zz.png"

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
            <h1>Projects</h1>
            <div className="container">
              <div className="card">
                <img src={zz_img} width={30} alt="zz_img" />
                ZryteZene
                <p style={{ fontSize: 16 }}>
                  A Free music streaming services providing fast server respond,
                  Fast music buffering.
                </p>
                <a href="https://zrytezene.xyz" className="button">
                  Open
                </a>
              </div>
              <div className="card">
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
                  github
                </a>
              </div>
              <div className="card">
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
          </section>
        </center>
      </main>
      <footer></footer>
    </div>
  )
}
