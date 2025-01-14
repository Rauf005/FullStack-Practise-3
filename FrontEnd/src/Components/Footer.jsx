import React from 'react'
import style from "./style.module.css"
import { CiHeart } from "react-icons/ci";

function Footer() {
  return (
    <div className={style.footer}>
        <p>©2018 All Rights Reserverd. This template is made with <span><CiHeart/></span>  by <span>Colorlib</span></p>

    </div>
  )
}

export default Footer