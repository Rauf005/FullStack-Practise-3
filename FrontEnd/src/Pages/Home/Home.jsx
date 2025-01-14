import React from 'react'
import style from "./style.module.css"
import { useState,useEffect } from 'react'
import axios from "axios"

function Home() {

    let [searchQuery, setSearchQuery] = useState('')
    let [products,setProducts]=useState([])
    function getData(){
      axios.get("http://localhost:3000/arrivals")
      .then((res)=>{
        setProducts(res.data)
      })
    }
    useEffect(()=>{
       getData()
    },[])

  return (
    <div className={style.home}>
        <div className={style.hero}>
           <div className={style.herotext}>
           <p>Spring / Summer Collection 2017</p>
            <h1>Get up to 30% Off New Arrivals</h1>
            <button>Shop Now</button>
           </div>

          
        </div>
        <div className={style.secim}>
            <div className={style.seccards}>
                <div className={style.seccard}> 
                <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp" alt="" />
                <div className={style.sectext}>
                   <h2> Women's</h2>
                </div>
                </div>
                <div className={style.seccard}> 
                <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="" />
                <div className={style.sectext}>
                   <h2> Acessorie's</h2>
                </div>
                </div>
                <div className={style.seccard}> 
                <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="" />
                <div className={style.sectext}>
                   <h2> Men's</h2>
                </div>
                </div>
            </div>
           </div>
           <div className={style.products}>
            <h1>New Arrivals</h1>
            <hr/>
            <div className={style.pages}>
                <span style={{border:"none",backgroundColor:"#F34B50"}}>All</span>
                <span>Women's</span>
                <span>Accessories</span>
                <span>Men's</span>
            </div>
            <div className={style.cards}>
            {products.map(product=>(
                <div className={style.card}>
                    <img src={product.image} alt="" />
                <div>
                <p>{product.name}</p>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                </div>
                    <button>Add To Cart</button>
                </div>
            ))}
            </div>
           </div>
           <div className={style.week}>
           <div className={style.weekk}>
           <img src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png" alt="" />
            <div className={style.weektext}>
                <h1>Deal Of The Week</h1>
                <hr />
                <h2>Get up to 30% Off</h2>
                <button>Shop Now</button>
            </div>
           </div>
           </div>

           <div className={style.latest}>
            <h1>Latest Blogs</h1>
            <hr />
            <div className={style.latcards}>
            <div className={style.latcard}>
                <img src="	https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />

                <div className={style.text}>
                    <p>Here are the trends I see coming this fall</p>
                    <span>by admin | dec 01, 2017</span>
                    <b>Read more</b>
                </div>
            </div>
            <div className={style.latcard}>
                <img src="	https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />

                <div className={style.text}>
                    <p>Here are the trends I see coming this fall</p>
                    <span>by admin | dec 01, 2017</span>
                    <b>Read more</b>
                </div>
            </div>
            <div className={style.latcard}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />

                <div className={style.text}>
                    <p>Here are the trends I see coming this fall</p>
                    <span>by admin | dec 01, 2017</span>
                    <b>Read more</b>
                </div>
            </div>
            </div>
           </div>
    </div>
  )
}

export default Home