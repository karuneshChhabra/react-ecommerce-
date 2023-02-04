import React, { useEffect, useState } from 'react';

export const ProductDetail = (props) => {

  const [products, setProducts] = useState([]);



  useEffect(() => {

    let productList = [];


    if (localStorage.getItem('productList')) {
      productList = JSON.parse(localStorage.getItem('productList'));
    }
    console.log(productList);
    productList = [...productList];

    // FETCH VALUE FOR EACH PRODUCT BY PRODUCT ID.
    //setProducts(productList);


    let res = Promise.all(productList.map(prod => {
      console.log(prod);

      return fetch(`https://fakestoreapi.com/products/${prod}`)
    }));

    res.then(res => {
      console.log(res);

      return Promise.all(res.map(res => res.json()));
    }).then(res => {
      console.log(res);
      //productResponse.push(res);
      // productResponse
      setProducts(res);
    });




    // })


    //   productList.forEach(prod => {
    //     console.log(prod);

    //  fetch(`https://fakestoreapi.com/products/${prod}`).then(res=>{
    //     console.log(res);
    //     return Promise.all(res.json());
    //   }).then(res=>{
    //     console.log(res);
    //     //productResponse.push(res);

    //   });




    // })



  },[]);


  return (
    <>
      {products && products.map(product => {

        return (

          <div key={product.id}>
            <img src={product.image} alt="testing "></img>
            <span> Title : {product.title}</span>
            <span> Category: {product.category}</span>
            <span> Price: {product.price} $</span>
          </div>
        );

      }
      )}
    </>
  )
}
