import React, { Component } from "react"
import style from "./Style.module.css"

import Logo from "../../assets/img/logo.webp"
import menu from "../../assets/img/menu-24px.svg"

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
          <img src={menu} alt="menu" />
        </label>
        <label className={style.logo}>
          <a href="https://zalnars.tk">
            <img className={style.logoimg} src={Logo} alt="logo" />
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
