import React, { useState,useEffect } from 'react'

function ProductList() {


    const [products,setProducts] = useState([]);

    const [product, setProduct] = useState([]);

     useEffect(() => {
      fetch("https://fakestoreapi.com/products/").then(res=>{
        console.log(res);
        return res.json();
      }).then(res=>{
        console.log(res);
        setProducts(res);
      });
    
      return () => {
        
      }
    }, [])
    
    const onClick =  function(id){
       
      console.log(id);
      let productList =[];
      if(localStorage.getItem('productList')){
        productList = JSON.parse(localStorage.getItem('productList'));
        console.log(productList);
      }
      productList = [...productList,id];
      console.log(productList);
      localStorage.setItem('productList', JSON.stringify(productList));

      console.log(localStorage.getItem('productList'));

    }



  return (
    <div className="ui cards" >
    {products && products.map(product =>(



    <div key={product.id} className="ui card">
    <img src={product.image} alt="testing "></img>
    <span> Title : {product.title}</span>
    <span> Category: {product.category}</span>
    <span> Price: {product.price} $</span>
    <button onClick={() => onClick(product.id)}>Add to Cart</button>

</div>
    )
)

    }
    </div>
    )
    
  
}

export default ProductList