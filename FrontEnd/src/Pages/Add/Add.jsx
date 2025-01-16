import React from 'react';
import { useFormik } from 'formik';
import  { useEffect, useState } from 'react';
import axios from "axios";
import * as Yup from 'yup';
import style from "./style.module.css";
import {Helmet} from "react-helmet";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {

  const [arrivals, setArrivals] = useState([]); 

 
  
  useEffect(() => {
    const fetchArrivals = async () => {
      try {
        const response = await axios.get('http://localhost:3000/arrivals');
        setArrivals(response.data); 
      } catch (error) {
        console.error('Error fetching arrivals:', error);
      }
    };

    fetchArrivals();
  }, []); 

  const formik = useFormik({
    initialValues: {
      name: '',
      description: "",
      price: "",
      image: "", 
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .min(3, 'Must be 3 characters more')
        .required('Required'),
      description: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .min(10, 'Must be 10 characters more')
        .required('Required'),
      price: Yup.number()
        .max(1000, 'Year must be less than 1000')
        .min(1, 'Year must be greater than 1')
        .required('Required'),
      image: Yup.string()
        .required('Required'), 
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:3000/arrivals", values);
        console.log("Product added successfully:", response.data);
        formik.resetForm(); 

        const updatedResponse = await axios.get('http://localhost:3000/arrivals');
        setArrivals(updatedResponse.data); 
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  });
  async function handleDelete(id) {
    
      await axios.delete(`http://localhost:3000/arrivals/${id}`);
      setArrivals((prevArrivals) => prevArrivals.filter((arrival) => arrival._id !== id));
  }
  return (
    
    <div className={style.add} style={{ width: "100%", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Helmet>
                <title>Add</title>
            </Helmet>
      <form id={style.addform} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          type="text" 
          onChange={formik.handleChange}
          checked={formik.values.name} 
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div style={{ color: "red" }}>{formik.errors.description}</div>
        ) : null}

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div style={{ color: "red" }}>{formik.errors.price}</div>
        ) : null}

        <label htmlFor="image">Image </label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div style={{ color: "red" }}>{formik.errors.image}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>

      <div className="container">
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {arrivals.map((arrival,index)=>(
           <tr key={arrival._id}>
           <td>{arrival._id}</td>
           <td>{arrival.name}</td>
           <td>{arrival.description}</td>
           <td>{arrival.price}</td>
           <td>
            <button className='btn-danger btn' onClick={()=>handleDelete(arrival._id)} >Delete</button>
           </td>
         </tr>
       
         
         ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
}

export default Add;