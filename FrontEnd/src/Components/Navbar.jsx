import React from 'react'
import style from "./style.module.css"
import { Link,NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";

function Navbar() {
  return (
    <div className={style.navbar}>
        <div className={style.navlogo}>
            <h1><span>COLO</span><span style={{color:"#F34B50"}}>SHOP</span></h1>
            
        </div>
        <div className={style.links}>
            <ul>
                <Link style={{textDecoration: "none"}}><li>Home</li></Link>
                <Link style={{textDecoration: "none"}}><li>Shop</li></Link>
                <Link style={{textDecoration: "none"}}><li>Prompotion</li></Link>
                <Link style={{textDecoration: "none"}}><li>Pages</li></Link>
                <Link style={{textDecoration: "none"}}><li>Blog</li></Link>
                <Link style={{textDecoration: "none"}}><li>Contact</li></Link>
            </ul>
        </div>
        <div className={style.icons}>
            <p><IoIosSearch/></p>
            <p><IoPerson/></p>
            <p style={{backgroundColor:"#ECEFF5", borderRadius:"50%",padding:" 7px 10px"}}><IoIosCart/></p>
            
        </div>
    </div>
  )
}

export default Navbar