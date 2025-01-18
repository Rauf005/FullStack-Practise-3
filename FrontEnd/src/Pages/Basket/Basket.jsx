import React, { useContext } from 'react'
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { basketContext } from '../../Context/BasketContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet"
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import style from "./style.module.css"
function Basket() {
  let {basket,setBasket}=useContext(basketContext)
  let [totalPrice,setTotalPrice]=useState(0)
  function handleDecrease(item){
  if(item.count>1){
    item.count--
    setBasket([...basket])
  }else{
    let filtered=basket.filter(elem=>elem._id!=item._id)
    setBasket(filtered)
  }
  }

  function handleIncrease(item){
     item.count++
     setBasket([...basket])
  }

  function handleDelete(item){
    let filtered=basket.filter(elem=>elem._id!=item._id)
    setBasket(filtered)

  }


  function calcTotalPrice(){
      let total = basket.reduce((sum,item)=>sum + (item.price * item.count),0)
      setTotalPrice(total)
  }
  useEffect(()=>{
    calcTotalPrice()
  },[basket])




  return (
    <>
    <Helmet>
      <title>Basket</title>
    </Helmet>
    <h1 >Basket</h1>
       {
        basket.length==0 ? (
          <h2 className={style.head}>Sebetinizde mehsul yoxdur</h2>
        ):(
          <>
          
         
          
           <div className="container mt-4" >
           <Table striped bordered hover responsive>
             <thead>
               <tr>
                 <th>Image</th>
                 <th>Price</th>
                 <th>Total</th>
                 <th>Decrease</th>
                 <th>Delete</th>
                 <th>Increase</th>
               </tr>
             </thead>
             <tbody>
             {basket.map((item) => (
               <tr key={item.id}>
                 <td><img style={{width:"100px",height:"100px"}} src={item.image} alt="" /></td>
                 <td>{item.price}</td>
                 <td>{(item.price * item.count).toFixed(2)}</td>
                 <td><span onClick={()=>handleDecrease(item)}><IoIosRemoveCircle /></span></td>
                 <td><span onClick={()=>handleDelete(item)}><MdDelete/></span></td>
                 <td><span onClick={()=>handleIncrease(item)}><IoMdAdd/></span></td>
               </tr>
              ))}
             </tbody>
           </Table>
         </div>
          
        


    <span> Total : {totalPrice.toFixed(2)} </span>
          
          </>
        )
       }
    </>
  )
}

export default Basket