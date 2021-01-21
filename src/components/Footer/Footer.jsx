import React from "react"

import style from "./Style.module.css"

export default function Footer() {
  return (
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
            <img src={"img/Discord.png"} width={30} />
          </a>
          <a href="https://github.com/zalnaRs">
            <img src={"img/Github.png"} width={30} />
          </a>
        </span>

        <p>
          Powered by: <a href="https://vercel.com/">Vercel</a>!
        </p>
        <p>Made by: zalnaRs!</p>
      </div>
    </footer>
  )
}
