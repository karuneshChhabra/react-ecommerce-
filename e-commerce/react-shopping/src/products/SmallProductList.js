import React from 'react'

function SmallProductList({product}) {

  return (
    <> {product &&  (

              <div key={product.id}>
                <h3>{product.title}</h3>
                <span>{product.price}</span>
                <p>{product.description}</p>

            

              </div>

        )}</>
  )
}

export default SmallProductList