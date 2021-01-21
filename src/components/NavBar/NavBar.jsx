import React, { Component } from "react"
import style from "./Style.module.css"

import { Link } from "gatsby"

class NavBar extends Component {
  render() {
    return (
      <nav className={style.navbar}>
        <input type="checkbox" className={style.menu} id="menu" />
        <label
          style={{ position: "fixed", top: 0, width: 100, right: 0 }}
          for="menu"
          className={style.check}
        >
          <img src={"img/menu-24px.svg"} alt="menu" />
        </label>
        <label className={style.logo}>
          <a href="https://zalnars.tk">
            <img className={style.logoimg} src={"img/logo.webp"} alt="logo" />
          </a>
        </label>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
